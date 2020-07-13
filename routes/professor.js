
var express = require("express");
const { route } = require("./auth");
const { constant } = require("lodash");
const { expandProfessor, getAllProfessors, addProfessor } = require("../controllers/professorController");
var router = express.Router();


router.get('/professor/:professorId',expandProfessor)
router.get('/allProfs/:instituteName',getAllProfessors)
router.post('/addProfessor', addProfessor)


module.exports = router;