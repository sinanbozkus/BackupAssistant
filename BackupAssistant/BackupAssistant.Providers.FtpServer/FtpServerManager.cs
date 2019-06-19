using BackupAssistant.Contracts.Types;
using FluentFTP;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BackupAssistant.Providers.FtpServer
{
    public class FtpServerManager : IFtpServerProvider
    {
        private readonly AppSettings _appSettings;

        public FtpServerManager(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings.Value;
        }

        public async Task SendFilesToServer(string remotePath, List<string> filePathList)
        {
            var credentials = _appSettings.Providers.FtpServer;

            using (var ftpClient = new FtpClient(credentials.Host, credentials.Port, credentials.Username, credentials.Password))
            {
                ftpClient.Connect();
                await ftpClient.UploadFilesAsync(filePathList, remotePath);
            }
        }
    }
}
