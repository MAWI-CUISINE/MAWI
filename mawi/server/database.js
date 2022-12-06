const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://mariem:4545@mawi.mmctnm7.mongodb.net/mawi",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((res) => console.log("data connected"))
    .catch((err) => console.log(err))


const UserSchema = new mongoose.Schema({
    Uname: {
        type: String,
        required: true
    },
    Uemail: {
        type: String,
        required: true
    },
    Upassword: {
        type: String,
        required: true
    },
    Uimage: {
        type: String
    }   

})
const AdminSchema = new mongoose.Schema({
    Aname: {
        type: String,
        required: true
    },
    Apassword: {
        type: String,
        required: true
    },
    Aemail: {
        type: String,
        required: true
    }
})

const RecipeSchema = new mongoose.Schema({
    Rname: {
        type: String,
        required: true
    },
    Rpeparation_time: {
        type: Number,
        required: true
    },
    Rcook_time: {
        type: Number,
        required: true
    },
    Rserves: {
        type: Number,
        required: true
    },
    Ringredients: {
        type: Array,
        required: true
    },
    Rmethodecook: {
        type: Array,
        required: true

    },
    Rimage: {
        type: String,
        required: true
    },
    Rlike: {
        type: Number,
        default: 0
    },
    Rdislike: {
        type: Number,
        default: 0
    },
    Rcategorie: {
        type: String,
        enum: ["breakfast", "dinner", "desert"]
    }
})
const ShopSchema = new mongoose.Schema({
    Sname: {
        type: String,
        required: true
    },
    Sprice: {
        type: Number,
        required: true
    },
    Squantite: {
        type: Number,
        required: true
    },
    Simage: {
        type: String,
        required: true
    }
})

const PostSchema = new mongoose.Schema({
    Pname: {
        type: String,
        required: true
    },
    Ppeparation_time: {
        type: Number,
        required: true
    },
    Pcook_time: {
        type: Number,
        required: true
    },
    Pserves: {
        type: Number,
        required: true
    },
    Pingredients: {
        type: Array,
        required: true
    },
    Pmethodecook: {
        type: Array,
        required: true

    },
    Pimage: {
        type: String,
        required: true
    },
    Pcategorie: {
        type: String,
        enum: ["breakfast", "dinner", "desert"]
    }
})
const User = mongoose.model('User', UserSchema);
const Admin = mongoose.model('Admin', AdminSchema);
const Recipe = mongoose.model('Recipe', RecipeSchema);
const Post = mongoose.model('Post', PostSchema);
const Shop = mongoose.model('Shop', ShopSchema);
module.exports = { User, Admin, Recipe, Post, Shop }