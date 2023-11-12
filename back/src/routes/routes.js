const {Router} = require('express');
const getCharacterById = require('../controllers/getCharacterById');
const loginController = require("../controllers/loginController")
const postUser = require("../controllers/postUser");
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');

const router = Router();

router.get('/character/:id', getCharacterById)

router.post("/login", postUser)
router.get("/login", loginController)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports = router