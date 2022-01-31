// level 3
// 1.
function recurse(user){
    for (o in user.values()){
        if (typeof(o) === 'string' ){
            return o.toUpperCase()
        }
        recurse(user)
    }
}
// 1.

// 2.
var string =  "a:2,b:3,c:4,a:5,b:6"
splited_list = string.split(",")
var dict = {}
for (let i;i<len(splited_list);splited_list++){
    var splited_values = i.split(':')
    if (splited_values[0] in dict.keys()){
        dict[splited_values[0]] = dict[splited_values[0]].values() + splited_values[1]
    } 
    dict[splited_values[0]] = splited_values[1]
}
// 2.

// 3.
s = '{[({})]}'
function Validate(){
    let keys = {"(":"}","(":")","[":"]"}
    let stack = [];

    for (let i = 0; i<s.length;i++){
        if(keys[s[i]]){
            stack.push(s[i]);
        }
        else{
            if(keys[stack.pop()] != s[i]){
                return 'not valid';
            }
        }
    }
    return 'valid'
}