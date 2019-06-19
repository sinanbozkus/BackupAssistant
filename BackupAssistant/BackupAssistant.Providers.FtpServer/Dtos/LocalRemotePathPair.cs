using System;
using System.Collections.Generic;
using System.Text;

namespace BackupAssistant.Providers.FtpServer.Dtos
{
    public class LocalRemotePathPair
    {
        public string LocalPath { get; set; }
        public string RemotePath { get; set; }
    }
}
