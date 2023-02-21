const router = require('express').Router();

// import todo model
const todoItemsModel = require('../models/todoitems');

//lets create our first route
router.post('/item', async(req,res)=>{
    try{
         console.log("hello");
        const newItem = new todoItemsModel({
            item: res.body.item

        })
        console.log(newItem)
        // console.log("hello");
        //save this item
        const saveItem = await newItem.save()
        res.status(200).json(saveItem)
       
    }catch(err){
        res.json(err);
    }
})
//export router
module.exports = router;