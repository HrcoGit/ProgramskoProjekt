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
    public class GlazbaPlaylistController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public GlazbaPlaylistController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/GlazbaPlaylist
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GlazbaPlaylist>>> GetGlazbaPlaylists()
        {
            return await _context.GlazbaPlaylist.ToListAsync();
        }

        // GET: api/GlazbaPlaylist/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<GlazbaPlaylist>> GetGlazbaPlaylist(int id)
        {
            var glazbaPlaylist = await _context.GlazbaPlaylist.FindAsync(id);

            if (glazbaPlaylist == null)
            {
                return NotFound();
            }

            return glazbaPlaylist;
        }

        // POST: api/GlazbaPlaylist
        [HttpPost]
        public async Task<ActionResult<GlazbaPlaylist>> PostGlazbaPlaylist(GlazbaPlaylist glazbaPlaylist)
        {
            _context.GlazbaPlaylist.Add(glazbaPlaylist);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGlazbaPlaylist", new { id = glazbaPlaylist.IdGp }, glazbaPlaylist);
        }

        // PUT: api/GlazbaPlaylist/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGlazbaPlaylist(int id, GlazbaPlaylist glazbaPlaylist)
        {
            if (id != glazbaPlaylist.IdGp)
            {
                return BadRequest();
            }

            _context.Entry(glazbaPlaylist).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GlazbaPlaylistExists(id))
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

        // DELETE: api/GlazbaPlaylist/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGlazbaPlaylist(int id)
        {
            var glazbaPlaylist = await _context.GlazbaPlaylist.FindAsync(id);
            if (glazbaPlaylist == null)
            {
                return NotFound();
            }

            _context.GlazbaPlaylist.Remove(glazbaPlaylist);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GlazbaPlaylistExists(int id)
        {
            return _context.GlazbaPlaylist.Any(e => e.IdGp == id);
        }
    }
}
