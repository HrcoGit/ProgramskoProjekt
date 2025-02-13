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
    public class GlazbaController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public GlazbaController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Glazba
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Glazba>>> GetGlazbe()
        {
            return await _context.Glazba.ToListAsync();
        }

        // GET: api/Glazba/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Glazba>> GetGlazba(int id)
        {
            var glazba = await _context.Glazba.FindAsync(id);

            if (glazba == null)
            {
                return NotFound();
            }

            return glazba;
        }

        // POST: api/Glazba
        [HttpPost]
        public async Task<ActionResult<Glazba>> PostGlazba(Glazba glazba)
        {
            _context.Glazba.Add(glazba);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGlazba", new { id = glazba.IdGlazba }, glazba);
        }

        // PUT: api/Glazba/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGlazba(int id, Glazba glazba)
        {
            if (id != glazba.IdGlazba)
            {
                return BadRequest();
            }

            _context.Entry(glazba).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GlazbaExists(id))
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

        // DELETE: api/Glazba/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGlazba(int id)
        {
            var glazba = await _context.Glazba.FindAsync(id);
            if (glazba == null)
            {
                return NotFound();
            }

            _context.Glazba.Remove(glazba);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GlazbaExists(int id)
        {
            return _context.Glazba.Any(e => e.IdGlazba == id);
        }
    }
}
