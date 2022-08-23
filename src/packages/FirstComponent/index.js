/**
 *@filePath: packages\FirstComponent\index.js
 *@Description: index.js
 *@Author: Jackson
 *@CreateTime: 2022年08月23日 11:05:25
 *@UpdateTime:
 **/
import FirstComponent from './index.vue';
FirstComponent.install = function (Vue) {
  Vue.component(FirstComponent.name, FirstComponent);
};
export default FirstComponent;
