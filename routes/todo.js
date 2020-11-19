const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/USER');
const TODO = require('../models/TODO');


// @ /todo
// post -- to post a todo/create a todo

router.post('/',auth, async (req,res)=>{
    const {todo,deadline} = req.body;
    try {
        if (!todo) return res.status(400).json([{msg:'todo cant be empty'}]);
        let Todo = await TODO.findOne({user:req.user.id});
        if(!Todo){
           Todo = new TODO({
               user : req.user.id
          }
          )
        }
        if(deadline){
        const newtodo = {
            todo,
            deadline
        }
        Todo.todos.unshift(newtodo);
    } if(!deadline){
        const newtodo ={
            todo
        }
        Todo.todos.unshift(newtodo);
    }

    await Todo.save();
    
   return res.status(200).json(Todo)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('ServerError');
    }
    
})

module.exports = router;

router.get('/',auth,async(req,res)=>{
    try {
        const todo = await TODO.findOne({user:req.user.id});
        if(!todo) return res.status(400).json({msg:'No todos,create one->'});
        const array= todo.todos;
        res.status(200).json(array)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('ServerError');
    }
});

