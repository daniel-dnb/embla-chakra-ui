# Embla Carousel with Vite, Chakra UI, and Compound Components

This project demonstrates the integration of the [Embla Carousel](https://www.embla-carousel.com/) with [Vite](https://vitejs.dev/) and [Chakra UI](https://chakra-ui.com/), using the **Compound Components Pattern** to create flexible and reusable components.

## Features

- **Embla Carousel**: A performant and lightweight carousel library.
- **Vite**: Fast development environment with hot module replacement (HMR).
- **Chakra UI**: A modular component library for building accessible and customizable React applications.
- **Compound Components Pattern**: Provides flexibility and a clean API for building reusable components.

## Tech Stack

- **React**: For building the user interface.
- **Vite**: As the build tool and development server.
- **Chakra UI**: For UI components and styling.
- **Embla Carousel**: For the carousel functionality.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/daniel-dnb/embla-chakra-ui.git
   cd embla-carousel
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Project Structure

```
.
├── public                   # Static assets
├── src
│   ├── components
│   │   └──EmblaCarousel     # Embla carousel compound components pattern
│   ├── hooks                # Custom embla carousel hooks
│   ├── theme                # Chakra UI theme
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point for the app
├── index.html
├── package.json
└── README.md
```

## License

Feel free to submit issues and pull requests!
