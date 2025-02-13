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
    public class DogadjajSlasticarnaController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DogadjajSlasticarnaController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/DogadjajSlasticarna
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DogadjajSlasticarna>>> GetDogadjajSlasticarne()
        {
            return await _context.DogadjajSlasticarna.ToListAsync();
        }

        // GET: api/DogadjajSlasticarna/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<DogadjajSlasticarna>> GetDogadjajSlasticarna(int id)
        {
            var dogadjajSlasticarna = await _context.DogadjajSlasticarna.FindAsync(id);

            if (dogadjajSlasticarna == null)
            {
                return NotFound();
            }

            return dogadjajSlasticarna;
        }

        // POST: api/DogadjajSlasticarna
        [HttpPost]
        public async Task<ActionResult<DogadjajSlasticarna>> PostDogadjajSlasticarna(DogadjajSlasticarna dogadjajSlasticarna)
        {
            _context.DogadjajSlasticarna.Add(dogadjajSlasticarna);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDogadjajSlasticarna", new { id = dogadjajSlasticarna.IdDs }, dogadjajSlasticarna);
        }

        // PUT: api/DogadjajSlasticarna/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDogadjajSlasticarna(int id, DogadjajSlasticarna dogadjajSlasticarna)
        {
            if (id != dogadjajSlasticarna.IdDs)
            {
                return BadRequest();
            }

            _context.Entry(dogadjajSlasticarna).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DogadjajSlasticarnaExists(id))
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

        // DELETE: api/DogadjajSlasticarna/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDogadjajSlasticarna(int id)
        {
            var dogadjajSlasticarna = await _context.DogadjajSlasticarna.FindAsync(id);
            if (dogadjajSlasticarna == null)
            {
                return NotFound();
            }

            _context.DogadjajSlasticarna.Remove(dogadjajSlasticarna);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DogadjajSlasticarnaExists(int id)
        {
            return _context.DogadjajSlasticarna.Any(e => e.IdDs == id);
        }
    }
}
