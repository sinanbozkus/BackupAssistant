using BackupAssistant.Contracts.Types;
using BackupAssistant.Providers.FtpServer;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Threading.Tasks;

namespace BackupAssistant
{
    public class BackupManager
    {
        private readonly AppSettings _appSettings;
        private readonly IFtpServerProvider _ftpServerProvider;

        public BackupManager(IOptions<AppSettings> appSettings,
            IFtpServerProvider ftpServerProvider)
        {
            _appSettings = appSettings.Value;
            _ftpServerProvider = ftpServerProvider;
        }

        public async Task Run()
        {
            var backupPaths = _appSettings.BackupPaths;

            foreach (var backupPath in backupPaths)
            {
                var localFileList = Directory.GetFiles(backupPath.LocalPath)
                    .Where(x => _appSettings.BackupFileExtensions.Contains(Path.GetExtension(x).ToLower()))
                    .ToList();

                List<string> backupFileList;

                if (_appSettings.ZipFilesBeforeSend)
                {
                    backupFileList = new List<string>();

                    foreach (var item in localFileList)
                    {
                        var zipFilePath = Path.ChangeExtension(item, ".zip");

                        using (var archive = ZipFile.Open(zipFilePath, ZipArchiveMode.Create))
                        {
                            archive.CreateEntryFromFile(item, Path.GetFileName(item));
                        }

                        backupFileList.Add(zipFilePath);
                    }
                }
                else
                {
                    backupFileList = localFileList;
                }

                if (_appSettings.Providers.FtpServer.Enabled)
                {
                    await _ftpServerProvider.SendFilesToServer(backupPath.RemotePath, backupFileList);
                }

                if (_appSettings.ZipFilesBeforeSend && _appSettings.DeleteZipFilesAfterSend)
                {
                    foreach (var backupFile in backupFileList)
                    {
                        File.Delete(backupFile);
                    }
                }

                if (_appSettings.DeleteFilesAfterSend)
                {
                    foreach (var localFile in localFileList)
                    {
                        File.Delete(localFile);
                    }
                }
            }
        }
    }
}
