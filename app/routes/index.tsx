import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import type { LoaderArgs, MetaFunction } from '@remix-run/node';

import {
  PlasmicRootProvider,
  PlasmicComponent,
} from '@plasmicapp/loader-react';
import { PLASMIC } from '../plasmic-init';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { ComponentLookup } from '@plasmicapp/loader-react/dist/component-lookup';

export async function loader({ params }: LoaderArgs) {
  const plasmicData = await PLASMIC.fetchComponentData('/');
  return json(plasmicData);
}

export default function Index() {
  const plasmicData = useLoaderData();
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component="/" />
    </PlasmicRootProvider>
  );
}
