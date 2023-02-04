/**
 * 本地存储信息到localStorage
 * @param {*} key 存入信息的键
 * @param {*} value 存入信息的键值
 */
export const setItem = (key: any, value: any) => {
  localStorage.setItem(key, value); //设置本地存储
};

/**
 * 根据存入信息的键来获取对应键值内容，如果需要可以添加token是否过期的校验
 * @param {*} key 存入信息的键
 */
export const getItem = (key: any) => {
  let item = localStorage.getItem(key); //获取本地存储
  if (item) {
    //判断是否存在item
    // 可以在这里 请求token校验的接口进行验证
    return item;
  }
};

/**
 * 移除指定的缓存
 * @param {*} key 存入信息的键
 */
export function removeItem(key: any) {
  localStorage.removeItem(key);
}

/**
 * 移除本地该页面所有缓存
 * @param {*} key 存入信息的键
 */
export function clearItems() {
  localStorage.clear();
}
