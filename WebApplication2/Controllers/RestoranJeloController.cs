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
    public class RestoranJeloController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RestoranJeloController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/RestoranJelo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RestoranJelo>>> GetRestoranJela()
        {
            return await _context.RestoranJelo.ToListAsync();
        }

        // GET: api/RestoranJelo/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<RestoranJelo>> GetRestoranJelo(int id)
        {
            var restoranJelo = await _context.RestoranJelo.FindAsync(id);

            if (restoranJelo == null)
            {
                return NotFound();
            }

            return restoranJelo;
        }

        // POST: api/RestoranJelo
        [HttpPost]
        public async Task<ActionResult<RestoranJelo>> PostRestoranJelo(RestoranJelo restoranJelo)
        {
            _context.RestoranJelo.Add(restoranJelo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRestoranJelo", new { id = restoranJelo.IdRj }, restoranJelo);
        }

        // PUT: api/RestoranJelo/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRestoranJelo(int id, RestoranJelo restoranJelo)
        {
            if (id != restoranJelo.IdRj)
            {
                return BadRequest();
            }

            _context.Entry(restoranJelo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RestoranJeloExists(id))
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

        // DELETE: api/RestoranJelo/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRestoranJelo(int id)
        {
            var restoranJelo = await _context.RestoranJelo.FindAsync(id);
            if (restoranJelo == null)
            {
                return NotFound();
            }

            _context.RestoranJelo.Remove(restoranJelo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RestoranJeloExists(int id)
        {
            return _context.RestoranJelo.Any(e => e.IdRj == id);
        }
    }
}
