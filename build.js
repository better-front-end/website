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
				// this is equal to process.cwd(), which means we use cwd path as base path to resolve `to` path
				// if not specified, this plugin uses ESBuild.build outdir/outfile options as base path.
				resolveFrom: "cwd",
				assets: [
					{
						from: ["./assets/*"],
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
