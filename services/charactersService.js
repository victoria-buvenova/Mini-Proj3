const sql = require("../index");


let dbLoadCharactersData = async (data)=>{
    console.log("db services here")

    return new Promise((resolve, reject) => {
      
        for (let i = 0; i < data.length; i++) {
            let id = i +1;
        
            let name = data[i].name;
            let house = data[i].house;
            let ancestry = data[i].ancestry;
            let wand = data[i].wand.core;
            let patronus = data[i].patronus;
            console.log(name);
            console.log(house);
            console.log(ancestry);
            console.log(wand);
            console.log(patronus);
            sqlQuery = `INSERT INTO Hogwarts.wizardsTable VALUES ("${id}", "${name}", "${house}", "${ancestry}", "${wand}", "${patronus}")`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(((result))));
        });
        }
    });    
}

// let getAllStudents = async (res)=>{
//     console.log("db services here")

//     return new Promise((resolve, reject) => {
//         let sqlQuery = `SELECT * FROM wizardsTable`;
        
//         sql.query(sqlQuery, (err, result, field) => {
//             if(err) return reject(err);
//             resolve(Object.values(((result))));
//         });
//     });    
// }


let dbGetOneCharacterById = async (req, res)=>{
    console.log("db services here");
    console.log(req.query);
    let id = req.query.id;
    // let whereId = req.params.whereId
    return new Promise((resolve, reject) => {
        let sqlQuery  = `SELECT * FROM Hogwarts.wizardsTable WHERE id = "${id}"`;
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(((result))));
        });
    });   
}

let dbUpdateWizardByPatronus = async (req, res)=>{
    console.log("db services here");
    console.log(req.query);
    let patronus = req.query.patronus;
    let wherePatronus = req.query.wherePatronus
    return new Promise((resolve, reject) => {
        let sqlQuery  = `UPDATE Hogwarts.wizardsTable SET patronus = "${patronus}" WHERE patronus = "${wherePatronus}"`;
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(((result))));
        });
    });   
}

let dbUpdateWizardByHouse = async (req, res)=>{
    console.log("db services here");
    console.log(req.query);
    let house = req.query.house;
    let whereHouse = req.query.whereHouse
    return new Promise((resolve, reject) => {
     let sqlQuery  = `UPDATE Hogwarts.wizardsTable SET house = "${house}" WHERE house = "${whereHouse}"`;
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(((result))));
        });
    });   
}

// let dbUpdateByIdAndName = async (req, res)=>{
//     console.log("db services here");
//     console.log(req.query);
//     let id = req.query.id;
//     let name = req.query.name;
//     // let whereName = req.query.whereName;
//     let whereId = req.query.whereId;
//     return new Promise((resolve, reject) => {
//      let sqlQuery  = `UPDATE wizardsTable SET id = "${id}", name = "${name}" WHERE id = "${whereId}"`;
//         sql.query(sqlQuery, (err, result, field) => {
//             if(err) return reject(err);
//             resolve(Object.values(((result))));
//         });
//     });   
// }

let dbDeleteWizardById = async (req, res)=>{
    console.log("db services here");
    console.log(req.query);
    let id = req.query.id;
    return new Promise((resolve, reject) => {
        let sqlQuery = `DELETE FROM Hogwarts.wizardsTable WHERE id = "${id}"`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(((result))));
        });
    });   
}

let dbInsertNewWizard = async (req, res)=>{
    console.log("db services here");
    console.log(req.query);
    let idNumber = req.query.id;
    let wizardName = req.query.name;
    let house = req.query.house;
    let ancestry = req.query.ancestry;
    let wand = req.query.wand;
    let patronus = req.query.patronus;
    return new Promise((resolve, reject) => {
        let sqlQuery = `INSERT INTO Hogwarts.wizardsTable VALUES ("${idNumber}", "${wizardName}", "${house}", "${ancestry}", "${wand}", "${patronus}")`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(((result))));
        });
    });   
}


// let dbRevertWizardByWand = async (req, res)=>{
//     console.log("db services here");
//     console.log(req.query);
//     let wand = req.query.wand;
//     return new Promise((resolve, reject) => {
//         let sqlQuery = `ROLLBACK`;
        
//         sql.query(sqlQuery, (err, result, field) => {
//             if(err) return reject(err);
//             resolve(Object.values(((result))));
//         });
//     });   
// }

// let dbCommitQuery = async (req, res)=>{
//     console.log("db services here");
//     console.log(req.query);
//     return new Promise((resolve, reject) => {
//         let sqlQuery = `COMMIT`;
        
//         sql.query(sqlQuery, (err, result, field) => {
//             if(err) return reject(err);
//             resolve(Object.values(((result))));
//         });
//     });   
// }






module.exports = { 
    dbLoadCharactersData,
    dbGetOneCharacterById,
    // getAllStudents,
    // dbUpdateByIdAndName,
    dbUpdateWizardByHouse, 
    dbUpdateWizardByPatronus,
    dbDeleteWizardById,
    dbInsertNewWizard
    // dbRevertWizardByWand,
    // dbCommitQuery
}