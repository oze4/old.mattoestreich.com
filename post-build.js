const fs = require("fs");
const chalk = require("chalk");

const oldPath = "./build";
const newPath = "./docs";
const cnamePath = `${newPath}/CNAME`;
const cnameContents = "mattoestreich.com";

console.log(chalk.magenta("*".repeat(50)));

fs.exists(newPath, (exists) => {
  if (exists) {
    try {
      fs.rmdirSync(newPath, { recursive: true });
      exists = false;
      console.log(chalk.green(`\r\nSuccessfully removed directory: ${chalk.yellow(newPath)}\r\n`));
    } catch (err) {
      throw Error(chalk.red(`\r\nUnable to remove directory: ${chalk.yellow(newPath)}!\r\n`));
    }
  }

  if (!exists) {
    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        throw Error(
          chalk.red(
            `Unable to rename '${chalk.yellow(oldPath)}' to '${chalk.yellow(newPath)}'.\r\n\r\n${
              err.message
            }\r\n\r\n`,
          ),
        );
      }

      console.log(
        chalk.green(
          `\r\nSuccessfully renamed '${chalk.yellow(oldPath)}' to '${chalk.yellow(newPath)}'!\r\n`,
        ),
      );

      fs.writeFile(cnamePath, cnameContents, (err) => {
        if (err) {
          throw Error(chalk.red("\r\n\r\nUnable to create CNAME file!\r\n\r\n"));
        }

        console.log(chalk.green("\r\nSuccessfully created CNAME file!\r\n"));
      });
    });
  }
});
