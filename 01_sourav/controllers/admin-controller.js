const User = require('../models/user_model') ;
const Contact = require('../models/contact_model') ;

// ****** All User Fetch Logic ******
const getAllUsers = async(req, res) => {
    try{
        const users = await User.find().select({password: 0}) ;

        if(!users || users.length === 0) {
            return res.status(404).json({message: "No users found"}) ;
        }

        return res.status(200).json(users) ;
    }
    catch(error) {
        next(error) ;
    }
}


// ************ All Contact Fetch Logic ************
const getAllContacts = async(req, res) => {
    try{
        const contacts = await Contact.find() ;

        if(!contacts || contacts.length === 0) {
            return res.status(404).json({message: "No Messages found"}) ;
        }

        return res.status(200).json(contacts) ;
    }
    catch(error){
        next(error) ;
    }
}


// ************ Delete Logic ************
const deleteUserById = async(req, res) => {
    try {
        const id = req.params.id ; // I get this 'ID' from URL
        await User.deleteOne({_id: id}) ;
        return res.status(200).json("User deleted successfully") ;
    }
    catch(error){
        next(error) ;
    }
}
 
// ************ Single User Fetch Logic ************
const getUserByID = async(req, res)=> {
    try{
        const id = req.params.id ;
        const userData = await User.findOne({_id : id}).select({password:0}) ;
        return res.status(200).json(userData) ;
    }
    catch(error){
        next(error) ;
    }
}

// *********** Single User Update Logic ***********
const updateUserByID = async(req, res) => {
    try{
        const id = req.params.id ;
        const updateUserData = req.body ;

        const currUpdatedUser = await User.updateOne({_id: id}, {$set: updateUserData}) ;
        return res.status(200).json(currUpdatedUser) ;
    }
    catch(error){
        next(error) ;
    }
}

module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserByID, updateUserByID} ;