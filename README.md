# Angular Chat Application

This is a chat application built with Angular 16 and PrimeNG, featuring a user-friendly interface and support for multiple functionalities.

## Features

- **Login Page**: Users can authenticate themselves to access the chat application.
- **Multiple Chat Windows**: Users can manage multiple chat sessions simultaneously.
- **Chat Management**: Logged-in users can add, rename, and delete chat sessions.
- **Multilingual Support**: The chatbot supports both English and Arabic languages.
- **File Uploads**: Users can upload files and view them in an iframe.
- **File Management**: Users can delete uploaded files as needed.
- **HSBC Bank Theme**: The application is styled with a custom HSBC bank theme.

## Technologies Used

- Angular 16
- PrimeNG
- TypeScript
- HTML/CSS
- SCSS

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd angular-chat-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200`.

## File Structure

The project is organized as follows:

```
angular-chat-app
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── login
│   │   │   ├── chat
│   │   │   ├── chat-list
│   │   │   ├── file-upload
│   │   │   └── navbar
│   │   ├── services
│   │   ├── models
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── assets
│   │   ├── i18n
│   │   └── styles
│   ├── environments
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
└── tsconfig.json
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.