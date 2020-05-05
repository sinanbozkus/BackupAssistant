using BackupAssistant.App.Models;
using BackupAssistant.Core.Types;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Threading.Tasks;
using BackupAssistant.Core.Enums;

namespace BackupAssistant.App.ModelBinders
{
    public class ProviderModelBinder : IModelBinder
    {
        public Task BindModelAsync(ModelBindingContext bindingContext)
        {
            var form = bindingContext.HttpContext.Request.Form;
            var model = (ProviderInput<object>)bindingContext.Model;

            bindingContext.Result = ModelBindingResult.Success(new ProviderInput<FtpServer>
            {
                FriendlyName = model.FriendlyName,
                ProviderType = ProviderType.GoogleDrive,
                Provider = new FtpServer() { Host = "1.1.1.1" }
            });
            return Task.CompletedTask;
        }
    }
}
