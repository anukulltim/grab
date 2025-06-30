public class NavigationItem
{
    public string Title { get; set; }
    public bool IsExpanded { get; set; }

    public NavigationItem(string title)
    {
        Title = title;
        IsExpanded = false;
    }
}