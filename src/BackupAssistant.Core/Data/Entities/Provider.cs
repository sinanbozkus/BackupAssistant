using BackupAssistant.Core.Enums;

namespace BackupAssistant.Core.Data
{
    public class Provider : BaseEntity
    {
        public string ProviderName { get; set; }
        public ProviderType ProviderType { get; set; }

        // Json Object / Provider Settings
        public string Settings { get; set; }
    }
}