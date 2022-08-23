/**
 *@filePath: packages\index.js
 *@Description: 组件库主入口文件
 *@Author: Jackson
 *@CreateTime: 2022年08月23日 11:05:25
 *@UpdateTime:
 **/
import FirstComponent from './FirstComponent';
const components = {
  FirstComponent
};

const install = function (Vue) {
  Object.keys(components).forEach((keys) => {
    Vue.component(keys, components[keys]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.1.0',
  install
};
