/*=============================================== Plopfile ===============================================*/

import type { NodePlopAPI } from "plop"
import chalk from "chalk"
import figlet from "figlet"
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
    console.log(
        chalk.blueBright(
            figlet.textSync("JulSeb CLI", { horizontalLayout: "full" })
        )
    )

    /*====================== Actions ======================*/

    runCommand(plop) // With this helper you can run commands in a terminal => { type: "runCommand", command: "console.log("hello world")" }

    /*====================== Partials ======================*/

    pascalName(plop)

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