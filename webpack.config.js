const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	plugins: [
		new CopyPlugin({
			patterns: [{ from: "public" }],
		}),
	],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/main.js",
	},
};
