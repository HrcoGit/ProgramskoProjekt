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
    public class OstaloController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public OstaloController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Ostalo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ostalo>>> GetOstalo()
        {
            return await _context.Ostalo.ToListAsync();
        }

        // GET: api/Ostalo/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Ostalo>> GetOstalo(int id)
        {
            var ostalo = await _context.Ostalo.FindAsync(id);

            if (ostalo == null)
            {
                return NotFound();
            }

            return ostalo;
        }

        // POST: api/Ostalo
        [HttpPost]
        public async Task<ActionResult<Ostalo>> PostOstalo(Ostalo ostalo)
        {
            _context.Ostalo.Add(ostalo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOstalo", new { id = ostalo.IdOstalo }, ostalo);
        }

        // PUT: api/Ostalo/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOstalo(int id, Ostalo ostalo)
        {
            if (id != ostalo.IdOstalo)
            {
                return BadRequest();
            }

            _context.Entry(ostalo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OstaloExists(id))
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

        // DELETE: api/Ostalo/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOstalo(int id)
        {
            var ostalo = await _context.Ostalo.FindAsync(id);
            if (ostalo == null)
            {
                return NotFound();
            }

            _context.Ostalo.Remove(ostalo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OstaloExists(int id)
        {
            return _context.Ostalo.Any(e => e.IdOstalo == id);
        }
    }
}
