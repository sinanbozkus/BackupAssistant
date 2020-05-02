using BackupAssistant.Core.Enums;

namespace BackupAssistant.App.Models
{
    public class ProviderInput
    {
        public string FriendlyName { get; set; }
        public ProviderType ProviderType { get; set; }
    }
}