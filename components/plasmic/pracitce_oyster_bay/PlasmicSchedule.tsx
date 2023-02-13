// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dPRrTyFHK7W9ZJqYsJHqzM
// Component: wNOT5mM2WyL
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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
import Button from "../../Button"; // plasmic-import: XxpXfQpfq__Y/component
import { Embed } from "@plasmicpkgs/plasmic-basic-components"; // plasmic-import: PKldDYkH42/codeComponent

import { useScreenVariants as useScreenVariantsvGhBehH8Uupx } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: V_GhBehH8UUPX/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_pracitce_oyster_bay.module.css"; // plasmic-import: dPRrTyFHK7W9ZJqYsJHqzM/projectcss
import sty from "./PlasmicSchedule.module.css"; // plasmic-import: wNOT5mM2WyL/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: QOcwsJ1FCjFi/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: iRLbodS886l/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: QLAS9aiAy6p/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: VTAAmSXa7QY/icon
import Icon28Icon from "./icons/PlasmicIcon__Icon28"; // plasmic-import: 4E1S_Vn3o6p/icon

export type PlasmicSchedule__VariantMembers = {};
export type PlasmicSchedule__VariantsArgs = {};
type VariantPropType = keyof PlasmicSchedule__VariantsArgs;
export const PlasmicSchedule__VariantProps = new Array<VariantPropType>();

export type PlasmicSchedule__ArgsType = {};
type ArgPropType = keyof PlasmicSchedule__ArgsType;
export const PlasmicSchedule__ArgProps = new Array<ArgPropType>();

export type PlasmicSchedule__OverridesType = {
  root?: p.Flex<"div">;
  foreground2?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  embedHtml?: p.Flex<typeof Embed>;
  columns?: p.Flex<"div">;
};

