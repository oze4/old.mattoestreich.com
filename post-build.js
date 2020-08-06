const fs = require("fs");
const chalky = require("chalky");

const oldPath = "./build";
const newPath = "./docs";
const cnamePath = `${newPath}/CNAME`;
const cnameContents = "mattoestreich.com";

console.log(chalky.magenta("*".repeat(50)));

fs.exists(newPath, (exists) => {
  if (exists) {
    try {
      fs.rmdirSync(newPath, { recursive: true });
      exists = false;
      console.log(
        chalky.green(`\r\nSuccessfully removed directory: ${chalky.yellow(newPath)}\r\n`),
      );
    } catch (err) {
      throw Error(chalky.red(`\r\nUnable to remove directory: ${chalky.yellow(newPath)}!\r\n`));
    }
  }

  if (!exists) {
    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        throw Error(
          chalky.red(
            `Unable to rename '${chalky.yellow(oldPath)}' to '${chalky.yellow(newPath)}'.\r\n\r\n${
              err.message
            }\r\n\r\n`,
          ),
        );
      }

      console.log(
        chalky.green("\r\nSuccessfully renamed "),
        chalky.yellow(oldPath),
        chalky.green(" to "),
        chalky.yellow(newPath),
        chalky.green("!\r\n"),
      );

      fs.writeFile(cnamePath, cnameContents, (err) => {
        if (err) {
          throw Error(chalky.red("\r\n\r\nUnable to create CNAME file!\r\n\r\n"));
        }

        console.log(chalky.green("\r\nSuccessfully created CNAME file!\r\n"));
      });
    });
  }
});
