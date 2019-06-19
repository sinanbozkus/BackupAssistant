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

                // Eğer parametre aktif ise önce klasördeki zip olmayan tüm dosyalar zipleniyor ve zipsiz halleri siliniyor.
                if (_appSettings.ZipFilesBeforeSend)
                {
                    backupFileList = new List<string>();

                    foreach (var item in localFileList)
                    {
                        var fileExtension = Path.GetExtension(item);

                        // mevcut yedek zipleniyor
                        using (var archive = ZipFile.Open(item.Replace(fileExtension, ".zip"), ZipArchiveMode.Create))
                        {
                            archive.CreateEntryFromFile(item, Path.GetFileName(item));
                        }

                        // yedek siliniyor
                        File.Delete(item);
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

                if (_appSettings.ZipFilesBeforeSend && _appSettings.DeleteFilesAfterSend)
                {

                }
            }
        }
    }
}
