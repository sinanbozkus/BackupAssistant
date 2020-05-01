using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using BackupAssistant.App.Models;
using BackupAssistant.Core.Types;

namespace BackupAssistant.App.Controllers
{
    public class LookupController : Controller
    {
        public IActionResult GetProviderTypes()
        {
            return Json(new List<TextValuePair>
            {
                new TextValuePair
                {
                    Text = "FTP Server",
                    Value = "1"
                },
                new TextValuePair
                {
                    Text = "Google Drive",
                    Value = "2"
                }
            });
        }
    }
}
