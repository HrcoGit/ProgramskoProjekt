using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Programsko.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Programsko.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AutomobiliController : ControllerBase
    {
        private readonly ApplicationDbContext _context; // Updated the type to ApplicationDbContext

        public AutomobiliController(ApplicationDbContext context) // Updated the constructor parameter
        {
            _context = context;
        }

        // GET: api/Automobili
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Automobili>>> GetAutomobili()
        {
            return await _context.Automobili.ToListAsync();
        }

        // GET: api/Automobili/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Automobili>> GetAutomobil(int id)
        {
            var automobil = await _context.Automobili.FindAsync(id);

            if (automobil == null)
            {
                return NotFound();
            }

            return automobil;
        }

        // POST: api/Automobili
        [HttpPost]
        public async Task<ActionResult<Automobili>> CreateAutomobil(Automobili automobil)
        {
            _context.Automobili.Add(automobil);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAutomobil), new { id = automobil.IdAutomobili }, automobil);
        }

        // PUT: api/Automobili/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAutomobil(int id, Automobili automobil)
        {
            if (id != automobil.IdAutomobili)
            {
                return BadRequest();
            }

            _context.Entry(automobil).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AutomobilExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Automobili/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAutomobil(int id)
        {
            var automobil = await _context.Automobili.FindAsync(id);
            if (automobil == null)
            {
                return NotFound();
            }

            _context.Automobili.Remove(automobil);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AutomobilExists(int id)
        {
            return _context.Automobili.Any(e => e.IdAutomobili == id);
        }
    }
}
