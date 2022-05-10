
 const Users = require("../models");
    const userInfo = [{
        username: "roro",
        password: "roro@email.com"
    },


    ];

    const userLogin = () => Users.bulkCreate(userInfo);
    module.exports = userLogin;
