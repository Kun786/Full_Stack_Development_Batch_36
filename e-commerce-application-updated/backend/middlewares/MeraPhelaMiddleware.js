const Check = (req, res, next) => {
    try {
        if(req.body !== {}){
            next();
        }else{
            res.json({
                Message:'Han tum middleare pay aa gay hoo',
                Result:req.body
            })
        }
    } catch (error) {
        res.json({
            Message:error.message,
            Result:null
        })
    }
}

module.exports = {
    Check
}