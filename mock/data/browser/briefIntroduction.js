let utils = require ('../../utils');
const bindTextToElement = utils.bindTextToElement;
//${bindTextToElement ('')}
module.exports = {
  list: [
    {
      label: '1.浏览器架构组成',
      content: `谷歌浏览器时多进程架构，在启动浏览器之后创建的进程大致有：${bindTextToElement ('①浏览器主进程，②渲染进程，③网络进程，④GPU进程,⑤存储进程，⑥插件进程。')}</br>` +
        `${bindTextToElement ('浏览器主进程')}：负责界面显示，用户交互，子进程管理，同时提供存储等功能。</br>` +
        `${bindTextToElement ('渲染进程')}：负责将html，css，javascript编译合成为用户可查阅和操作的网页。该进程中可以运行渲染引擎，V8引擎程序，通过Blink对界面进行排版，通过V8执行javascript代码。对于谷歌浏览器而言，每当打开一个新的Tab标签，浏览器都会为其创建一个渲染进程。出于安全考虑，渲染进程都是运行在沙箱模式下。</br>` +
        `${bindTextToElement ('网络进程')}：负责页面的网络资源加载。</br>` +
        `${bindTextToElement ('GPU进程')}：负责调用计算器硬件接口进行页面图形绘制，从而提示浏览器绘图性能。</br>` +
        `${bindTextToElement ('存储进程')}：负责页面的缓存处理，及cookie，indexedDB等浏览器数据存储。</br>` +
        `${bindTextToElement ('插件进程')}：负责浏览器插件的运行，因插件容易崩溃，因此需要通过插件进程来隔离，从而保证插件崩溃时不会对浏览器产生太大影响。</br>`,
    },
    {
      label: '2.TCP/IP，TCP，IP，HTTP的关系',
      content: `TCP/IP是一种网络分层模型，在使用过程中被称为TCP/IP协议簇，它是一个协议的集合。自上而下分层中常用协议主要包括：${bindTextToElement ('①应用层的http，https，dns，ftp协议等；②传输层的tcp，udp协议等；③网络层的ip协议等')}</br>` +
        `互联网中的数据是通过数据包来传输的，数据包在传输过程中容易丢失或出错。这一过程类似于现实生活中的快递件的收发过程，可以类比理解。在TCP/IP分层模型中，下层是为了给上次提供某种服务而存在。</br>` +
        `正如http协议一样，它建立在TCP，IP协议之上。HTTP封装请求信息，TCP保证数据包被完整有序的传输，IP协议则用来定位目的主机。而TCP和IP协议都是为HTTP这种上层协议提供服务的。`,
    },
    {
      label: '3.浏览器执行HTTP请求的流程',
      content: `浏览器发送HTTP请求到接收数据大致会执行以下几个操作：</br>` +
        `${bindTextToElement ('①构建请求')}：浏览器根据URL地址构建请求报文（包含：①请求行（由请求方法，请求URI及HTTP的版本信息组成），②请求头（如：Cache-Control，Cookie等请求头信息），③请求体（请求体的类型可以通过Content-Type请求头来设置））；</br>` +
        `${bindTextToElement ('②查找缓存')}：浏览器查找本地缓存中是否有本次请求的资源。有，则拦截请求，并加载本地缓存。无，则继续发送请求；</br>` +
        `${bindTextToElement ('③域名解析')}：通过DNS将地址栏的域名地址解析成可访问的IP地址；</br>` +
        `${bindTextToElement ('④等待TCP队列')}：谷歌浏览器有个机制，同一域名最多只能建立6个TCP，如果在同一域名下同时有10个请求发生，那么其中四个请求会进入排队等待状态，直至进行中的请求完成；</br>` +
        `${bindTextToElement ('⑤建立TCP链接')}：三次握手建立连接：${bindTextToElement ('第一步，客户端发送SYN(seq=x)给服务端请求建立连接。第二步，服务端接收SYN(seq=x)，并返回SYN(seq=y,ACK=x+1)来应答客户端请求。第三步，客户端发送ACK(ack=y+1)应答服务端确认连接')}</br>` +
        `${bindTextToElement ('⑥发送HTTP请求')}：到这一步浏览器才真正的将HTTP请求的报文数据发送到服务端；</br>` +
        `${bindTextToElement ('⑦返回请求')}：服务浏览器返回的响应报文也包含三部分：①响应行（由协议版本，状态码等要素组成），②响应头（如：Content-Type，Access-Control-Allow-Origin等响应头信息），③响应体（响应体的类型可以通过Content-Type响应头来设置）；</br>` +
        `${bindTextToElement ('⑧断开连接')}：通常情况下，一旦服务器向客户端返回了请求数据，它就会关闭TCP连接。如果要开启长连接模式，则需要在请求头中设置Connection：Keep-Alive，TCP断开连接需要经过四次挥手这几个过程才能将TCP连接断开；</br>`,
    },
    {
      label: '4.浏览器导航流程',
      content: `在浏览器地址栏输入一个地址并开始导航，浏览器大致会执行以下几个操作：</br>` +
        `${bindTextToElement ('①地址栏输入内容')}：浏览器会根据地址栏输入的内容判断是“搜索内容”还是“URL地址”，如果是搜索内容，浏览器会使用默认搜索引擎加上搜索内容合成URL地址。如果是域名，则会加上协议并合成完整的URL。</br>` +
        `${bindTextToElement ('②按下回车键')}：浏览器通过IPC（进程间通信）将URL传给网络进程。</br>` +
        `${bindTextToElement ('③执行HTTP请求')}：网络进程接收到URL之后，发送HTTP请求，并将响应头信息回传给浏览器进程。</br>` +
        `${bindTextToElement ('④提交响应到渲染进程')}：浏览器进程发送CommitNavigation消息到渲染进程，并携带响应头信息</br>` +
        `${bindTextToElement ('⑤渲染进程确认提交')}：渲染进程接收到CommitNavigation消息之后，便开始与网络进程建立数据管道，最后渲染进程会像浏览器进程发起“确认提交”的消息，来告诉浏览器进程，可以开始接收和解析页面数据了。</br>` +
        `${bindTextToElement ('⑥浏览器进程更新状态')}：到这一步，浏览器开始更新如：①前进后退的状态，②站点安全状态，③地址栏URL，④web页面等浏览器信息。</br>`,
    },
    {
      label: '5.浏览器渲染流程',
      content: `①渲染进程将HTML解析成DOMTree。</br>` +
        `②渲染引擎将CSS样式表解析成styleSheets，通过计算（Recalculate Style）生成元素节点的样式（ComputedStyle）。</br>` +
        `③创建布局树（LayoutTree），并计算元素的布局信息。这一步进行的操作即是“重排或称为回流”（Reflow）</br>` +
        `④对布局进行分层，并生成分层树（LayerTree）</br>` +
        `⑤为每个图层绘制列表，并将其提交到合成线程</br>` +
        `⑥合成线程将图层分成图块（Tile），并在光栅化线程池中将图块转换成位图。这一步进行的操作即是“重绘”（Paint）</br>` +
        `⑦合成线程发送制图块命令DrawQuad给浏览器进程</br>` +
        `⑧浏览器进程根据DrawQuad消息生成（Composite Layers）页面，并显示到显示器上。</br>`,
    },
    {
      label: '6.界面图层',
      content: `${bindTextToElement ('浏览器中的界面是由一个或者多个图层组成的，而每个图层都会包含一个或者多个DOM节点。')}浏览器一般在以下几种情况下会创建新的图层来满足需要：</br>` +
        `①元素的样式拥有3D变换的CSS属性，如：“transform: translate3d(20px, 20px, 20px);”；</br>` +
        `②html中使用了canvas、video标签</br>` +
        `③CSS样式中使用了will-change属性来告知浏览器将会产生的变化，从而使得浏览器可以提前为将要产生的变化做好优化准备工作。</br>`,
    },
  ],
};
