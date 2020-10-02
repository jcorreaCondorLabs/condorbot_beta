const list = (robot) => {
    robot.respond(/office_hrs list/, async (res) => {
        const botName = res.robot["name"];
        let command = res.match["input"];
        command = command.replace(botName, "");
        command = command.replace("@", "").trim();
        const splittedCommand = command.split(" ");

        res.send("My name is " + botName + " you are asking for " + splittedCommand[0] + splittedCommand[1])
    });
  };
  
  module.exports = {list};