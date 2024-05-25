import { readFileSync } from "node:fs";

export class validator {
    constructor () {}
    isEmpty (value) {
        return value === "" ? "请勿留空" : true;
    }
    isTwitterHandle (value) {
        if (value === "") {
            return "请勿留空";
        }
        if (!value.startsWith("@")) {
            return "Twitter 用户名应以 @ 开头";
        }
        return true;
    }
    isColorHex (value) {
        const hexPattern = /^#([0-9A-Fa-f]{3}){1,2}$/;
        if (value === "") {
            return "请勿留空";
        }
        if (!value.startsWith("#")) {
            return "Hex 颜色值应以 # 开头";
        }
        if (!hexPattern.test(value)) {
            return `"${value}" 不是一个有效的的 Hex 值`
        }
        return true;
    }
    isHTTPURL (URL) {
        if (!/^http(|s)\:\/\//i.test(URL)) {
            return `${URL} 不是一个有效的 HTTP 超链接`
        }
        return true
    }
    checkIconID (ID) {
        const { dependencies } = JSON.parse(readFileSync("./package.json")),
              IconPackageID = `@iconify-json/${ID.split(":")[0]}`;
        if (ID.split(":").length !== 2) {
            return "ID 格式疑似有误, 如果确认无误, 请至 GitHub 提交 issue."
        }
        if (!dependencies[IconPackageID] && !ID.match(/\!\!$/)) {
            return `未有找到相关的图标包依赖, 您可能需要另外安装 "${IconPackageID}" (尽管不知道是否有效). 在 ID 末尾添加 "!!" 来忽略此提示.`
        }
        return true;
    }
}
