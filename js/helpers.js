// export function assignStyles(objects, styleName, value) {
//   objects.forEach((element) => {
//     element.style.styleName = value;
//   });
// }

export function wrap(toWrap, wrapper) {
  wrapper = wrapper || document.createElement("div");
  toWrap.parentNode.appendChild(wrapper);
  return wrapper.appendChild(toWrap);
}
