module.exports = {
    "extends": [
        "react-app",
        "react-app/jest"
      ],
    settings: {      
        'import/resolver': {
            alias: {
                map: [
                    // And all your import aliases
                    ['animations','./src/animations']
                    ['src', './src'],
                    ['components', './src/components'],
                    ['pages', './src/pages'],
                    ['store', './src/store'],
                    ['assets', './src/assets'],
                    ['img', './src/assets/img'],
                    ['icons', './src/assets/icons'],
                    ["utils", "../src/utils"],
                    ["staticData", "../src/staticData"]
                ],
                extensions: ['.ts', '.js', '.jsx', '.json'],
            },
        },
    },
};