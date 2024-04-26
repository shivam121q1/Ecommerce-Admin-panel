const { Schema, model,models } = require("mongoose");

const CategorySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    parent:{
        type:Schema.Types.ObjectId,
        ref:'Category'
    }
});

const Category =  models?.Category || model('Category',CategorySchema);

export {Category};
