const {checkUser} = require("../services/usersServices")
const {User} = require('../DB_connection')


const loginController = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) return res.status(400).send('Faltan datos')
        const user = await User.findOne({ where : { email:email}})
    
        if(!user) return res.status(404).send("Usuario no encontrado")

        return user.password === password ? res.json({access:true}) : res.status(403).send("Contraseña incorrecta")
        
    } catch (error) {
        return res.status(500).send(error.message)
        
    }









//     const {email, password} = req.body
//     try {
//         const login = await checkUser(email, password)
//         res.status(200).json({login})
//     } catch (error) {
//         res.status(401).json({error : "Login inválido"})
//     }
 }

module.exports = loginController