/**
 * 初始化表单
 * @param {reactive对象 | 对象} form
 */
export const initForm = (form: any) => {
  const keys = Object.keys(form);
  let obj = {};
  keys.forEach((item: any) => {
    obj[item] = "";
  });
  Object.assign(form, obj);
}
