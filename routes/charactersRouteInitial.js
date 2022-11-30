const express = require('express');
const router = express.Router();

const studentController = require('../controllers/charactersController')    //grabs the controller

router.get('/loadCharactersData' ,(req,res)=>{
    console.log("router here")
    studentController.getCharactersData(req,res)
});

router.get('/updateWizardByHouse',(req,res)=>{
    console.log("router here")
    studentController.updateWizardByHouse(req,res)
})


router.get('/updateWizardByPatronus',(req,res)=>{
    console.log("router here")
    studentController.updateWizardByPatronus(req,res)
});

router.get('/deleteWizardById', (req, res)=> {
    console.log("router here")
    studentController.deleteWizardById(req,res)
});

router.get('/insertNewWizard', (req, res)=> {
    console.log("router here")
    studentController.insertNewWizard(req,res)
});

// router.get('/revertWizardByWand', (req, res)=> {
//     console.log("router here")
//     studentController.revertWizardByWand(req,res)
// });

// router.get('/commitChanges', (req, res)=> {
//     console.log("router here")
//     studentController.commitChanges(req,res)
// });


module.exports = router;