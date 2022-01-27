"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2022-01-27
 *
 * @description
 * @augments
 * @example
 * @link
 *
 */

const log = console.log;

// base64-svg-watermark.js
// npm

// export default class CanvasWatermark {
//     constructor(options = {}) {
//         this.watermark = options;
//         log('🖼 CanvasWatermark options =', this.watermark);
//     }
//     init() {
//         const { width, height } = this.watermark;
//         this.canvas = document.createElement('canvas');
//         this.canvas.setAttribute('width', width);
//         this.canvas.setAttribute('height', height);
//     }
//     render() {
//         const {
//             text,
//             x,
//             y,
//             width,
//             height,
//             font,
//             color,
//             fontSize,
//             alpha,
//             angle,
//         } = this.watermark;
//         const ctx = this.canvas.getContext('2d');
//         ctx.clearRect(0, 0, width, height);
//         ctx.textBaseline = 'top';
//         ctx.textAlign = 'left';
//         ctx.fillStyle = color;
//         ctx.globalAlpha = alpha;
//         ctx.font = `${fontSize}px ${font}`;
//         ctx.translate(x, y);
//         ctx.rotate(Math.PI / 180 * angle);
//         ctx.translate(-x, -y - fontSize);
//         // draw text
//         ctx.fillText(text, x, y + fontSize);
//         return this.canvas.toDataURL();
//     }
// }


export default class SvgWatermark {
    constructor(options = {}) {
        this.watermark = options;
        log('ⓈⓋⒼ SvgWatermark options =', this.watermark);
    }
    render() {
        const {
            text,
            x,
            y,
            width,
            height,
            font,
            color,
            fontSize,
            alpha,
            angle,
        } = this.watermark;
        const svgStr = `
            <svg xmlns="http://www.w3.org/2000/svg" width="${width}px" height="${height}px">
                <text
                    x="${x}px" y="${y}px"
                    dy="${fontSize}px"
                    text-anchor="start"
                    stroke="${color}"
                    stroke-opacity="${alpha}"
                    fill="none"
                    transform="rotate(${angle},${x} ${y})"
                    font-weight="100"
                    font-size="${fontSize}"
                    font-family="${font}">
                    ${text}
                </text>
            </svg>
        `;
        return `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svgStr)))}`;
    }
    getBase64SVGImage () {
        const userName = this.watermark?.text ?? "xgqfrms";
        const watermark = `
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svg" viewBox="0 0 100 100" width="100" height="100">
                <text x="25" y="50" fill="#00ff00">${userName}</text>
            </svg>
        `;
        const app = document.querySelector(`#app`);
        app.insertAdjacentHTML('beforeend', watermark);
        // serialize string
        const svgElement = document.querySelector(`#svg`);
        const svgURL = new XMLSerializer().serializeToString(svgElement);
        return `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svgURL)))}`;
    }
}
