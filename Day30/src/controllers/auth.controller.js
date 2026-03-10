export function register (req,res,next){
    try{
        throw new Error("registration unsuccessfull")
    }catch(err){
        err.status = 400
        next(err)
    }
    
}