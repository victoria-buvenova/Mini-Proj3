const express = require('express');
const router = express.Router();

const studentController = require('../controllers/charactersController')    //grabs the controller

router.get('/loadCharactersData' ,(req,res)=>{
    studentController.getCharactersData(req,res)
});

// router.get('/all',(req,res)=>{
//     console.log("router here")
//     studentController.getData(req,res)
// })

router.get('/loadCharacterById' ,(req,res)=>{
    studentController.getCharacterById(req,res)
});

router.get('/updateWizardByHouse',(req,res)=>{
    studentController.updateWizardByHouse(req,res)
})

// router.get('/updateByIdAndName',(req,res)=>{
//     studentController.updateByIdAndName(req,res)
// })


router.get('/updateWizardByPatronus',(req,res)=>{
    studentController.updateWizardByPatronus(req,res)
});

router.get('/deleteWizardById', (req, res)=> {
    studentController.deleteWizardById(req,res)
});

router.get('/insertNewWizard', (req, res)=> {
    studentController.insertNewWizard(req,res)
});


module.exports = router;