const { Mongoose } = require("mongoose")

const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    todos : [ {
        todo : {
            type : String,
            required : true
        },
        datecreated : {
            type : Date,
            default : Date.now
        }
    } 
    ],
   user : {
       type : mongoose.Schema.Types.ObjectId,
       ref : 'user',
       required : true
   },
});

module.exports = mongoose.model('todo',TodoSchema);