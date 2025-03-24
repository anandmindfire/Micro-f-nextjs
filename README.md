# Micro Frontend Demo with Next.js and Turbo Monorepo

A demonstration of micro-frontend architecture using Next.js and Turborepo. This project showcases how to build and deploy independent frontend applications that can be composed together using a monorepo structure.

## Features

- **Turborepo Monorepo**: Efficient management of multiple applications and shared packages
- **Shared Components**: Common UI components shared across all applications via workspace packages
- **Independent Deployment**: Each application can be deployed and scaled independently
- **Consistent Navigation**: Unified navigation experience across all applications
- **Type Safety**: Full TypeScript support across all applications
- **Modern UI**: Built with Tailwind CSS for responsive and beautiful designs
- **Development Experience**: Hot module replacement and fast refresh support

## Project Structure

```
.
├── apps/
│   ├── shell/          # Main application that hosts remote apps
│   ├── remote1/        # First remote application
│   └── remote2/        # Second remote application
├── packages/
│   └── shared/         # Shared components and utilities
└── package.json
```

## Prerequisites

- Node.js 18.x or later
- pnpm 8.x or later

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/anandmindfire/Micro-f-nextjs.git
   cd micro-f-nextjs
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development servers:

   In separate terminal windows, run:

   ```bash
   # Stsrt all the Application
   pnpm run dev

   # Start the shell application
   pnpm --filter @micro-frontend-demo/shell dev

   # Start remote1
   pnpm --filter @micro-frontend-demo/remote1 dev

   # Start remote2
   pnpm --filter @micro-frontend-demo/remote2 dev
   ```

4. Access the applications:
   - Shell application: http://localhost:3000
   - Remote1: http://localhost:3001
   - Remote2: http://localhost:3002

## Development

### Adding New Features

1. Create a new branch for your feature:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them:

   ```bash
   git add .
   git commit -m "feat: add your feature"
   ```

3. Push your changes and create a pull request

### Adding New Remote Applications

1. Create a new application in the `apps` directory:

   ```bash
   pnpm create next-app apps/remote3
   ```

2. Update the `package.json` to include the shared package:

   ```json
   {
     "dependencies": {
       "@micro-frontend-demo/shared": "workspace:*"
     }
   }
   ```

3. Import and use components from the shared package:

   ```typescript
   import { Button, Navigation } from "@micro-frontend-demo/shared";
   ```

4. Update the shell application to include the new remote's components

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Write meaningful commit messages
- Add appropriate comments for complex logic

## Troubleshooting

### Common Issues

1. **Package Import Issues**

   - Ensure the package is properly listed in the workspace dependencies
   - Check that the package is built before importing
   - Verify the package exports in the shared package's index.ts

2. **Style Issues**

   - Make sure Tailwind CSS is properly configured in all applications
   - Check that shared styles are correctly imported
   - Verify that PostCSS and other style loaders are configured correctly

3. **Build Errors**
   - Clear the `.next` directories
   - Run `pnpm clean` followed by `pnpm install`
   - Check for version mismatches in dependencies
   - Ensure all workspace dependencies are properly linked

## License

This project is licensed under the MIT License - see the LICENSE file for details.
