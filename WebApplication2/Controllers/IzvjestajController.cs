using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Programsko.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourNamespace.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IzvjestajController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public IzvjestajController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Izvjestaj
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Izvjestaj>>> GetIzvjestaji()
        {
            return await _context.Izvjestaj.ToListAsync();
        }

        // GET: api/Izvjestaj/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Izvjestaj>> GetIzvjestaj(int id)
        {
            var izvjestaj = await _context.Izvjestaj.FindAsync(id);

            if (izvjestaj == null)
            {
                return NotFound();
            }

            return izvjestaj;
        }

        // POST: api/Izvjestaj
        [HttpPost]
        public async Task<ActionResult<Izvjestaj>> PostIzvjestaj(Izvjestaj izvjestaj)
        {
            _context.Izvjestaj.Add(izvjestaj);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIzvjestaj", new { id = izvjestaj.IdIzvjestaj }, izvjestaj);
        }

        // PUT: api/Izvjestaj/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIzvjestaj(int id, Izvjestaj izvjestaj)
        {
            if (id != izvjestaj.IdIzvjestaj)
            {
                return BadRequest();
            }

            _context.Entry(izvjestaj).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IzvjestajExists(id))
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

        // DELETE: api/Izvjestaj/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIzvjestaj(int id)
        {
            var izvjestaj = await _context.Izvjestaj.FindAsync(id);
            if (izvjestaj == null)
            {
                return NotFound();
            }

            _context.Izvjestaj.Remove(izvjestaj);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool IzvjestajExists(int id)
        {
            return _context.Izvjestaj.Any(e => e.IdIzvjestaj == id);
        }
    }
}
