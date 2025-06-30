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
        // This is the main entry point of the application.
        public static void Main(string[] args)
        {
            UIApplication.Main(args, null, typeof(AppDelegate));
        }
    }
}