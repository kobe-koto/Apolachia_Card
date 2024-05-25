<h1 style="text-align: center">Apolachia's Carte</h1>

<p style="text-align: center">简易 简介 易配置 的赛博个人名片</p>

## 演示

Demo live in https://apolachia-card.pages.dev .

## 配置

### 1. 快速设定

> 清先确保你已安装 Node.js 和 NPM 包管理器.

#### 1.1 执行以下指令安装依赖

```bash
# NPM
npm install

# PNPM
pnpm install

# Yarn
yarn install
```

#### 1.2 执行以下指令进入快速设定

```bash
# NPM
npm run carte-setup

# PNPM
pnpm run carte-setup

# Yarn
yarn run carte-setup
```

并遵循提示进行设定

### 2. 设定头图

在以下位置找到 `header.webp` 并将其替换为你自己的头图.

```
└── src
    ├── ...
    └── assets
        ├── ...
        └── images
            ├── ...
            └── header.webp
```

### 3. 编辑文本

自述文件在以下位置

```
└── src
    ├── ...
    └── content
        ├── ...
        └── documents
            ├── about-back.md
            └── about-front.md
```

- `about-front.md` 用于简易介绍你自己
- `about-back.md` 用于详细介绍


## 进阶配置

### `Global.js` - 基本配置

```
└── src
    ├── ...
    └── config
        ├── ...
        └── Global.js
```

以下是原始配置:

```javascript
export const SiteName = "Apolachia's Carte";
export const Description = `Silent night, moon's glow revealed no figure, but a spectral whisper echoed, "You're not alone."`;

export const SEOConfig = {
    Language: "en",
    firstname: "Apolachia",
    lastname: "Griffin",
    fullname: "Apolachia Griffin",
    gender: "other",
    TwitterHandle: "@ArmoLab",
}

export const CustomColorSchema = {
    IntroBackground: "#201a1a",
    IntroFont: "#f8f8ff",
    IntroBackShadow: "#241f31",
}
```

- `SiteName`: 网站的名称
- `Description`: 网站的描述
- `SEOConfig`: 针对于 SEO (搜寻引擎优化) 的配置
  - `Language`: 网站的语言
  - `firstname`: 你的名字
  - `lastname`: 你的姓氏
  - `fullname`: 你的全名
  - `gender`: 你的性别
  - `TwitterHandle`: 你的 Twitter 用户名
- `CustomColorSchema`: 自订颜色主题 **(未完工)**
  - `IntroBackground`: 名片的背景颜色
  - `IntroFont`: 名片的字体颜色
  - `IntroBackShadow`: 名片背景阴影的颜色

### `SocialLinks.js` - 社交链接

```
└── src
    ├── ...
    └── config
        ├── ...
        └── SocialLinks.js
```

以下是原始配置:

```javascript
export const FollowTip = "Follow me at"

export const SocialLinks = [
	{
		Icon: "iconoir:twitter",
		Desc: "My Twitter (now as X) link",
		Title: "Twitter",
		Link: "https://twitter.com/kobe_koto"
	},
	{
		Icon: "iconoir:github",
		Desc: "My GitHub link",
		Title: "GitHub",
		Link: "https://github.com/kobe-koto"
	}
]
```

- `FollowTip`: 导引访客关注的文字

- `SocialLinks`: 社交链接, Array, 其子项应该具有:

  - `Icon`: Icon 名称, 参考 [Iconoir - Iconify](https://icon-sets.iconify.design/iconoir/), 选取一个 Icon 并复制形如 `iconoir:xxx` 的 Icon ID

    也可以安装其他的图标包, 参考 [Astro Icon - GitHub](https://github.com/natemoo-re/astro-icon).

  - `Desc`: 链接描述

  - `Title`: 链接标题

  - `Link`: 链接 **(请填入 http 协议的有效链接)**

## Credits

- Ported from https://koto.cc .

- 原始码在 AGPL-3.0 以下进行分发, 不包括以下文件:

  ```
  └── src
      └── assets
          └── images
              └── header.webp
  ```
