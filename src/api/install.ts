// 导入模块
import apiList from './apiList';

let flag = false;

const install = (Vue: any) => {
  if (flag) { return false; }
  flag = true;
  Object.defineProperties(Vue.prototype, {
    $api: {
      get() {
        return apiList;
      },
    },
  });
};

export default { install };
