// import { createRouter as createTanstackRouter } from '@tanstack/react-router'
import { createRouter } from '@tanstack/react-router'

import { DefaultCatchBoundary } from './components/DefaultCatchBoundary.tsx';
import { NotFound } from './components/NotFound.tsx';

// Import the generated route tree
import { routeTree } from './routeTree.gen.ts'

// Create a new router instance
// export const createRouter = () => {
export function getRouter() {

  // return createTanstackRouter({
  return createRouter({
    routeTree,
    scrollRestoration: true,
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => <NotFound />,
    defaultPreloadStaleTime: 0,
  })
}

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
