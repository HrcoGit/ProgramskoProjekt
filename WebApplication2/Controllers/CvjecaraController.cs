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
    public class CvjecaraController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CvjecaraController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Cvjecara
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cvjecara>>> GetCvjecare()
        {
            return await _context.Cvjecara.ToListAsync();
        }

        // GET: api/Cvjecara/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Cvjecara>> GetCvjecara(int id)
        {
            var cvjecara = await _context.Cvjecara.FindAsync(id);

            if (cvjecara == null)
            {
                return NotFound();
            }

            return cvjecara;
        }

        // POST: api/Cvjecara
        [HttpPost]
        public async Task<ActionResult<Cvjecara>> PostCvjecara(Cvjecara cvjecara)
        {
            _context.Cvjecara.Add(cvjecara);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCvjecara", new { id = cvjecara.IdCvjecara }, cvjecara);
        }

        // PUT: api/Cvjecara/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCvjecara(int id, Cvjecara cvjecara)
        {
            if (id != cvjecara.IdCvjecara)
            {
                return BadRequest();
            }

            _context.Entry(cvjecara).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CvjecaraExists(id))
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

        // DELETE: api/Cvjecara/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCvjecara(int id)
        {
            var cvjecara = await _context.Cvjecara.FindAsync(id);
            if (cvjecara == null)
            {
                return NotFound();
            }

            _context.Cvjecara.Remove(cvjecara);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CvjecaraExists(int id)
        {
            return _context.Cvjecara.Any(e => e.IdCvjecara == id);
        }
    }
}
