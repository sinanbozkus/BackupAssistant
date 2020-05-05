using BackupAssistant.App.ModelBinders;
using BackupAssistant.Core.Enums;
using Microsoft.AspNetCore.Mvc;

namespace BackupAssistant.App.Models
{
    //[ModelBinder(BinderType = typeof(ProviderModelBinder))]
    public class ProviderInput<T> where T : class
    {
        public string FriendlyName { get; set; }
        public ProviderType ProviderType { get; set; }
        public T Provider { get; set; }
    }
}