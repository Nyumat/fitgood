// Author: Danny Zahariev
// File Description: Manages account database

const ACCOUNT_PATH = './database'
const CONTENT_PATH = './content'
const DEFAULT_CATEGORIES = ["Tops", "Covers", "Bottoms", "Shoes"]
const DEFAULT_USER = {
    username: "",
    password: "",
    outfits: [],
    categories: [
        {
            name: DEFAULT_CATEGORIES[0],
            items: []
        },
        {
            name: DEFAULT_CATEGORIES[1],
            items: []
        },
        {
            name: DEFAULT_CATEGORIES[2],
            items: []
        },
        {
            name: DEFAULT_CATEGORIES[3],
            items: []
        },
    ]
}

const fs = require("fs")

// creates empty account
// username - (string) account username
// password - (string) encrypted password
function create(username, password) {
    // throws expection if account already exists
    if(fs.existsSync(ACCOUNT_PATH + "/" + username)){
        throw "Account already exists";
    }

    // creates user object
    let new_user = DEFAULT_USER;
    new_user.username = username;
    new_user.password = password;

    // saves file to "database"
    let file_data = JSON.stringify(new_user);
    fs.mkdirSync(ACCOUNT_PATH + "/" + username);
    fs.writeFileSync(ACCOUNT_PATH + "/" + username + "/" + username + ".json", file_data);

    //creates content directory
    fs.mkdirSync(CONTENT_PATH + "/" + username);

    return
}

// access user object by username
// username - (string) account username
function access(username){
    if(fs.existsSync(ACCOUNT_PATH + "/" + username + "/" + username + ".json")){
        let file_data = fs.readFileSync(ACCOUNT_PATH + "/" + username + "/" + username + ".json");
        let user = JSON.parse(file_data);
        return user;
    }

    throw "Account not found";
}

function create_item(user, name, img_file_path, item_category){
    
    let new_item = {name, img_file_path};
    user.categories[item_category].items.push(new_item);


    // saves changes to database
    fs.writeFileSync(ACCOUNT_PATH + "/" + username + "/" + username + ".json", user);
}

exports.create = create;
exports.access = access;
exports.create_item = create_item;
// export { create, access };