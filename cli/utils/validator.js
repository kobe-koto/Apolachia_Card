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
}

const hexPattern = /^#([0-9A-Fa-f]{3}){1,2}$/;