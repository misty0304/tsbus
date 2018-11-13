/**
 * 获取cookie值
 * @param key
 * @returns {String}
 */
const getCookie = (key: any) => {
  let arr = null;
  const reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
  arr = document.cookie.match(reg);
  if (document.cookie.match(reg)) {
    return unescape(arr ? arr[2] : '');
  }

  return null;
};

export { getCookie };
