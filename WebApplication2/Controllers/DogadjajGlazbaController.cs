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
    public class DogadjajGlazbaController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DogadjajGlazbaController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/DogadjajGlazba
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DogadjajGlazba>>> GetDogadjajGlazbe()
        {
            return await _context.DogadjajGlazba.ToListAsync();
        }

        // GET: api/DogadjajGlazba/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<DogadjajGlazba>> GetDogadjajGlazba(int id)
        {
            var dogadjajGlazba = await _context.DogadjajGlazba.FindAsync(id);

            if (dogadjajGlazba == null)
            {
                return NotFound();
            }

            return dogadjajGlazba;
        }

        // POST: api/DogadjajGlazba
        [HttpPost]
        public async Task<ActionResult<DogadjajGlazba>> PostDogadjajGlazba(DogadjajGlazba dogadjajGlazba)
        {
            _context.DogadjajGlazba.Add(dogadjajGlazba);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDogadjajGlazba", new { id = dogadjajGlazba.IdDg }, dogadjajGlazba);
        }

        // PUT: api/DogadjajGlazba/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDogadjajGlazba(int id, DogadjajGlazba dogadjajGlazba)
        {
            if (id != dogadjajGlazba.IdDg)
            {
                return BadRequest();
            }

            _context.Entry(dogadjajGlazba).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DogadjajGlazbaExists(id))
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

        // DELETE: api/DogadjajGlazba/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDogadjajGlazba(int id)
        {
            var dogadjajGlazba = await _context.DogadjajGlazba.FindAsync(id);
            if (dogadjajGlazba == null)
            {
                return NotFound();
            }

            _context.DogadjajGlazba.Remove(dogadjajGlazba);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DogadjajGlazbaExists(int id)
        {
            return _context.DogadjajGlazba.Any(e => e.IdDg == id);
        }
    }
}
