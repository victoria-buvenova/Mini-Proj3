const DBServices = require('../services/charactersService');
const middleware  = require('../middleware/api')

const getCharactersData = async (req,res)=>{
    console.log("controller here")

    let data = await middleware.fetchCharactersData(req,res) //this gets the third party data
    // console.log(data)
    DBServices.dbLoadCharactersData(data) //load it into our db
    res.send("Sucessfully fetched characters data from thirdpartyapi and then loaded it into mysql DB.")

}

const getCharacterById = async (req,res)=>{
    let data = await DBServices.dbGetOneCharacterById(req,res)
    console.log(data)
    res.send(data)

}

// const getData = async (req,res)=>{
//     console.log("controller here")

//     let data = await DBServices.getAllStudents(res)
//     console.log(data)
//     res.send(data)

// }


const updateWizardByHouse = async (req,res)=>{
    console.log("controller here")

    let data = await DBServices.dbUpdateWizardByHouse(req,res)
    console.log(data)
    res.send(data)

}

// const updateByIdAndName = async (req,res)=>{
//     console.log("controller here")

//     let data = await DBServices.dbUpdateByIdAndName(req,res)
//     console.log(data)
//     res.send(data)

// }

const updateWizardByPatronus = async (req,res)=>{
    console.log("controller here")

    let data = await DBServices.dbUpdateWizardByPatronus(req,res)
    // console.log(data)
    res.send(data)

}

const deleteWizardById = async (req, res) => {
    console.log("controller here")
    let data = await DBServices.dbDeleteWizardById(req, res)
    console.log(data);
    res.send(data)
}



const insertNewWizard = async (req,res)=>{
    console.log("controller here")

    let data = await DBServices.dbInsertNewWizard(req,res)
    console.log(data)
    res.send(data)

}

// const revertWizardByWand = async (req, res) => {
//     console.log("controller here")
//     let data = await DBServices.dbRevertWizardByWand(req, res)
//     console.log(data);
//     res.send(data)
// }

// const commitChanges = async (req, res) => {
//     console.log("controller here")
//     let data = await DBServices.dbCommitQuery(req, res)
//     console.log(data);
//     res.send(data)
// }
// const deleteWizardByPatronus = async (req,res)=>{
//     console.log("controller here")

//     let data = await middleware.fetchCharactersData(req,res) //this gets the third party data
//     // console.log(data)
//     DBServices.dbDeleteWizardByPatronus(data) //load it into our db
//     res.send("Sucessfully fetched characters data from thirdpartyapi and then loaded it into mysql DB.")

// }

module.exports = {
    getCharactersData,
    getCharacterById,
    // getData,
    // updateByIdAndName,
    updateWizardByHouse,
    updateWizardByPatronus,
    deleteWizardById,
    insertNewWizard
    // revertWizardByWand,
    // commitChanges
}