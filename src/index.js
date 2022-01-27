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
