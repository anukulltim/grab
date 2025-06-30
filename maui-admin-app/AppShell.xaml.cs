using Microsoft.Maui.Controls;

namespace maui_admin_app
{
    public partial class AppShell : Shell
    {
        public AppShell()
        {
            InitializeComponent();
            RegisterRoutes();
        }

        private void RegisterRoutes()
        {
            // Register routes for navigation
            Routing.RegisterRoute(nameof(DashboardPage), typeof(DashboardPage));
        }
    }
}