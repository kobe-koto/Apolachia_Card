import { writeFileSync } from "node:fs";

/**
 * 
 * @param {String} slug  without `.js`
 * @param {String} data  regular data.
 */
export function writeConfig (slug, data) {
    return writeFileSync(`./src/config/${slug}.js`, data, "utf-8")
}