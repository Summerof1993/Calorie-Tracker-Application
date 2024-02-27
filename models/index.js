const User = require("./users");
const Meals = require("./meals");

User.hasMany(Meals, {
    foreignKey: "user_Id",
});

Meals.belongsTo(User,{
    foreignKey: "user_id",
});

module.exports = { User, Meals };
