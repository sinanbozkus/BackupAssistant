using System.Collections.Generic;

namespace BackupAssistant.Contracts.Types
{
    public class AppSettings
    {
        public List<BackupPath> BackupPaths { get; set; }
        public List<string> BackupFileExtensions { get; set; }
        public bool DeleteFilesAfterSend { get; set; } = true;
        public bool ZipFilesBeforeSend { get; set; } = true;
        public bool DeleteZipFilesAfterSend { get; set; } = false;
        public bool WriteLog { get; set; } = false;
        public Providers Providers { get; set; }
    }

    public class BackupPath
    {
        public string LocalPath { get; set; }
        public string RemotePath { get; set; }
    }

    public class Providers
    {
        public FtpServer FtpServer { get; set; }
    }

    public class FtpServer
    {
        public bool Enabled { get; set; } = false;
        public string Host { get; set; }
        public int Port { get; set; } = 21;
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
