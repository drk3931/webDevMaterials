const candidateFilter = require('./candidateFilter');
const mongoose = require('mongoose');
const userGenerator = require('./userGenerator');
const User = require('./userModel');

/*
Check if the user set is empty
*/
User.find({}).then(
    (res)=>
    {
        if(res.length == 0)
        {
            console.log("DETECTED EMPTY USER SET. GENERATING RANDOM USERS");
            userGenerator.populateUsers(420);

        }
        else{
            console.log("User set exists.");
        }
    },
    (err)=>
    {
        console.log("ERROR RETRIEVING USERS");
    }
);




module.exports = function(playgroundApp)
{


    
    playgroundApp.post("/candidateFilter",
        (req,res)=>
        {

            candidateFilter(req.body.searchSkills).then(
                (success)=>
                {
                    
                    res.status(200).json(
                        success
                    );
                },
                (err)=>
                {
                    res.status(400).json(
                        err
                    );
                }

            )
           
        }
    );




}