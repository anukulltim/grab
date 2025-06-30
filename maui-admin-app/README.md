# maui-admin-app

## Overview
This project is a MAUI application designed for administrative tasks. It features a user-friendly interface with a header, footer, and a side navigation menu. The layout is responsive, allowing for dynamic content display based on user interactions.

## Features
- **Header**: Displays a logo on the left and a greeting message with a profile picture on the right.
- **Footer**: Contains application-related information or links.
- **Side Navigation**: A collapsible menu on the left side of the screen with options such as:
  - Open
  - Close
  - Dashboard
- **Dynamic Content Area**: The right side of the screen displays content based on the selected option from the side navigation.
- **Expandable List**: A list on the right that can expand and collapse, showcasing additional information.

## Project Structure
- **Platforms**: Contains platform-specific implementations for Android, iOS, MacCatalyst, and Windows.
- **Resources**: Includes images and styles used throughout the application.
- **Views**: Contains XAML files for the main page and dashboard, along with their code-behind files.
- **ViewModels**: Holds the view models for managing the application's state and logic.
- **Models**: Defines the data structures used in the application.

## Getting Started
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/maui-admin-app.git
   ```
2. Navigate to the project directory:
   ```
   cd maui-admin-app
   ```
3. Restore dependencies:
   ```
   dotnet restore
   ```
4. Run the application:
   ```
   dotnet run
   ```

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.