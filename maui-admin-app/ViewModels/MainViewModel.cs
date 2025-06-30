using System.Collections.ObjectModel;
using System.Windows.Input;
using CommunityToolkit.Mvvm.Input;

namespace maui_admin_app.ViewModels
{
    public class MainViewModel : ObservableObject
    {
        public ObservableCollection<NavigationItem> NavigationItems { get; }
        public ICommand NavigateCommand { get; }

        public MainViewModel()
        {
            NavigationItems = new ObservableCollection<NavigationItem>
            {
                new NavigationItem { Title = "Open", IsExpanded = false },
                new NavigationItem { Title = "Close", IsExpanded = false },
                new NavigationItem { Title = "Dashboard", IsExpanded = false },
                new NavigationItem { Title = "Settings", IsExpanded = false },
                new NavigationItem { Title = "Help", IsExpanded = false }
            };

            NavigateCommand = new RelayCommand<NavigationItem>(Navigate);
        }

        private void Navigate(NavigationItem item)
        {
            // Logic to handle navigation based on the selected item
            // This can be expanded to include actual navigation logic
        }
    }
}