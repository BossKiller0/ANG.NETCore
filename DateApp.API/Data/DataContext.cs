using DateApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DateApp.API.Data
{
    public class DataContext : DbContext

    {

        public DataContext(DbContextOptions<DataContext> option): base(option){}

        public DbSet<Value> Values { get; set; }
        
    }
}