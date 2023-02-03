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
  initPlasmicLoader,
  PlasmicRootProvider,
  PlasmicComponent,
  ComponentRenderData,
} from '@plasmicapp/loader-react';
import { PLASMIC } from '../plasmic-init';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { ComponentLookup } from '@plasmicapp/loader-react/dist/component-lookup';

export async function loader({ params }: LoaderArgs) {
  let path = `/${params['*']}`;
  try {
    const plasmicData = await PLASMIC.fetchComponentData(path);
    return json(plasmicData);
  } catch (e) {
    return json({ error: '404' });
  }
}

export default function PLasmicApp() {
  const plasmicData = useLoaderData();

  if (plasmicData.error) return <div>404 Error!</div>;

  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={`${plasmicData.entryCompMetas[0].path}`} />
    </PlasmicRootProvider>
  );
}
