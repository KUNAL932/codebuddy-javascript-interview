// level {3}
// import  _ = require('lodash');

getUsers(users){
    const new_users = [];
    var output =  _.map(users,function(i){
        const newUser = user[i];
        newUser.id = i;
        new_users.push(newUser);

    })
    return output;
  }
