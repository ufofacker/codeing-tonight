let utils = require ('../../utils');
const bindTextToElement = utils.bindTextToElement;
//${bindTextToElement ('')}
module.exports = {
  list: [
    {
      label: '1ddd.CSS阻塞问题',
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
    {
      label: '7.通过CDN提升获取资源的速度',
      content: `${bindTextToElement ('CDN（内容分发网络）')}，在用户通过客户端请求服务端资源的时候会分配离用户最近的服务节点向用户提供服务，从而尽可能避开影响数据传输速度和稳定性的瓶颈或者环节，从而提升客户端请求资源的速度。</br>`,
    },
    {
      label: '8.防抖和节流',
      content: `${bindTextToElement ('防抖')}指的是在触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。</br>` +
        `${bindTextToElement ('节流')}指的是一个连续触发事件，为了降低执行频率，限制其在 n 秒中只执行一次函数的方式。</br>`,
    },
    {
      label: '9.使用cookie，sessionStorage，localStorage存储数据',
      content: `${bindTextToElement ('cookie')}，可通过document.cookie来设置，键值使用“=”号拼接，不设置expires过期时间，那么当浏览器挂关闭时，数据会被清除；</br>` +
        `${bindTextToElement ('sessionStorage')}：可通过其setItem存储数据，当浏览器窗口关闭时，数据会被清除；</br>` +
        `${bindTextToElement ('localStorage')}：可通过其setItem存储数据，清除数据只能通过其removeItem或clear方法；</br>` +
        `${bindTextToElement ('要注意在浏览器刷新的时候，以上这三种浏览器存储方式都不会丢失数据')}</br>`,
    },
    {
      label: '10.跨页签通信',
      content: `${bindTextToElement ('1.不跨域')}：可使用localStorage来实现通信，只需要主页面操作localStorage的值，同源下的界面可通过监听storage事件来获取存储的值，从而实现页签通信；</br>` +
        `${bindTextToElement ('2.跨域')}：可使用postMessage来实现通信，只需要主页面通过otherWindow.postMessage(这里的otherWindow是子窗口的引用)发送消息，在子窗口中通过注册message事件监听来获取发送过来的数据；</br>`,
    },
    {
      label: '11.浏览器缓存',
      content: `${bindTextToElement ('缓存定义')}：缓存指的是通过某种存储方式将用户需要的数据存储起来，下次用户需要浏览数据可以直接从缓存中读取，而不用重新发送请求；</br>` +
        `${bindTextToElement ('缓存分类')}：①强缓存：浏览器根据响应头信息（Expires，Cache-Control）决定是否直接读取本地缓存数据。命中强缓存的请求，浏览器是不会向服务器发送真实请求的，而是从本地缓存中获取数据；②协商缓存：浏览器根据上一次请求的响应头信息（Last-Modified，ETag），包装新的请求头信息（If-Modified-Since，If-None-Match）向服务器发送请求,服务器根据请求头信息判断是否命中协商缓存；</br>` +
        `${bindTextToElement ('缓存优点')}：①减少了请求的次数，从而减少了服务器的压力，从而提升了网站性能；②提升了客户端加载网页的速度，从而给用户带来更好的体验。</br>`,
    },
  ],
};
