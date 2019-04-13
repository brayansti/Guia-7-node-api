const users = require("../resourses/users");

module.exports = {
    getUsers : function(){
        return users;
    },
    getUsersByID : function(id){
        return users.filter( user =>user._id === id );
    }
}