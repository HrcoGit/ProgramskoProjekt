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
    public class SalonController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SalonController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Salon
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Salon>>> GetSaloni()
        {
            return await _context.Salon.ToListAsync();
        }

        // GET: api/Salon/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Salon>> GetSalon(int id)
        {
            var salon = await _context.Salon.FindAsync(id);

            if (salon == null)
            {
                return NotFound();
            }

            return salon;
        }

        // POST: api/Salon
        [HttpPost]
        public async Task<ActionResult<Salon>> PostSalon(Salon salon)
        {
            _context.Salon.Add(salon);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSalon", new { id = salon.IdSalon }, salon);
        }

        // PUT: api/Salon/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSalon(int id, Salon salon)
        {
            if (id != salon.IdSalon)
            {
                return BadRequest();
            }

            _context.Entry(salon).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SalonExists(id))
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

        // DELETE: api/Salon/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSalon(int id)
        {
            var salon = await _context.Salon.FindAsync(id);
            if (salon == null)
            {
                return NotFound();
            }

            _context.Salon.Remove(salon);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SalonExists(int id)
        {
            return _context.Salon.Any(e => e.IdSalon == id);
        }
    }
}
