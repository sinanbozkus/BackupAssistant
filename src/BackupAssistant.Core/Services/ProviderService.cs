using BackupAssistant.Core.Types;

namespace BackupAssistant.Core.Services
{
    public class ProviderService
    {
        public void AddProvider<T>(ProviderDto<T> input)
        {
            var providerInput = new ProviderDto<GoogleDrive>
            {
                ProviderName = "Google Drive Sinan Hesabı",
                Provider = new GoogleDrive
                {
                    Username = "",
                    Password = ""
                }
            };
        }

        public void UpdateProvider<T>(ProviderDto<T> input)
        {

        }

        public void DeleteProvider(int id)
        {

        }
    }
}