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
    public class RestoranController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RestoranController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Restoran
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Restoran>>> GetRestorani()
        {
            return await _context.Restoran.ToListAsync();
        }

        // GET: api/Restoran/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Restoran>> GetRestoran(int id)
        {
            var restoran = await _context.Restoran.FindAsync(id);

            if (restoran == null)
            {
                return NotFound();
            }

            return restoran;
        }

        // POST: api/Restoran
        [HttpPost]
        public async Task<ActionResult<Restoran>> PostRestoran(Restoran restoran)
        {
            _context.Restoran.Add(restoran);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRestoran", new { id = restoran.IdRestoran }, restoran);
        }

        // PUT: api/Restoran/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRestoran(int id, Restoran restoran)
        {
            if (id != restoran.IdRestoran)
            {
                return BadRequest();
            }

            _context.Entry(restoran).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RestoranExists(id))
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

        // DELETE: api/Restoran/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRestoran(int id)
        {
            var restoran = await _context.Restoran.FindAsync(id);
            if (restoran == null)
            {
                return NotFound();
            }

            _context.Restoran.Remove(restoran);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RestoranExists(int id)
        {
            return _context.Restoran.Any(e => e.IdRestoran == id);
        }
    }
}
