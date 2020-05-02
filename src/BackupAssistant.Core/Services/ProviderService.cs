using BackupAssistant.Core.Types;
using BackupAssistant.Core.Data;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Collections.Generic;
using System.Linq;

namespace BackupAssistant.Core.Services
{
    public class ProviderService
    {
        private readonly BaContext _context;

        public ProviderService(BaContext context)
        {
            _context = context;
        }

        public void AddProvider<T>(ProviderDto<T> input)
        {
            _context.Providers.Add(new Provider
            {
                ProviderName = input.ProviderName,
                ProviderType = input.ProviderType,
                Settings = JsonSerializer.Serialize(input.Provider)
            });

            _context.SaveChanges();
        }

        public void UpdateProvider<T>(ProviderDto<T> input)
        {

        }

        public void DeleteProvider(int id)
        {

        }

        public List<ProviderListItem> GetProviders()
        {
            return _context.Providers.Select(x => new ProviderListItem
            {
                Id = x.Id,
                FriendlyName = x.ProviderName
            })
            .OrderBy(x => x.FriendlyName)
            .ToList();
        }
    }
}