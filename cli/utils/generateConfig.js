import jsonFormat from "json-format";
const jsonFormatConfig = {
    type: "space",
    size: 4
}

export function generateConfig (Config) {
    let CompiledConfig = "";
    //Config += `export const`
    for (let i in Config) {
        CompiledConfig += `export const ${i} = ${
            typeof Config[i] === "object" 
             ? jsonFormat(Config[i], jsonFormatConfig)
             : `"${Config[i]}"`
        }\n`;
    }
    return CompiledConfig;
}