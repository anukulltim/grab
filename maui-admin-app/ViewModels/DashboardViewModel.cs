using System.Collections.ObjectModel;
using System.Windows.Input;
using CommunityToolkit.Mvvm.Input;

namespace maui_admin_app.ViewModels
{
    public class DashboardViewModel : ObservableObject
    {
        private ObservableCollection<NavigationItem> _navigationItems;
        private NavigationItem _selectedItem;

        public ObservableCollection<NavigationItem> NavigationItems
        {
            get => _navigationItems;
            set => SetProperty(ref _navigationItems, value);
        }

        public NavigationItem SelectedItem
        {
            get => _selectedItem;
            set => SetProperty(ref _selectedItem, value);
        }

        public ICommand ItemSelectedCommand { get; }

        public DashboardViewModel()
        {
            NavigationItems = new ObservableCollection<NavigationItem>
            {
                new NavigationItem { Title = "Open", IsExpanded = false },
                new NavigationItem { Title = "Close", IsExpanded = false },
                new NavigationItem { Title = "Dashboard", IsExpanded = false },
                new NavigationItem { Title = "Settings", IsExpanded = false },
                new NavigationItem { Title = "Profile", IsExpanded = false }
            };

            ItemSelectedCommand = new RelayCommand<NavigationItem>(OnItemSelected);
        }

        private void OnItemSelected(NavigationItem item)
        {
            if (item != null)
            {
                SelectedItem = item;
                // Logic to handle the selection of the item
            }
        }
    }
}