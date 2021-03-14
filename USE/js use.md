# script标签

* [async和defer的使用](https://zhuanlan.zhihu.com/p/292953374)

* 正常DOM解析遇到script标签会暂停解析，等到js download && js execution完毕后才会继续进行正常的dom解析。js过大会造成白屏时间过长

* 两种js代码的形式，一种src外部引用，一种script标签里面直接写js。例如下
```
<script async src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
  console.error($)
</script>
```

* 标签传统放到head标签中，现代为了防止白屏一般都放在body标签的最后

* 尽量使用外部文件，可维护、可缓存（走http的缓存策略）、适应未来

* 文档模式当前都使用标准的文档模式就行

## type属性

> 非必须属性，默认值为type="text/javascript"。编写的时候经常添加type="text/javascript"，但是已经不被推荐使用。向服务器传递文件的时候使用MIME="application/x-javascript"

## async属性

> 简单理解一下就是异步解析然后直接运行，可能造成dom无法找到报错。只对外部引用链接生效。js也是同理，下一个js依赖上一个js的异步解析，可能会造成js找不到的问，例如下边代码

```
<script async src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
  console.error($)
</script>
```

## defer属性

> 简单理解一下就是异步download代码，然后html解析完毕之后多个js串行执行js。只对外部引用链接生效。

* 最好用defer就全都使用
```
<script defer src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script defer src="index.js"></script>
```

* 例如下边这种前边使用了defer下边的js没有使用，可能造成第二个js使用了第一个js的引用，造成报错
```
<script defer src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="index.js"></script>
```

## src属性

> 标示外部执行文件

## chaeset属性

> 指定代码字符集，大多数浏览器会忽略，很少有人使用

## language属性

> 已经废弃


# noscript标签

* 浏览器不支持脚本会启用
* 浏览器支持脚本，但是脚本被禁用
* 为了安全问题可以使用

> 想法：以前使用node抓去淘宝的网页数据，时间长了之后就会出现这个标签，感觉应该是在服务端或者运维层面检测你的ip规则请求之后，给返回一个错误的页面