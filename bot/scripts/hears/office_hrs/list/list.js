const axios = require('axios')

const list = (robot) => {
    robot.respond(/office_hrs list/, async (res) => {
        const botName = res.robot["name"];
        let command = res.match["input"];
        command = command.replace(botName, "");
        command = command.replace("@", "").trim();
        const splittedCommand = command.split(" ");

        await axios('https://gk1yf1mj82.execute-api.us-east-1.amazonaws.com/dev/condorbot/api/office_hrs/list')
        .then((response) => {
            console.log(response.data);
        })
        .catch((e) => {
            console.log(e);
        });

        res.send("My name is " + botName + " you are asking for " + splittedCommand[0] + splittedCommand[1])
    });
  };
  
  module.exports = {list};