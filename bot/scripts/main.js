//module.exports = (robot) => {
//  robot.respond(/hola$/i, async res => {
//    res.send("Hola soy el Condorbot")
// })
//}

const { create } = require("./hears/vacations/create/create");
const { revoke } = require("./hears/vacations/revoke/revoke");
const { schedule } = require("./hears/office_hrs/schedule/schedule");
const { list } = require("./hears/office_hrs/list/list");

module.exports = (robot) => {
  create(robot);
  revoke(robot);
  schedule(robot);
  list(robot);
};
