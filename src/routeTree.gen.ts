/* eslint-disable */

// @ts-nocheck

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as AboutRouteImport } from './routes/about'
import { Route as ServicesRouteImport } from './routes/services'
import { Route as IndustriesRouteImport } from './routes/industries'
import { Route as ContactRouteImport } from './routes/contact'

const IndexRoute = IndexRouteImport.update({
id: '/',
path: '/',
getParentRoute: () => rootRouteImport,
} as any)

const AboutRoute = AboutRouteImport.update({
id: '/about',
path: '/about',
getParentRoute: () => rootRouteImport,
} as any)

const ServicesRoute = ServicesRouteImport.update({
id: '/services',
path: '/services',
getParentRoute: () => rootRouteImport,
} as any)

const IndustriesRoute = IndustriesRouteImport.update({
id: '/industries',
path: '/industries',
getParentRoute: () => rootRouteImport,
} as any)

const ContactRoute = ContactRouteImport.update({
id: '/contact',
path: '/contact',
getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
'/': typeof IndexRoute
'/about': typeof AboutRoute
'/services': typeof ServicesRoute
'/industries': typeof IndustriesRoute
'/contact': typeof ContactRoute
}

export interface FileRoutesByTo {
'/': typeof IndexRoute
'/about': typeof AboutRoute
'/services': typeof ServicesRoute
'/industries': typeof IndustriesRoute
'/contact': typeof ContactRoute
}

export interface FileRoutesById {
root: typeof rootRouteImport
'/': typeof IndexRoute
'/about': typeof AboutRoute
'/services': typeof ServicesRoute
'/industries': typeof IndustriesRoute
'/contact': typeof ContactRoute
}

export interface FileRouteTypes {
fileRoutesByFullPath: FileRoutesByFullPath
fullPaths: '/' | '/about' | '/services' | '/industries' | '/contact'
fileRoutesByTo: FileRoutesByTo
to: '/' | '/about' | '/services' | '/industries' | '/contact'
id: 'root' | '/' | '/about' | '/services' | '/industries' | '/contact'
fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
IndexRoute: typeof IndexRoute
AboutRoute: typeof AboutRoute
ServicesRoute: typeof ServicesRoute
IndustriesRoute: typeof IndustriesRoute
ContactRoute: typeof ContactRoute
}

declare module '@tanstack/react-router' {
interface FileRoutesByPath {
'/': {
id: '/'
path: '/'
fullPath: '/'
preLoaderRoute: typeof IndexRouteImport
parentRoute: typeof rootRouteImport
}
'/about': {
id: '/about'
path: '/about'
fullPath: '/about'
preLoaderRoute: typeof AboutRouteImport
parentRoute: typeof rootRouteImport
}
'/services': {
id: '/services'
path: '/services'
fullPath: '/services'
preLoaderRoute: typeof ServicesRouteImport
parentRoute: typeof rootRouteImport
}
'/industries': {
id: '/industries'
path: '/industries'
fullPath: '/industries'
preLoaderRoute: typeof IndustriesRouteImport
parentRoute: typeof rootRouteImport
}
'/contact': {
id: '/contact'
path: '/contact'
fullPath: '/contact'
preLoaderRoute: typeof ContactRouteImport
parentRoute: typeof rootRouteImport
}
}
}

const rootRouteChildren: RootRouteChildren = {
IndexRoute,
AboutRoute,
ServicesRoute,
IndustriesRoute,
ContactRoute,
}

export const routeTree = rootRouteImport
._addFileChildren(rootRouteChildren)
._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
import type { startInstance } from './start.ts'

declare module '@tanstack/react-start' {
interface Register {
ssr: true
router: Awaited<ReturnType<typeof getRouter>>
config: Awaited<ReturnType<typeof startInstance.getOptions>>
}
}
