import { readFile, writeFile } from "node:fs/promises";

const configPath = new URL("../dist/server/wrangler.json", import.meta.url);
const config = JSON.parse(await readFile(configPath, "utf8"));

config.d1_databases = [];

await writeFile(configPath, `${JSON.stringify(config, null, 2)}\n`);
