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
    unique: true,
  },
  Uemail: {
    type: String,
    unique: true,
  },
  Upassword: {
    type: String,
  },
  Uimage: {
    type: String,
    default:''
  },
  admin:{
    type:Boolean,
    default:false
  }
});
// const AdminSchema = new mongoose.Schema({
//     Aname: {
//         type: String
//     },
//     Apassword: {
//         type: String
//     },
//     Aemail: {
//         type: String
//     }
// })

const RecipeSchema = new mongoose.Schema({
    Rname: {
        type: String
    },
    Rpeparation_time: {

        type: String,
        required: true
    },
    Rcook_time: {
        type: String,
        required: true

       
    },
   
    Rserves: {
        type: Number
    },
    Ringredients: {
        type: Array
    },
    Rmethodecook: {
        type: Array

    },
    Rimage: {
        type: String
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
        enum: ["breakfast", "dinner", "dessert"]
    }
})
const ShopSchema = new mongoose.Schema({
    Sname: {
        type: String
    },
    Sprice: {
        type: Number
    },
    Simage: {
        type: String
    }
})

const PostSchema = new mongoose.Schema({
    Pname: {
        type: String
    },
    Ppeparation_time: {
        type: Number
    },
    Pcook_time: {
        type: Number
    },
    Pserves: {
        type: Number
    },
    Pingredients: {
        type: Array
    },
    Pmethodecook: {
        type: Array

    },
    Pimage: {
        type: String
    },
    Pcategorie: {
        type: String,
        enum: ["breakfast", "dinner", "desert"]
    }
})
const User = mongoose.model('User', UserSchema);
// const Admin = mongoose.model('Admin', AdminSchema);
const Recipe = mongoose.model('Recipe', RecipeSchema);
const Post = mongoose.model('Post', PostSchema);
const Shop = mongoose.model('Shop', ShopSchema);
module.exports = { User, Recipe, Post, Shop }