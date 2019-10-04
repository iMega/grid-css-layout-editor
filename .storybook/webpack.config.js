"use strict";

const path = require("path");

module.exports = {
    resolve: {
        alias: {
            "@common": path.resolve(__dirname, "..", "common")
        }
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "@svgr/webpack",
                        options: {
                            dimensions: false,
                            prettier: false
                        }
                    }
                ]
            }
        ]
    }
};
