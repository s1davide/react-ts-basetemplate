const craco = {
    plugins:[
        {
            plugin: require("craco-alias"),
            options:{
                baseUrl: "./src",
                source: "tsconfig",
                tsConfigPath: "./tsconfig.extend.json",
            }
        }
    ]
 }
export default craco;