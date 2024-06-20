// @ts-nocheck
import React, { useState, useEffect } from "react";
import { ApplyPluginsType, useModel , traverseModifyRoutes, useAccess } from "umi";
import { plugin } from "../core/umiExports";
import LayoutComponent from './layout/layout/index.tsx';

export default props => {
  const [runtimeConfig, setRuntimeConfig] = useState(null);

  const initialInfo = (useModel && useModel("@@initialState")) || {
    initialState: undefined,
    loading: false,
    setInitialState: null
  }; // plugin-initial-state 未开启

  const access = useAccess?.();

  useEffect(() => {
    const useRuntimeConfig =
      plugin.applyPlugins({
        key: "layout",
        type: ApplyPluginsType.modify,
        initialValue: {
          ...initialInfo,
          traverseModifyRoutes: (menuData) => {return traverseModifyRoutes?.(menuData, access);},
        },
      }) || {};
    if (useRuntimeConfig instanceof Promise) {
      useRuntimeConfig.then((config) => {
        setRuntimeConfig(config);
      });
      return;
    }
    setRuntimeConfig(useRuntimeConfig);
  }, [initialInfo?.initialState, access]);

  const userConfig = {
    ...{'name':'ant-design-pro','theme':'PRO','locale':true,'showBreadcrumb':true,'siderWidth':208,'navTheme':'light','primaryColor':'#1890ff','layout':'mix','contentWidth':'Fluid','fixedHeader':false,'fixSiderbar':true,'colorWeak':false,'title':'湖南省博物馆','pwa':false,'logo':'http://blog.ousir.icu/wp-content/uploads/2024/06/0317ec1578b90200000012e7e2fd5f0-e1718457643775.jpg','iconfontUrl':''},
    ...runtimeConfig || {}
  };

  

  if(!runtimeConfig){
    return null
  }

  return React.createElement(LayoutComponent, {
    userConfig,
    
    ...props
  });
};
