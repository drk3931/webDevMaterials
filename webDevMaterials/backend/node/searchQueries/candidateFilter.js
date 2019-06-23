var mongoose = require('mongoose');
var User = require('./userModel');


module.exports = async function(skills)
{

    
    
    let lowerCaseSkills = skills.map(
        (sk)=>
        {
            /*
            remember that omitting the brackets{} will cause sk.toLowerCase() to automatically be returned,
            using brackets mean we have to do it by manually. 
            */
            return sk.toLowerCase();
        }
    )

    console.log(lowerCaseSkills);

    
    

    /*
        Use $all to find people with exactly these tags
        yse $in to find people with any amount of those tags (1,2, or 3)
    */

    return await User.find({

        skills: {$all:lowerCaseSkills}

    })
    .then(
        (success)=>{

            console.log("Got users with skill criteria");
            return success;
        },
        (err)=>
        {
            console.log("Failed to get users with skill criteria");
            return err;

        }
    );

}