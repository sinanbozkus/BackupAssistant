using System;

namespace BackupAssistant.Core.Enums
{
    [Flags]
    public enum ProviderType
    {
        FtpServer = 1,
        GoogleDrive = 2
    }
}