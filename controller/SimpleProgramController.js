SimpleProgramController = {}

SimpleProgramController.basicProgram = (req, res)=>{
    res.send(req.body)
}

module.exports = SimpleProgramController;