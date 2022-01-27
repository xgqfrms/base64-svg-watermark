# base64-svg-watermark

https://www.npmjs.com/package/base64-svg-watermark

https://github.com/xgqfrms/base64-svg-watermark

## install

```sh
$ npm i -S base64-svg-watermark


```

## usage


```js

import SvgWatermark from "base64-svg-watermark";

const config = {
    text: "xgqfrms",
    x: 0,
    y: 0,
    width 100,
    height: 100,
    // font-family
    font: "sans-serif",
    fontSize: 12,
    color: "#00ff00",
    alpha: 0.3,
    angle: 45,
};
const watermark = new SvgWatermark(config);

```

## refs

[前端水印实现方式 All In One](https://www.cnblogs.com/xgqfrms/p/15847231.html)
