// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dPRrTyFHK7W9ZJqYsJHqzM
// Component: l--2YaZ18sjM

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
import Button from "../../Button"; // plasmic-import: XxpXfQpfq__Y/component

import { useScreenVariants as useScreenVariantsvGhBehH8Uupx } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: V_GhBehH8UUPX/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_pracitce_oyster_bay.module.css"; // plasmic-import: dPRrTyFHK7W9ZJqYsJHqzM/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: l--2YaZ18sjM/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: QOcwsJ1FCjFi/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: iRLbodS886l/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: QLAS9aiAy6p/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: VTAAmSXa7QY/icon
import Icon28Icon from "./icons/PlasmicIcon__Icon28"; // plasmic-import: 4E1S_Vn3o6p/icon

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  footer?: p.Flex<"div">;
  columns?: p.Flex<"div">;
};

export interface DefaultHomepageProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
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
          <div className={classNames(projectcss.all, sty.freeBox__etbPj)}>
            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__ycd99)}
              >
                <p.Stack
                  as={"a"}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__sowYs
                  )}
                  href={`/`}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__tq1Kx)}
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
                      sty.text__bmC1V
                    )}
                  >
                    {"Practice"}
                  </div>
                </p.Stack>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__vulJ)}
                >
                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__ulJte
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
                      sty.link__oiy8F
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
                      sty.link___2V2SF
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
                      sty.link__hcAi2
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
                      sty.link__vZbze
                    )}
                    href={"https://www.plasmic.app/" as const}
                  >
                    {"Deals & Events"}
                  </a>
                </p.Stack>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__qy1F2)}
                  >
                    <button
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        projectcss.__wab_text,
                        sty.button__xpPC
                      )}
                    >
                      {"Sign up"}
                    </button>
                    {true ? (
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__aaynv
                        )}
                        color={"clear" as const}
                        endIcon={
                          <Icon38Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__gjEjl
                            )}
                            role={"img"}
                          />
                        }
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__vBfln
                            )}
                            role={"img"}
                          />
                        }
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__tgxn3
                          )}
                        >
                          {"Log in"}
                        </div>
                      </Button>
                    ) : null}
                  </div>
                ) : null}
              </p.Stack>
            ) : null}
            <div className={classNames(projectcss.all, sty.freeBox__jukLq)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__maRnk)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__oslnU)}
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
                      sty.text___5NGz4
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
                  className={classNames(projectcss.all, sty.freeBox__bfCdm)}
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__qdLlT)}
                    color={"green" as const}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__n15Az)}
                        role={"img"}
                      />
                    }
                    onClick={async event => {
                      const $steps = {};
                    }}
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg___87Tqh)}
                        role={"img"}
                      />
                    }
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__r0BI2
                      )}
                    >
                      {"Start now ->"}
                    </div>
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__yhNtC)}
                    color={"green" as const}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__ow3JX)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg___2Drxo)}
                        role={"img"}
                      />
                    }
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__aqQg
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
                className={classNames(projectcss.all, sty.freeBox__uLi4O)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__zUbXq)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___5EuMd
                    )}
                  >
                    {"Let's get moving."}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lHoRd
                    )}
                  >
                    {
                      "Orci dui condimentum rutrum laoreet hac purus porta sem sem a vivamus a posuere vel molestie. Yada Yad..."
                    }
                  </div>
                  <Button
                    className={classNames("__wab_instance", sty.button__mu9Y6)}
                    color={"green" as const}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__xwDne)}
                        role={"img"}
                      />
                    }
                    onClick={async event => {
                      const $steps = {};
                      $steps["runCode"] = true
                        ? (() => {
                            const actionArgs = {
                              customFunction: __wrapUserFunction(
                                {
                                  type: "InteractionArgLoc",
                                  actionName: "customFunction",
                                  interactionUuid: "DCyQ_587S",
                                  componentUuid: "l--2YaZ18sjM",
                                  argName: "customFunction"
                                },
                                () => () => {
                                  return alert("this  button was clicked");
                                }
                              )
                            };
                            return __wrapUserFunction(
                              {
                                type: "InteractionLoc",
                                actionName: "customFunction",
                                interactionUuid: "DCyQ_587S",
                                componentUuid: "l--2YaZ18sjM"
                              },
                              () =>
                                (({ customFunction }) => {
                                  return customFunction();
                                })?.apply(null, [actionArgs]),
                              actionArgs
                            );
                          })()
                        : undefined;
                      if (
                        typeof $steps["runCode"] === "object" &&
                        typeof $steps["runCode"].then === "function"
                      ) {
                        $steps["runCode"] = await __wrapUserPromise(
                          {
                            type: "InteractionLoc",
                            actionName: "customFunction",
                            interactionUuid: "DCyQ_587S",
                            componentUuid: "l--2YaZ18sjM"
                          },
                          $steps["runCode"]
                        );
                      }
                      $steps["updateStateVariable"] = true
                        ? (() => {
                            const actionArgs = {};
                            return __wrapUserFunction(
                              {
                                type: "InteractionLoc",
                                actionName: "updateVariable",
                                interactionUuid: "nRqTWvzK9",
                                componentUuid: "l--2YaZ18sjM"
                              },
                              () =>
                                (({
                                  variable,
                                  value,
                                  startIndex,
                                  deleteCount
                                }) => {
                                  const { objRoot, variablePath } = variable;
                                  undefined;
                                })?.apply(null, [actionArgs]),
                              actionArgs
                            );
                          })()
                        : undefined;
                      if (
                        typeof $steps["updateStateVariable"] === "object" &&
                        typeof $steps["updateStateVariable"].then === "function"
                      ) {
                        $steps["updateStateVariable"] = await __wrapUserPromise(
                          {
                            type: "InteractionLoc",
                            actionName: "updateVariable",
                            interactionUuid: "nRqTWvzK9",
                            componentUuid: "l--2YaZ18sjM"
                          },
                          $steps["updateStateVariable"]
                        );
                      }
                    }}
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__aykkr)}
                        role={"img"}
                      />
                    }
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__bo7Oh
                      )}
                    >
                      {"Start now ->"}
                    </div>
                  </Button>
                </p.Stack>
              </p.Stack>
            ) : null}
            {true ? (
              <div
                data-plasmic-name={"footer"}
                data-plasmic-override={overrides.footer}
                className={classNames(projectcss.all, sty.footer)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"columns"}
                  data-plasmic-override={overrides.columns}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.columns)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column___3Ki4H)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__vhq2T)}
                    >
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__m8Evg)}
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
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__y3M22
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__mKp1V
                          )}
                        >
                          {"Connect with us"}
                        </div>
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__wOnx
                          )}
                        >
                          <Icon4Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__lI8R7
                            )}
                            role={"img"}
                          />

                          <Icon5Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg___1TkVj
                            )}
                            role={"img"}
                          />

                          <Icon28Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__wxm0Z
                            )}
                            role={"img"}
                          />
                        </p.Stack>
                      </p.Stack>
                    </p.Stack>
                  </div>
                  <div className={classNames(projectcss.all, sty.column__pnCe)}>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__mxPhF
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
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1", "footer", "columns"],
  h1: ["h1"],
  footer: ["footer", "columns"],
  columns: ["columns"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  h1: "h1";
  footer: "div";
  columns: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    footer: makeNodeComponent("footer"),
    columns: makeNodeComponent("columns"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
