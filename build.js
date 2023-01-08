import { build } from "esbuild";
import { copy } from "esbuild-plugin-copy";

async function bundle() {
	await build({
		bundle: true,
		minify: true,
		sourcemap: true,
		target: "es2022",
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
