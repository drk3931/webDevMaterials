var User = require('./userModel');
var mongoose = require('mongoose');


//including User implies that the userModel.js script has been run and the schema is loaded in the
//database. 



function getRandomSkills(numSkills)
{
    let skills = [
        'html',
        'css',
        'javascript',
        'jquery',
        'clojure',
        'php',
        'lisp',
        'haskell',
        'business intelligence',
        'c++',
        'perl',
        'nodejs'
    ];

    //TODO add asserts 
    //assert(numSkills < skills.length);
    const randomSkillSet = new Set();
    while(randomSkillSet.size < numSkills)
    {   
 
        randomSkillSet.add(
            skills[
                Math.floor(Math.random() * skills.length)
            ]
        );
    }

    return Array.from(randomSkillSet);


    


}

 function removeAllUsers() {

    return mongoose.connection.db.dropCollection('users').then(

        (success) => {

            console.log("Successfully removed all users");

        },
        (err)=>{
            console.log("Failed to remove all users");

        }
    );
    

}



//remember .thens can be chained...


async function populateusers(numUsers) {

    await removeAllUsers();

    for (let i = 0; i < numUsers; i++) {
        let ithEmail = i + "@gmail.com";
        let ithUser = new User(
            {
                email: ithEmail,
                skills: getRandomSkills(3)
            }
        );

        /*
            wait for the promise to complete before continuing the loop
            if success, log user, else catch rejection. 
            If this isnt done the user wont save successfully
        */


        await ithUser.save().then(
                (success)=>{
                    console.log("saved user " + ithEmail);
                },
                (err)=>
                {
                    console.log(err);
                }
        );
       

    }

}

module.exports = populateusers;