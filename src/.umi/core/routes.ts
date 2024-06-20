// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from 'E:/rfid/user-center-frontend-master/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@ant-design/pro-layout/es/PageLoading';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-layout__Layout' */'E:/rfid/user-center-frontend-master/src/.umi/plugin-layout/Layout.tsx'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/~demos/:uuid",
        "layout": false,
        "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout'), loading: LoadingComponent})],
        "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ 'E:/rfid/user-center-frontend-master/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
      },
      {
        "path": "/_demos/:uuid",
        "redirect": "/~demos/:uuid"
      },
      {
        "__dumiRoot": true,
        "layout": false,
        "path": "/~docs",
        "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout'), loading: LoadingComponent}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'E:/rfid/user-center-frontend-master/node_modules/dumi-theme-default/es/layout.js'), loading: LoadingComponent})],
        "routes": [
          {
            "path": "/~docs",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'README.md' */'E:/rfid/user-center-frontend-master/README.md'), loading: LoadingComponent}),
            "exact": true,
            "meta": {
              "locale": "en-US",
              "order": null,
              "filePath": "README.md",
              "updatedTime": 1691318281000,
              "slugs": [
                {
                  "depth": 1,
                  "value": "用户中心前端",
                  "heading": "用户中心前端"
                },
                {
                  "depth": 2,
                  "value": "Environment Prepare",
                  "heading": "environment-prepare"
                },
                {
                  "depth": 2,
                  "value": "Provided Scripts",
                  "heading": "provided-scripts"
                },
                {
                  "depth": 3,
                  "value": "Start project",
                  "heading": "start-project"
                },
                {
                  "depth": 3,
                  "value": "Build project",
                  "heading": "build-project"
                },
                {
                  "depth": 3,
                  "value": "Check code style",
                  "heading": "check-code-style"
                },
                {
                  "depth": 3,
                  "value": "Test code",
                  "heading": "test-code"
                },
                {
                  "depth": 2,
                  "value": "More",
                  "heading": "more"
                }
              ],
              "title": "用户中心前端"
            },
            "title": "用户中心前端"
          }
        ],
        "title": "ant-design-pro",
        "component": (props) => props.children
      },
      {
        "path": "/user",
        "layout": false,
        "routes": [
          {
            "path": "/user",
            "routes": [
              {
                "name": "登录",
                "path": "/user/login",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__Login' */'E:/rfid/user-center-frontend-master/src/pages/user/Login'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "注册",
                "path": "/user/register",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__Register' */'E:/rfid/user-center-frontend-master/src/pages/user/Register'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'E:/rfid/user-center-frontend-master/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/welcome",
        "name": "欢迎",
        "icon": "smile",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'E:/rfid/user-center-frontend-master/src/pages/Welcome'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/admin",
        "name": "管理页",
        "icon": "crown",
        "access": "canAdmin",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Admin' */'E:/rfid/user-center-frontend-master/src/pages/Admin'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/admin/user-manage",
            "name": "用户管理",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Admin__UserManage' */'E:/rfid/user-center-frontend-master/src/pages/Admin/UserManage'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'E:/rfid/user-center-frontend-master/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "name": "图片展览",
        "icon": "table",
        "path": "/list",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TableList__index' */'E:/rfid/user-center-frontend-master/src/pages/TableList/index.tsx'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "name": "买票",
        "icon": "table",
        "path": "/buy",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TableList__buy' */'E:/rfid/user-center-frontend-master/src/pages/TableList/buy.tsx'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/index.html",
        "redirect": "/welcome",
        "exact": true
      },
      {
        "path": "/",
        "redirect": "/welcome",
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'E:/rfid/user-center-frontend-master/src/pages/404'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
