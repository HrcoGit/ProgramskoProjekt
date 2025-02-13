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
    public class DogadjajRestoranController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DogadjajRestoranController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/DogadjajRestoran
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DogadjajRestoran>>> GetDogadjajRestorani()
        {
            return await _context.DogadjajRestoran.ToListAsync();
        }

        // GET: api/DogadjajRestoran/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<DogadjajRestoran>> GetDogadjajRestoran(int id)
        {
            var dogadjajRestoran = await _context.DogadjajRestoran.FindAsync(id);

            if (dogadjajRestoran == null)
            {
                return NotFound();
            }

            return dogadjajRestoran;
        }

        // POST: api/DogadjajRestoran
        [HttpPost]
        public async Task<ActionResult<DogadjajRestoran>> PostDogadjajRestoran(DogadjajRestoran dogadjajRestoran)
        {
            _context.DogadjajRestoran.Add(dogadjajRestoran);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDogadjajRestoran", new { id = dogadjajRestoran.IdDr }, dogadjajRestoran);
        }

        // PUT: api/DogadjajRestoran/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDogadjajRestoran(int id, DogadjajRestoran dogadjajRestoran)
        {
            if (id != dogadjajRestoran.IdDr)
            {
                return BadRequest();
            }

            _context.Entry(dogadjajRestoran).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DogadjajRestoranExists(id))
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

        // DELETE: api/DogadjajRestoran/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDogadjajRestoran(int id)
        {
            var dogadjajRestoran = await _context.DogadjajRestoran.FindAsync(id);
            if (dogadjajRestoran == null)
            {
                return NotFound();
            }

            _context.DogadjajRestoran.Remove(dogadjajRestoran);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DogadjajRestoranExists(int id)
        {
            return _context.DogadjajRestoran.Any(e => e.IdDr == id);
        }
    }
}
