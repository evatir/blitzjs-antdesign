import { RecipeBuilder } from "@blitzjs/installer";
import { join } from "path";

export default RecipeBuilder()
  .setName("Ant Design")
  .setDescription(
    `This will install all necessary dependencies and configure Ant Design for use.`
  )
  .setOwner("carter@timetrackify.com")
  .setRepoLink("https://github.com/timetrackify/blitz-recipe-antd")
  .addAddDependenciesStep({
    stepId: "addDeps",
    stepName: "npm dependencies",
    explanation: `Ant Design requires a couple of development dependencies to package properly.`,
    packages: [
      { name: "antd", version: "4.15.2" },
      { name: "babel-plugin-import", version: "1.13.3", isDevDep: true },
      { name: "next-plugin-antd-less", version: "1.0.8", isDevDep: true },
    ],
  })
  .addNewFilesStep({
    stepId: "addConfig",
    stepName: "Config files",
    explanation: `Adds a starter blitz.config.js. NOTE: this will replace your existing blitz.config.js and babel.config.js files. Make sure it is backed up if this isn't a new project.`,
    targetDirectory: ".",
    templatePath: join(__dirname, "templates", "config"),
    templateValues: {},
  })
  .addNewFilesStep({
    stepId: "addStyles",
    stepName: "Stylesheet",
    explanation: `Adds a less stylesheet to customize Ant Design.`,
    targetDirectory: "./app/core",
    templatePath: join(__dirname, "templates", "styles"),
    templateValues: {},
  })
  .build();
