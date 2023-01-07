import { build } from "esbuild";
import { copy } from "esbuild-plugin-copy";

async function bundle() {
	await build({
		entryPoints: ["./src/scripts.js"],
		bundle: true,
		minify: true,
		sourcemap: true,
		target: "es2022",
		outfile: "./dist/scripts.js",
		plugins: [
			copy({
				resolveFrom: "cwd",
				assets: [
					{
						from: ["./src/assets/*"],
						to: ["./dist/assets"],
					},
					{
						from: ["./src/index.html"],
						to: ["./dist"],
					},
				],
			}),
		],
	});
}

await bundle();
