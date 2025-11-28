using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DataController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAll()
    {
        var data = new[]
        {
            new { Id = 1, Name = "Item 1", Description = "First item" },
            new { Id = 2, Name = "Item 2", Description = "Second item" },
            new { Id = 3, Name = "Item 3", Description = "Third item" }
        };

        return Ok(data);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var item = new { Id = id, Name = $"Item {id}", Description = $"Item with id {id}" };
        return Ok(item);
    }

    [HttpPost]
    public IActionResult Create([FromBody] dynamic item)
    {
        return Ok(new { Message = "Item created successfully", Data = item });
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, [FromBody] dynamic item)
    {
        return Ok(new { Message = $"Item {id} updated successfully", Data = item });
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        return Ok(new { Message = $"Item {id} deleted successfully" });
    }
}
