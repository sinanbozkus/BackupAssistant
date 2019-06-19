using System.Collections.Generic;
using System.Threading.Tasks;

namespace BackupAssistant.Providers.FtpServer
{
    public interface IFtpServerProvider
    {
        Task SendFilesToServer(string remotePath, List<string> filePathList);
    }
}
