export default  class ApiError extends Error{
    message: string;
    statusCode:number
    constructor(message:string,statusCode:number){
        super()
        this.message=message
        this.statusCode=statusCode
    }

static BadRequest(message:string,){
return new ApiError(message,404)
}

static InternalError(message:string,){
    return new ApiError(message,500)
    }

 static Forbiden(message:string,){
        return new ApiError(message,403)
        }
}

