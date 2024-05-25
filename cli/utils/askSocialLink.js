import prompts from "prompts";
import { validator } from "./validator.js";
const Validator = new validator();

export async function askSocialLink () {
    return await prompts (
        [
            {
                type: "text",
                name: "Icon",
                message: "图标 ID",
                validate: Validator.checkIconID
            },
            {
                type: "text",
                name: "Desc",
                message: "描述",
                validate: Validator.isEmpty
            },
            {
                type: "text",
                name: "Link",
                message: "超链接",
                validate: Validator.isHTTPURL
            },
        ],
        { onCancel: () => { process.exit(0) } }
    )
    .then(res => {
        if (res.Icon.match(/\!\!$/g)) {
            res.Icon = res.Icon.replace(/\!\!$/g, "")
        }
        return res;
    })
}