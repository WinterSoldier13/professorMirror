
var express = require("express");
const { route } = require("./auth");
const { constant } = require("lodash");
const { expandProfessor, getAllProfessors, addProfessor, editRating } = require("../controllers/professorController");
var router = express.Router();


router.get('/professor/:professorId',expandProfessor);
router.get('/allProfs/:instituteName/:departmentName',getAllProfessors);
router.put('/addProfessor', addProfessor);
router.put('/giveRating/:professorId',editRating );


module.exports = router;