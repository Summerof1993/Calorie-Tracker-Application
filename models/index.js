const Users = require("./users");
const Meals = require("./meals");

Users.hasMany(Meals, {
    foreignKey: "user_Id",
});

Meals.belongsTo(Users,{
    foreignKey: "user_id",
});

module.exports = { Users, Meals};
