// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dPRrTyFHK7W9ZJqYsJHqzM
// Component: GemSAzldPG

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_pracitce_oyster_bay.module.css"; // plasmic-import: dPRrTyFHK7W9ZJqYsJHqzM/projectcss
import sty from "./PlasmicNewPage.module.css"; // plasmic-import: GemSAzldPG/css

export type PlasmicNewPage__VariantMembers = {};
export type PlasmicNewPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewPage__VariantsArgs;
export const PlasmicNewPage__VariantProps = new Array<VariantPropType>();

export type PlasmicNewPage__ArgsType = {};
type ArgPropType = keyof PlasmicNewPage__ArgsType;
export const PlasmicNewPage__ArgProps = new Array<ArgPropType>();

export type PlasmicNewPage__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultNewPageProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicNewPage__RenderFunc(props: {
  variants: PlasmicNewPage__VariantsArgs;
  args: PlasmicNewPage__ArgsType;
  overrides: PlasmicNewPage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.root
        )}
      />
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewPage__VariantsArgs;
    args?: PlasmicNewPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewPage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNewPage__ArgProps,
          internalVariantPropNames: PlasmicNewPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage";
  } else {
    func.displayName = `PlasmicNewPage.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPage = Object.assign(
  // Top-level PlasmicNewPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicNewPage
    internalVariantProps: PlasmicNewPage__VariantProps,
    internalArgProps: PlasmicNewPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPage;
/* prettier-ignore-end */
