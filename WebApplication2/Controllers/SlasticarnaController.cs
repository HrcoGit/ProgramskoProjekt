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
    public class SlasticarnaController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SlasticarnaController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Slasticarna
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Slasticarna>>> GetSlasticarne()
        {
            return await _context.Slasticarna.ToListAsync();
        }

        // GET: api/Slasticarna/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Slasticarna>> GetSlasticarna(int id)
        {
            var slasticarna = await _context.Slasticarna.FindAsync(id);

            if (slasticarna == null)
            {
                return NotFound();
            }

            return slasticarna;
        }

        // POST: api/Slasticarna
        [HttpPost]
        public async Task<ActionResult<Slasticarna>> PostSlasticarna(Slasticarna slasticarna)
        {
            _context.Slasticarna.Add(slasticarna);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSlasticarna", new { id = slasticarna.IdSlasticarna }, slasticarna);
        }

        // PUT: api/Slasticarna/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSlasticarna(int id, Slasticarna slasticarna)
        {
            if (id != slasticarna.IdSlasticarna)
            {
                return BadRequest();
            }

            _context.Entry(slasticarna).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SlasticarnaExists(id))
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

        // DELETE: api/Slasticarna/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSlasticarna(int id)
        {
            var slasticarna = await _context.Slasticarna.FindAsync(id);
            if (slasticarna == null)
            {
                return NotFound();
            }

            _context.Slasticarna.Remove(slasticarna);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SlasticarnaExists(int id)
        {
            return _context.Slasticarna.Any(e => e.IdSlasticarna == id);
        }
    }
}
