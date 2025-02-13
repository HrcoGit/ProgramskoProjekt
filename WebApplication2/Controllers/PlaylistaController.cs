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
    public class PlaylistaController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PlaylistaController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Playlista
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Playlista>>> GetPlaylistas()
        {
            return await _context.Playlista.ToListAsync();
        }

        // GET: api/Playlista/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Playlista>> GetPlaylista(int id)
        {
            var playlista = await _context.Playlista.FindAsync(id);

            if (playlista == null)
            {
                return NotFound();
            }

            return playlista;
        }

        // POST: api/Playlista
        [HttpPost]
        public async Task<ActionResult<Playlista>> PostPlaylista(Playlista playlista)
        {
            _context.Playlista.Add(playlista);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPlaylista", new { id = playlista.IdPlaylista }, playlista);
        }

        // PUT: api/Playlista/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPlaylista(int id, Playlista playlista)
        {
            if (id != playlista.IdPlaylista)
            {
                return BadRequest();
            }

            _context.Entry(playlista).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlaylistaExists(id))
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

        // DELETE: api/Playlista/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePlaylista(int id)
        {
            var playlista = await _context.Playlista.FindAsync(id);
            if (playlista == null)
            {
                return NotFound();
            }

            _context.Playlista.Remove(playlista);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PlaylistaExists(int id)
        {
            return _context.Playlista.Any(e => e.IdPlaylista == id);
        }
    }
}
