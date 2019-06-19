using System.Collections.Generic;

namespace BackupAssistant.Providers.FtpServer.Dtos
{
    public class SendFilesToServerInput
    {
        public SendFilesToServerInput(SendFilesToServerInputFtpSettings settings, List<string> filePathList)
        {
            Settings = settings;
            FilePathList = FilePathList;
        }

        public SendFilesToServerInputFtpSettings Settings { get; private set; }
        public List<string> FilePathList { get; private set; }
    }

    public class SendFilesToServerInputFtpSettings
    {
        public string Host { get; set; }
        public int Port { get; set; } = 21;
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
