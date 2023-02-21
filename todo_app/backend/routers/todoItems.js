const router = require('express').Router();

// import todo model
const todoItemsModel = require('../models/todoitems');

//lets create our first route
router.post('/api/item', async(req,res)=>{
    try{
        const newItem = new todoItemsModel({
            item: res.body.item
        })
        //save this item
        const saveItem = await newItem.save()
        res.status(200).json('Item Added Successfully.')
    }catch(err){
        res.json(err);
    }
})
//export router
module.exports = router;