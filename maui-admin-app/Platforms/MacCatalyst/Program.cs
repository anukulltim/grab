using Foundation;
using Microsoft.Maui;
using Microsoft.Maui.Hosting;

namespace MauiAdminApp
{
    [Register("AppDelegate")]
    public class AppDelegate : MauiUIApplicationDelegate
    {
        protected override MauiApp CreateMauiApp() => MauiProgram.CreateMauiApp();
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            MauiUIApplication.Main(args, typeof(AppDelegate));
        }
    }
}