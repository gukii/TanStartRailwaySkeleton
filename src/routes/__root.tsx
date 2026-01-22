// src/routes/__root.tsx
/// <reference types="vite/client" />

import type { ReactNode } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'

import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import appCss from '../styles.css?url'


export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Game1',
      },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],

  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
	<TanStackRouterDevtools />
        <Scripts />
      </body>
    </html>
  )
}

/*

import { HeadContent, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from '../components/Header'

import appCss from '../styles.css?url'

import { OverlayFlying } from '@/components/Card/OverlayFlying';
import { useGameStore } from '@/store/useMiniStore';

// Import and enable Immer's MapSet plugin
import { enableMapSet } from 'immer'; // Add this import

enableMapSet(); // Call this function right here


export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  // shellComponent: RootDocument,
  component: RootComponent,
})


function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}



function RootDocument({ children }: { children: React.ReactNode }) {
  const flying = useGameStore((s) => s.flying); // stable reference

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="h-screen">
        <Header />
        <OverlayFlying
          snap={{
            deckFrom: flying.deckFrom ?? null,
            gridFrom: flying.gridFrom ?? null,
            deckCard: flying.deckCard ?? null,
            gridCard: flying.gridCard ?? null,
          }}
        />
        {children}
        <TanStackRouterDevtools />
        <Scripts />
      </body>
    </html>
  );
}

*/

/*
import * as React from 'react';
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import Game from './routes/Game';
import Matches from './routes/Matches';
import Leaderboard from './routes/Leaderboard';

const rootRoute = createRootRoute({
  component: () => <OutletWrapper />,
});

function OutletWrapper() {
  // Global overlay for flying animations
  const OverlayFlying = React.lazy(() =>
    import('../../components/OverlayFlying').then((m) => ({ default: m.OverlayFlying })),
  );
  return (
    <>
      <React.Suspense>{      overlay is optional     }<OverlayFlying /></React.Suspense>
    </>
  );
}

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Game,
});

const matchesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/matches',
  component: Matches,
});

const leaderboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/leaderboard',
  component: Leaderboard,
});

const routeTree = rootRoute.addChildren([indexRoute, matchesRoute, leaderboardRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function AppRouter() {
  return <RouterProvider router={router} />;
}

*/
