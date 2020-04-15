# Backup Assistant

Backup Assistant helps you to backup your files (like database backups or log files) to FTP Server. It works on any platform. ( Windows, Linux and Mac.)

This is an **alpha release**, you have to be careful when backup your files. I'm still working on the program. I'm planing to add more providers (Google Cloud etc.) and write logs soon.

Download: [Releases](https://github.com/sinanbozkus/BackupAssistant/tree/master/Release)

## Sample Configuration (appsettings.json)

    {
      "AppSettings": {
        "BackupPaths": [
          {
            "LocalPath": "C:\\Users\\Sinan\\Desktop\\FtpBackup\\TestDb",
            "RemotePath": "TestDb"
          },
          {
            "LocalPath": "C:\\Users\\Sinan\\Desktop\\FtpBackup\\TestHangFireDb",
            "RemotePath": "TestHangFireDb"
          },
          {
            "LocalPath": "C:\\Users\\Sinan\\Desktop\\FtpBackup\\TestLogDb",
            "RemotePath": "TestLogDb"
          }
        ],
        "BackupFileExtensions": [ ".bak" ],
        "DeleteFilesAfterSend": true,
        "ZipFilesBeforeSend": true,
        "DeleteZipFilesAfterSend": false,
        "WriteLog": true,
        "Providers": {
          "FtpServer": {
            "Enabled": true,
            "Host": "ftphost",
            "Port": "21",
            "Username": "ftpusername",
            "Password": "ftppassword"
          }
        }
      }
    }
