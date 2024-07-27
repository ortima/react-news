# React-news

This is a pet project aimed at testing and exploring the functionalities of RTK Query and the Feature Sliced Design (FSD) architecture within a React application. The project sets up a basic news application that fetches and displays news articles.

## Features

- **RTK Query**: Efficient data fetching and caching with Redux Toolkit Query.
- **Feature Sliced Design**: Organized project structure based on FSD principles for better maintainability and scalability.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **TypeScript**: Strongly typed JavaScript for better developer experience and fewer runtime errors.
- **ESLint**: Linting for maintaining code quality.
- **Prettier**: Code formatting for consistent code style.
- **Husky**: Git hooks for automated tasks.
- **Vite**: Fast development server and build tool.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-news.git
   cd react-news
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Application

To start the development server:
```bash
npm run dev
```
or
```bash
yarn dev
```

### Building for Production

To build the application for production:
```bash
npm run build
```
or
```bash
yarn build
```

### Previewing the Production Build

To preview the production build locally:
```bash
npm run preview
```
or
```bash
yarn preview
```

### Linting and Formatting

To lint the codebase:
```bash
npm run lint
```
or
```bash
yarn lint
```

To format the codebase:
```bash
npm run format
```
or
```bash
yarn format
```

## Project Structure

The project follows the Feature Sliced Design (FSD) methodology, organizing the codebase into features, shared utilities, and components:

```
src/
├── app/                # App-level configurations and setup
├── entities/           # Business entities and models
├── features/           # Feature-specific logic and components
├── pages/              # Page components
├── processes/          # Application processes and flows
├── shared/             # Shared components, utilities, and styles
└── widgets/            # Reusable UI components
```

## Packages and Tools

### Dependencies

- **@reduxjs/toolkit**: State management with Redux Toolkit.
- **@types/react-redux**: TypeScript definitions for React-Redux.
- **axios**: HTTP client for making API requests.
- **clsx**: Utility for conditionally applying class names.
- **lucide-react**: Icon library for React.
- **prettier-plugin-tailwindcss**: Tailwind CSS plugin for Prettier.
- **react**: React library for building user interfaces.
- **react-dom**: React DOM bindings for rendering components.
- **react-redux**: Official React bindings for Redux.

### Dev Dependencies

- **@ianvs/prettier-plugin-sort-imports**: Prettier plugin for sorting imports.
- **@types/node**: TypeScript definitions for Node.js.
- **@types/react**: TypeScript definitions for React.
- **@types/react-dom**: TypeScript definitions for React DOM.
- **@typescript-eslint/eslint-plugin**: ESLint plugin for TypeScript.
- **@typescript-eslint/parser**: ESLint parser for TypeScript.
- **@vitejs/plugin-react**: Vite plugin for React.
- **autoprefixer**: PostCSS plugin to parse CSS and add vendor prefixes.
- **eslint**: Linter for JavaScript and TypeScript.
- **eslint-plugin-react-hooks**: ESLint rules for React hooks.
- **eslint-plugin-react-refresh**: ESLint plugin for React Refresh.
- **husky**: Git hooks for running scripts.
- **lint-staged**: Run linters on git staged files.
- **postcss**: Tool for transforming CSS with JavaScript plugins.
- **prettier**: Code formatter.
- **tailwindcss**: Utility-first CSS framework.
- **typescript**: TypeScript language.
- **vite**: Next generation frontend tooling.

### Lint Staged Configuration

```json
"lint-staged": {
  "*.{js,jsx,ts,tsx,json,css,scss,md}": "prettier --write",
  "src/**/*.{ts,tsx}": "eslint --fix"
}
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This project is a simple demonstration of using RTK Query and Feature Sliced Design in a React application, created for learning and testing purposes.
