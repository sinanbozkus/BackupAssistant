using Microsoft.AspNetCore.Mvc;
using BackupAssistant.Core.Services;
using BackupAssistant.Core.Enums;
using BackupAssistant.App.Models;
using System;
using BackupAssistant.Core.Types;
using BackupAssistant.App.Types;
using BackupAssistant.App.ModelBinders;

namespace BackupAssistant.App.Controllers
{
    public class ProviderController : Controller
    {
        private readonly ProviderService _providerService;

        public ProviderController(ProviderService providerService)
        {
            _providerService = providerService;
        }


        public IActionResult AddFtpServer(ProviderInput<FtpServer> formData)
        {
            return Ok();
        }


        [HttpPost]
        ////public IActionResult Save([ModelBinder(typeof(ProviderModelBinder))] object input)
        ///public IActionResult Save([ModelBinder(typeof(ProviderModelBinder))] object input)
        public IActionResult Save(object input)





        //public IActionResult SaveFtpServer
        //public IActionResult SaveGoogleDrive

        {
            //if (input.ProviderType == ProviderType.FtpServer)
            //{
            //    var model = new ProviderDto<FtpServer>
            //    {
            //        ProviderType = input.ProviderType,
            //        ProviderName = input.FriendlyName,
            //        Provider = new FtpServer
            //        {
            //            Host = Request.Form["host"],
            //            User = Request.Form["username"],
            //            Password = Request.Form["password"],
            //            Port = Convert.ToInt32(Request.Form["port"])
            //        }
            //    };

            //    _providerService.AddProvider<FtpServer>(model);
            //}

            return Json(new FormResult
            {
                IsSucceed = true,
                Message = "Provider added."
            });
        }

        public IActionResult GetList()
        {
            return Json(_providerService.GetProviders());
        }

        // public IActionResult AddProvider(ProviderDto input)
        // {
        //     _providerService.AddProvider(new ProviderDto<ProviderType.FtpServer>
        //     {
        //         ProviderName = "Sinan's Google Drive",
        //         ProviderType = ProviderType.FtpServer,

        //     })

        //     return Ok();
        // }
    }
}