export interface DefaultScheduleProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicSchedule__RenderFunc(props: {
  variants: PlasmicSchedule__VariantsArgs;
  args: PlasmicSchedule__ArgsType;
  overrides: PlasmicSchedule__OverridesType;

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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsvGhBehH8Uupx()
  });

  return (
    <React.Fragment>
      {}

      <div className={projectcss.plasmic_page_wrapper}>
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
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__rnVL)}
          >
            <p.Stack
              as={"a"}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__t4Hvp
              )}
              href={`/`}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__fTxi9)}
                displayHeight={"40px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"none" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"40px" as const}
                src={{
                  src: "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMCI+CiAgPHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiByeD0iMyIgZmlsbD0iIzA1MDUwNSIvPgogIDxyZWN0IHg9IjEuNSIgeT0iNSIgd2lkdGg9IjMiIGhlaWdodD0iMyIgcng9Ii4yNSIgZmlsbD0iI2ZmZiIvPgogIDxyZWN0IHg9IjUuNSIgeT0iNSIgd2lkdGg9IjMiIGhlaWdodD0iMyIgcng9IjEuNSIgZmlsbD0iI2ZmZiIvPgogIDxwYXRoIGQ9Ik00LjY1NCAxLjZjLjExMy0uMTk3LjE3LS4yOTUuMjQ0LS4zMjhhLjI1LjI1IDAgMDEuMjA0IDBjLjA3NC4wMzMuMTMuMTMxLjI0NC4zMjhsMS4wNCAxLjhjLjExMy4xOTcuMTcuMjk1LjE2Mi4zNzZhLjI1LjI1IDAgMDEtLjEwMi4xNzZDNi4zOCA0IDYuMjY2IDQgNi4wMzkgNEgzLjk2MWMtLjIyOCAwLS4zNDEgMC0uNDA3LS4wNDhhLjI1LjI1IDAgMDEtLjEwMi0uMTc2Yy0uMDA4LS4wOC4wNDktLjE4LjE2Mi0uMzc2bDEuMDQtMS44eiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K",
                  fullWidth: 150,
                  fullHeight: 150,
                  aspectRatio: 1
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fAfVp
                )}
              >
                {"Practice"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__jiKgx)}
            >
              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__y6T79
                )}
                href={"https://www.plasmic.app/" as const}
              >
                {"Schedule"}
              </a>

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__lDxpi
                )}
                href={`/about`}
              >
                {"About"}
              </a>

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__cQlQr
                )}
                href={`/about`}
              >
                {"Offerings"}
              </a>

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__gzjGf
                )}
                href={"https://www.plasmic.app/" as const}
              >
                {"Pricing"}
              </a>

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link___26Hf
                )}
                href={"https://www.plasmic.app/" as const}
              >
                {"Deals & Events"}
              </a>
            </p.Stack>

            {false ? (
              <div className={classNames(projectcss.all, sty.freeBox__aCfes)}>
                <button
                  className={classNames(
                    projectcss.all,
                    projectcss.button,
                    projectcss.__wab_text,
                    sty.button__gQfcI
                  )}
                >
                  {"Sign up"}
                </button>

                {true ? (
                  <Button
                    className={classNames("__wab_instance", sty.button__i8Z)}
                    color={"clear" as const}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__bZgOu)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__sHcU3)}
                        role={"img"}
                      />
                    }
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__cFfX
                      )}
                    >
                      {"Log in"}
                    </div>
                  </Button>
                ) : null}
              </div>
            ) : null}
          </p.Stack>

          <div className={classNames(projectcss.all, sty.freeBox__sdR3G)}>
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground2"}
              data-plasmic-override={overrides.foreground2}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground2)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__sXa6R)}
              >
                <h1
                  data-plasmic-name={"h1"}
                  data-plasmic-override={overrides.h1}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1
                  )}
                >
                  {"Yoga"}
                </h1>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__hxg7F
                  )}
                >
                  {
                    "Pilates - Alignment - Strength - Flexibility - Connection - Digestion - Mental Clarity"
                  }
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___9KixJ)}
              >
                <Button
                  className={classNames("__wab_instance", sty.button__lVAsM)}
                  color={"green" as const}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__fv9Ot)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__b9A6)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tbx5J
                    )}
                  >
                    {"Start now ->"}
                  </div>
                </Button>

                <Button
                  className={classNames("__wab_instance", sty.button__bppyY)}
                  color={"green" as const}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__eFVwM)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg___93GM8)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__je23R
                    )}
                  >
                    {"Learn more…"}
                  </div>
                </Button>
              </p.Stack>
            </p.Stack>
          </div>

          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__aFjWn)}
            >
              <Embed
                data-plasmic-name={"embedHtml"}
                data-plasmic-override={overrides.embedHtml}
                className={classNames("__wab_instance", sty.embedHtml)}
                code={
                  '<script src="https://widgets.mindbodyonline.com/javascripts/healcode.js" type="text/javascript"></script>\r\n\r\n<healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="42978499384" data-widget-version="1" ></healcode-widget>' as const
                }
              />
            </p.Stack>
          ) : null}
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__aEeLc)}>
              <p.Stack
                as={"div"}
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__idKXy)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__qt0Mk)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__t7UR9)}
                      displayHeight={"40px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"none" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"40px" as const}
                      src={{
                        src: "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMCI+CiAgPHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiByeD0iMyIgZmlsbD0iIzA1MDUwNSIvPgogIDxyZWN0IHg9IjEuNSIgeT0iNSIgd2lkdGg9IjMiIGhlaWdodD0iMyIgcng9Ii4yNSIgZmlsbD0iI2ZmZiIvPgogIDxyZWN0IHg9IjUuNSIgeT0iNSIgd2lkdGg9IjMiIGhlaWdodD0iMyIgcng9IjEuNSIgZmlsbD0iI2ZmZiIvPgogIDxwYXRoIGQ9Ik00LjY1NCAxLjZjLjExMy0uMTk3LjE3LS4yOTUuMjQ0LS4zMjhhLjI1LjI1IDAgMDEuMjA0IDBjLjA3NC4wMzMuMTMuMTMxLjI0NC4zMjhsMS4wNCAxLjhjLjExMy4xOTcuMTcuMjk1LjE2Mi4zNzZhLjI1LjI1IDAgMDEtLjEwMi4xNzZDNi4zOCA0IDYuMjY2IDQgNi4wMzkgNEgzLjk2MWMtLjIyOCAwLS4zNDEgMC0uNDA3LS4wNDhhLjI1LjI1IDAgMDEtLjEwMi0uMTc2Yy0uMDA4LS4wOC4wNDktLjE4LjE2Mi0uMzc2bDEuMDQtMS44eiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K",
                        fullWidth: 150,
                        fullHeight: 150,
                        aspectRatio: 1
                      }}
                    />

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__odo5)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__qGa
                        )}
                      >
                        {"Connect with us"}
                      </div>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__taFw
                        )}
                      >
                        <Icon4Icon
                          className={classNames(projectcss.all, sty.svg__rE7Gn)}
                          role={"img"}
                        />

                        <Icon5Icon
                          className={classNames(projectcss.all, sty.svg__x2Mt)}
                          role={"img"}
                        />

                        <Icon28Icon
                          className={classNames(projectcss.all, sty.svg__m3CN)}
                          role={"img"}
                        />
                      </p.Stack>
                    </p.Stack>
                  </p.Stack>
                </div>

                <div className={classNames(projectcss.all, sty.column__tvJhn)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__b43Gi
                    )}
                  >
                    {
                      "132 South St, Oyster Bay, NY 11771\n1-516-922-2800\ninfo@PracticeOysterBay.com\n\nFAQs  Policies"
                    }
                  </div>
                </div>
              </p.Stack>
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "foreground2", "h1", "embedHtml", "columns"],
  foreground2: ["foreground2", "h1"],
  h1: ["h1"],
  embedHtml: ["embedHtml"],
  columns: ["columns"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  foreground2: "div";
  h1: "h1";
  embedHtml: typeof Embed;
  columns: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSchedule__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSchedule__VariantsArgs;
    args?: PlasmicSchedule__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSchedule__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSchedule__ArgsType,
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
          internalArgPropNames: PlasmicSchedule__ArgProps,
          internalVariantPropNames: PlasmicSchedule__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSchedule__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSchedule";
  } else {
    func.displayName = `PlasmicSchedule.${nodeName}`;
  }
  return func;
}

export const PlasmicSchedule = Object.assign(
  // Top-level PlasmicSchedule renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    foreground2: makeNodeComponent("foreground2"),
    h1: makeNodeComponent("h1"),
    embedHtml: makeNodeComponent("embedHtml"),
    columns: makeNodeComponent("columns"),

    // Metadata about props expected for PlasmicSchedule
    internalVariantProps: PlasmicSchedule__VariantProps,
    internalArgProps: PlasmicSchedule__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSchedule;
/* prettier-ignore-end */
