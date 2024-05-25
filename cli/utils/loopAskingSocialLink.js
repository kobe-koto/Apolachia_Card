import prompts from "prompts";
import { askSocialLink } from "./askSocialLink.js";

let SocialLinks = [];
/**
 * 
 * @returns {Array}
 */

export async function loopAskingSocialLink () {

    return await prompts([
        {
            type: "toggle",
            name: "isProceed",
            message: (
                SocialLinks.length === 0 
                 ? "您需要添加社交链接吗?"
                 : "您需要添加更多社交链接吗?"
            ),
            active: "好",
            inactive: "不用了",
            initial: true,
        },
    ])
    .then(async res => {
        if (res.isProceed === true) {
            let SocialLink = await askSocialLink();
            SocialLinks.push(SocialLink)
            return loopAskingSocialLink()
        }
        return SocialLinks;
    })
}