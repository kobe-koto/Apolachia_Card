import prompts from "prompts";
import chalk from "chalk";
import { validator } from "./utils/validator.js";
import { generateConfig } from "./utils/generateConfig.js";
import { writeConfig } from "./utils/writeConfig.js";
const Validator = new validator;



(async () => {
    console.log(
        chalk.magenta.bold("👋 欢迎使用 Apolachia's Carte!") + 
        " " +
        chalk.green("只需回答几个问题, 即可快速自订您的赛博名片.")
    )

    const { SiteName, Description } = await prompts (
        [
            {
                type: "text",
                name: "SiteName",
                message: "网站的名称",
                validate: Validator.isEmpty
            },
            {
                type: "text",
                name: "Description",
                message: "网站的描述",
                validate: Validator.isEmpty
            }
        ],
        { onCancel: () => { process.exit(0) } }
    )

    console.log(chalk.green("👌 非常感谢! 接下来我们需要一些信息来优化 SEO."))

    const SEOConfig = await prompts (
        [
            {
                type: "text",
                name:"Language",
                message: "网站的语言",
                validate: Validator.isEmpty
            },
            {
                type: "text",
                name:"firstname",
                message: "你的名字",
                validate: Validator.isEmpty
            },
            {
                type: "text",
                name:"lastname",
                message: "你的姓氏",
                validate: Validator.isEmpty
            },
            {
                type: "text",
                name:"fullname",
                message: "你的全名",
                validate: Validator.isEmpty
            },
            {
                type: "text",
                name:"gender",
                message: "你的性别",
                validate: Validator.isEmpty
            },
            {
                type: "text",
                name:"TwitterHandle",
                message: "你的 Twitter 用户名",
                validate: Validator.isTwitterHandle
            }
        ],
        { onCancel: () => { process.exit(0) } }
    )

    const { CustomColorSchema } = await prompts (
        [
            {
                type: "toggle",
                name: "isModifyCustomColorSchema",
                message: "🧐 您需要自订颜色主题吗? 请注意, 这是一个未完工的设定.",
                active: "好",
                inactive: "不用了",
                initial: false,
            },
        ]
    ).then(async res => {
        if (!res.isModifyCustomColorSchema) {
            return {
                CustomColorSchema: {
                    IntroBackground: "#201a1a",
                    IntroFont: "#f8f8ff",
                    IntroBackShadow: "#241f31"
                }
            }
        }
        return await prompts (
            [
                {
                    type: "text",
                    name: "IntroBackground",
                    message: "名片的背景颜色",
                    validate: Validator.isColorHex
                },
                {
                    type: "text",
                    name: "IntroFont",
                    message: "名片的字体颜色",
                    validate: Validator.isColorHex
                },
                {
                    type: "text",
                    name: "IntroBackShadow",
                    message: "名片背景阴影的颜色",
                    validate: Validator.isColorHex
                },
            ],
            { onCancel: () => { process.exit(0) } }
        )
    })

    let CompiledConfig = generateConfig({
        SiteName, 
        Description, 
        SEOConfig, 
        CustomColorSchema
    });

    writeConfig("Global", CompiledConfig)

    console.log(chalk.green("👏 已为你写入基本配置"))

    



})();
