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
    public class JeloController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public JeloController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Jelo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Jelo>>> GetJela()
        {
            return await _context.Jelo.ToListAsync();
        }

        // GET: api/Jelo/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Jelo>> GetJelo(int id)
        {
            var jelo = await _context.Jelo.FindAsync(id);

            if (jelo == null)
            {
                return NotFound();
            }

            return jelo;
        }

        // POST: api/Jelo
        [HttpPost]
        public async Task<ActionResult<Jelo>> PostJelo(Jelo jelo)
        {
            _context.Jelo.Add(jelo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetJelo", new { id = jelo.IdJelo }, jelo);
        }

        // PUT: api/Jelo/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJelo(int id, Jelo jelo)
        {
            if (id != jelo.IdJelo)
            {
                return BadRequest();
            }

            _context.Entry(jelo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JeloExists(id))
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

        // DELETE: api/Jelo/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJelo(int id)
        {
            var jelo = await _context.Jelo.FindAsync(id);
            if (jelo == null)
            {
                return NotFound();
            }

            _context.Jelo.Remove(jelo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool JeloExists(int id)
        {
            return _context.Jelo.Any(e => e.IdJelo == id);
        }
    }
}
