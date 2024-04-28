const asynchandler = (func) => {
    (req, res, nest) => {
        Promise.resolve(func(req, res, next)).
        catch((err) => next(err))
    }
}

export {asynchandler}

/*
const asynchandler = (fn) => async () => {
    try {
        
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}
*/