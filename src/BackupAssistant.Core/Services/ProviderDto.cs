using BackupAssistant.Core.Enums;

namespace BackupAssistant.Core.Services
{
    public class ProviderDto<T>
    {
        public long Id { get; set; }
        public string ProviderName { get; set; }
        public ProviderType ProviderType { get; set; }
        public T Provider { get; set; }
    }
}