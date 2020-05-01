using Microsoft.EntityFrameworkCore;

namespace BackupAssistant.Core.Data
{
    public class BaContext : DbContext
    {
        public BaContext(DbContextOptions<BaContext> options) : base(options)
        {
            
        }

        public DbSet<Provider> Providers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
            optionsBuilder.UseSqlite("Data Source=backupassistant.db");
        }
    }
}