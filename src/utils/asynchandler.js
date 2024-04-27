//const asynchandler = () => {}

export {asynchandler}

const asynchandler = (fn) => async () => {
    try {
        
    } catch (error) {
        res.status(500).send({message: error})
    }
}