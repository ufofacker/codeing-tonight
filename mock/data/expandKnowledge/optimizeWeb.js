let utils = require ('../../utils');
const bindTextToElement = utils.bindTextToElement;
//${bindTextToElement ('')}
module.exports = {
  list: [
    {
      label: '1.CSS阻塞问题',
      content: `CSS的引用方式有三种方式，分别是：${bindTextToElement ('①link标签外部引入，②通过style标签嵌入html，③通过style标签属性定义的内联样式')}，这三种方式均不会阻塞DOM解析，但是通过外部引入的方式会阻塞浏览器渲染，而且也会阻塞后面js脚本的执行。</br>` +
        `${bindTextToElement ('优化方式')}：①可以通过压缩外部CSS文件，②多个CSS文件合并，③通过CDN节点提升加载速度，④优化CSS源代码的结构。可以用这几个方式来降低外部样式表的加载时常，从而达到优化效果。</br>`,
    },
    {
      label: '2.JS阻塞问题',
      content: `在JS脚本中可能会存在操作DOM，修改CSS的操作，因此为了避免异常情况的产生，在JS引擎加载JS的时候会阻塞DOM解析，因此也会阻塞浏览器渲染。但是有些时候，我们知道将要加载的JS文件中不存在操作DOM的行为，为了满足这种场景，W3C添加了defer和async这两个script标签属性。</br>` +
        `defer和async均可以使得脚本加载和DOM解析并行进行，但是defer要在DOM解析完成和DOMContentLoaded事件触发之前执行，而async则是在加载完js脚本之后就执行脚本。</br>` +
        `${bindTextToElement ('优化方式')}：因此可以根据具体应用场景适当使用defer和async，从而达到优化效果。</br>`,
    },
    {
      label: '3.界面图层',
      content: `在JS脚本中可能会存在操作DOM，修改CSS的操作，因此为了避免异常情况的产生，在JS引擎加载JS的时候会阻塞DOM解析，因此也会阻塞浏览器渲染。但是有些时候，我们知道将要加载的JS文件中不存在操作DOM的行为，为了满足这种场景，W3C添加了defer和async这两个script标签属性。</br>` +
        `defer和async均可以使得脚本加载和DOM解析并行进行，但是defer要在DOM解析完成和DOMContentLoaded事件触发之前执行，而async则是在加载完js脚本之后就执行脚本。</br>` +
        `${bindTextToElement ('优化方式')}：因此可以根据具体应用场景适当使用defer和async，从而达到优化效果。</br>`,
    },
    {
      label: '4.重绘',
      content: `当一个元素的外观属性发生变化后，浏览器会根据元素的新属性重新绘制图层，这个过程中产生的浏览器行为我们称为重绘。</br>` +
        `${bindTextToElement ('会产生重绘的CSS属性')}，如下：</br>` +
        `${bindTextToElement ('颜色相关')}：1.color, 2.border-color, 3.outline-color, 4.backgound-color</br>` +
        `${bindTextToElement ('其他')}：1.visibility, 2.text-decoration, 3.background, 4.outline，5.box-shadow</br>` +
        `${bindTextToElement ('优化方式')}：由于重绘是以图层为单位的，某个图层中的一个元素由于外观发生改变产生的重绘行为，会使得整个图层都重新绘制一遍。因此，我们应该把要发生外观变化的元素放在一个单独的图层中，从而实现优化效果。</br>`,
    },
    {
      label: '5.重排',
      content: `当一个元素的“几何属性变化”或者“获取其几何属性值”的时候，浏览器会进行重排操作。</br>` +
        `${bindTextToElement ('优化方式')}：重排过程大部分情况会产生重绘操作，因此这个过程更耗时。重排也是以图层为单位的。因此，我们应该尽量减少重排的次数且为重排的元素提供一个单独的图层，从而实现优化效果。</br>`,
    },
    {
      label: '6.针对重排和重绘的优化方式',
      content: `①改变元素的位置时使用transform代替left和top的方式；</br>` +
        `②在符合实际场景的情况下，使用visibility代替display控制元素的显示隐藏；</br>` +
        `③将多次样式修改合并成一次；</br>` +
        `④将DOM元素设置不可见后，集中进行样式操作，然后恢复显示</br>` +
        `⑤JS动画使用requestAnimationFrame方法实现，使用cancelAnimationFrame来关闭动画。之所以该方法可以优化JS动画，主要是由于其回调函数每次都会在重绘之前执行。其次回调函数会由浏览器的帧率来决定其执行时机，而浏览器的帧率也会基于当前显示设备的帧率进行计算，已达到最佳显示效果。除此之外requestAnimationFrame实现的动画也会根据浏览器界面的激活状态来决定其是否暂停执行，这也降低了浏览器产生的额外开销，从而达到了优化效果。前面说的这些优点都是使用setInterval这样的周期函数很难实现的。</br>` +
        `其次回调函数会由浏览器的帧率来决定其执行时机，而浏览器的帧率也会基于当前显示设备的帧率进行计算，已达到最佳显示效果。除此之外requestAnimationFrame实现的动画也会根据浏览器界面的激活状态来决定其是否暂停执行回调函数，从而减少了浏览器开销，从而达到了优化效果。</br>` +
        `⑥通过documentFragment接口批量更新或者挂载元素，使用document.createDocumentFragment创建文档碎片，然后再通过appendChild方法将文档碎片绑定的目标DOM元素上。</br>`,
    },
  ],
};
