using BackupAssistant.Core.Services;
using Microsoft.Extensions.DependencyInjection;

namespace BackupAssistant.Core.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<ProviderService>();

            return services;
        }
    }
}