let professor = require('../models/professor');
let {isSignedIn} = require('../controllers/authController');
const { constant } = require('lodash');


exports.addProfessor = (req, res) => {

    let newEntry = new professor(req.body);
    console.log(req.body);

    var profName = req.body.name;
    var profInstitue = req.body.institute;
    var profDepartment = req.body.department;

    console.log("The person to search for is ",profName,profInstitue, profDepartment);
    

    professor.findOne({"name":profName, "institute":profInstitue,"department":profDepartment}, (err, prof)=>
    {
        if(err || !prof)
        {
            console.log("NOT FOUND");
            newEntry.save((err, prof) => {
                if(err)
                {
                    console.log("ERROR HERE");
                    return res.status(400).send(err);
                }
                else
                {
                    console.log("Written to the database");
                    return res.status(200).json(prof);
                }
            })
        }
        else
        {
            console.log("FOUND");
            id= prof._id;
            console.log("The id is", id);
            return res.status(200).json({error:"The professor is already in the database"});
        }
    })

    
      
}

exports.expandProfessor = (req,res) => 
{
    professor.findById(req.body.id, (err, prof) => {
        if(err || !prof)
        {
            return res.status(500).json({
                error: "No data found"
            })
        }
        else
        {
            return res.status(200).json(prof);
        }
    })
    
}



exports.getAllProfessors = (req, res) => 
{
    professor.find({}, (err, post) => {
        if(err || !post )
        {
            return res.status(400).json(
                {
                    error: "No post found"
                }
            )
        }
        else
        {
            return res.status(200).json(post);
        }
    })
}
