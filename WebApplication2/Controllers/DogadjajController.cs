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
    public class DogadjajController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DogadjajController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Dogadjaj
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Dogadjaj>>> GetDogadjaji()
        {
            return await _context.Dogadjaj.ToListAsync();
        }

        // GET: api/Dogadjaj/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Dogadjaj>> GetDogadjaj(int id)
        {
            var dogadjaj = await _context.Dogadjaj.FindAsync(id);

            if (dogadjaj == null)
            {
                return NotFound();
            }

            return dogadjaj;
        }

        // POST: api/Dogadjaj
        [HttpPost]
        public async Task<ActionResult<Dogadjaj>> PostDogadjaj(Dogadjaj dogadjaj)
        {
            _context.Dogadjaj.Add(dogadjaj);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDogadjaj", new { id = dogadjaj.IdDogadjaj }, dogadjaj);
        }

        // PUT: api/Dogadjaj/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDogadjaj(int id, Dogadjaj dogadjaj)
        {
            if (id != dogadjaj.IdDogadjaj)
            {
                return BadRequest();
            }

            _context.Entry(dogadjaj).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DogadjajExists(id))
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

        // DELETE: api/Dogadjaj/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDogadjaj(int id)
        {
            var dogadjaj = await _context.Dogadjaj.FindAsync(id);
            if (dogadjaj == null)
            {
                return NotFound();
            }

            _context.Dogadjaj.Remove(dogadjaj);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DogadjajExists(int id)
        {
            return _context.Dogadjaj.Any(e => e.IdDogadjaj == id);
        }
    }
}
