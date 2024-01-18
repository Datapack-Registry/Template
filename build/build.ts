import { walkSync } from "https://deno.land/std@0.212.0/fs/mod.ts";
import { join, dirname } from "https://deno.land/std@0.212.0/path/mod.ts";
import formatString from 'https://raw.githubusercontent.com/TypeScriptPlayground/std/main/src/format/format_string.ts'

Deno.chdir('./build/template');
for (const entry of walkSync(
    './',
    {includeDirs: false}
)) {
    const createFilePath = join('../../', formatString(entry.path.replace('\\', '/'), {template: 'a'}))
    const fileContent = formatString(Deno.readTextFileSync(entry.path), {template: 'a'});

    console.log(createFilePath);
    console.log(fileContent);
    Deno.mkdirSync(dirname(createFilePath), {recursive: true});
    Deno.writeTextFileSync(createFilePath, fileContent);
}
Deno.chdir('../../');
