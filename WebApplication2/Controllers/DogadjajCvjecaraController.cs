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
    public class DogadjajCvjecaraController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DogadjajCvjecaraController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/DogadjajCvjecara
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DogadjajCvjecara>>> GetDogadjajCvjecare()
        {
            return await _context.DogadjajCvjecara.ToListAsync();
        }

        // GET: api/DogadjajCvjecara/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<DogadjajCvjecara>> GetDogadjajCvjecara(int id)
        {
            var dogadjajCvjecara = await _context.DogadjajCvjecara.FindAsync(id);

            if (dogadjajCvjecara == null)
            {
                return NotFound();
            }

            return dogadjajCvjecara;
        }

        // POST: api/DogadjajCvjecara
        [HttpPost]
        public async Task<ActionResult<DogadjajCvjecara>> PostDogadjajCvjecara(DogadjajCvjecara dogadjajCvjecara)
        {
            _context.DogadjajCvjecara.Add(dogadjajCvjecara);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDogadjajCvjecara", new { id = dogadjajCvjecara.IdDc }, dogadjajCvjecara);
        }

        // PUT: api/DogadjajCvjecara/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDogadjajCvjecara(int id, DogadjajCvjecara dogadjajCvjecara)
        {
            if (id != dogadjajCvjecara.IdDc)
            {
                return BadRequest();
            }

            _context.Entry(dogadjajCvjecara).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DogadjajCvjecaraExists(id))
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

        // DELETE: api/DogadjajCvjecara/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDogadjajCvjecara(int id)
        {
            var dogadjajCvjecara = await _context.DogadjajCvjecara.FindAsync(id);
            if (dogadjajCvjecara == null)
            {
                return NotFound();
            }

            _context.DogadjajCvjecara.Remove(dogadjajCvjecara);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DogadjajCvjecaraExists(int id)
        {
            return _context.DogadjajCvjecara.Any(e => e.IdDc == id);
        }
    }
}
