using BackupAssistant.Contracts.Types;
using BackupAssistant.Providers.FtpServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.IO;

namespace BackupAssistant
{
    class Program
    {
        static void Main(string[] args)
        {
            // AppSettings
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

            var configuration = builder.Build();

            // Dependency Injection
            var serviceCollection = new ServiceCollection();
            serviceCollection.AddOptions();
            serviceCollection.Configure<AppSettings>(configuration.GetSection(nameof(AppSettings)));
            serviceCollection.AddScoped<FtpServerManager>();

            var serviceProvider = serviceCollection.BuildServiceProvider();

            var backupManager = serviceProvider.GetService<BackupManager>();
            backupManager.Run().Wait();
        }
    }
}
