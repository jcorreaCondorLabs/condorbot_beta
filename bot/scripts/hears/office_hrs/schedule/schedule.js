const axios = require('axios')

const schedule = (robot) => {
    robot.respond(/office_hrs schedule/, async (res) => {
        const botName = res.robot["name"];
        let command = res.match["input"];
        command = command.replace(botName, "");
        command = command.replace("@", "").trim();
        const splittedCommand = command.split(" ");

        const param1 = splittedCommand[2];
        const param2 = splittedCommand[3];
        const param3 = splittedCommand[4];
        const param4 = splittedCommand[5];

        await axios({
            method: "post",
            url:
              "https://gk1yf1mj82.execute-api.us-east-1.amazonaws.com/dev/condorbot/api/office_hrs/schedule",
            headers: { "Content-type": "application/json" },
            data: {
              param1: param1,
              param2: param2,
              param3: param3,
              param4: param4,
            },
          })
            .then((response) => {
              console.log(response.data);
            })
            .catch((e) => {
              console.log(e);
            });

        res.send("My name is " + botName + " you are asking for " + splittedCommand[0] + splittedCommand[1])
    });
  };
  
  module.exports = {schedule};