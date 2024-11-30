/*=============================================== Plopfile ===============================================*/

import type { NodePlopAPI } from "plop"
import welcome from "cli-welcome"
import { runCommand } from "./actions/index.js"
import {
    generateComponent,
    generatePage,
    generateSingleComponent,
    generateType,
} from "./generators/index.js"
import {
    surroundBrackets,
    addOpenBrackets,
    addClosingBrackets,
} from "./utils/index.js"
import { pascalName } from "./partials/index.js"

export default (plop: NodePlopAPI) => {
    /*====================== Greetings ======================*/

    welcome({
        title: "Julseb CLI",
        tagLine: "A tool to generate React with TS apps",
        description: "",
        bgColor: "#ffffff",
        color: "#000000",
        bold: true,
        clear: true,
        version: "1.0.0",
    })

    /*====================== Actions ======================*/

    runCommand(plop) // With this helper you can run commands in a terminal => { type: "runCommand", command: "console.log("hello world")" }

    /*====================== Partials ======================*/

    pascalName(plop) // Shortcut to write {{ pascalCase name }} => {{>pascalName}}

    /*====================== Generators ======================*/

    generateComponent(plop) // yarn plop:c
    generateSingleComponent(plop) // yarn plop:sc
    generatePage(plop) // yarn plop:p
    generateType(plop) // yarn plop:ty

    /*====================== Helpers ======================*/

    addOpenBrackets(plop) // Use in template files => title={{addOpenBracket}}
    addClosingBrackets(plop) // Use in template files => "hello" {{addClosingBrackets}}
    surroundBrackets(plop) // Use in template files => size={{surroundBrackets 'size: "l"' }}
}
