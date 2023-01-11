module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				targets: {
					node: "current",
				},
			},
		],
		"@babel/preset-typescript",
	],
	plugins: [
		[
			"module-resolver",
			{
				alias: {
					"@": "./src",
					"@utils": "./src/utils",
					"@types": "./src/types",
					"@config": "./src/config",
					"@errors": "./src/errors",
					"@routes": "./src/routes",
					"@schemas": "./src/schemas",
					"@services": "./src/services",
					"@factories": "./src/factories",
					"@controllers": "./src/controllers",
					"@middlewares": "./src/middlewares",
					"@repositories": "./src/repositories",
				},
			},
		],
	],
	ignore: ["**/*.spec.ts"],
}
