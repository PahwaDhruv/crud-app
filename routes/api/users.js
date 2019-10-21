const express = require("express");
const router = express.Router();

//Item Model
const User = require("../../models/User");

// @route GET api/users
// @desc Get all users
// @access Public
router.get("/", (req, res) => {
    User.find()
    .sort({id: -1})
        .then(items => res.json(items))
        
});

router.get("/:id", (req, res) =>{
    User.findById(req.params.id, function(err, user){
        res.json(user);
    });
});
// @route POST api/users
// @desc Create a user
// @access Public
router.post("/", (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        sex: req.body.sex,
        city: req.body.city
    });
    newUser.save().then(user => res.json(user));
});


// @route DELETE api/users:id
// @desc Delete a user
// @access Public
router.delete("/:id", (req, res) => {
    User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({success: true}))) 
    .catch(error => res.status(404).json({success: false}));
})

// @route PUT api/users:id
// @desc Update a user
// @access Public
router.put("/:id", (req, res) => {
    User.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
    .then(user => res.json(user))
    .catch(error => res.status(404).json({success:false}));
})
module.exports = router;