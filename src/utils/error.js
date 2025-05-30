export class ValidationError extends Error{
    constructor(status,message){
        super()
        this.name = "ValidationError"
        this.status = status 
        this.message = message
    }
}

export class InternalServerError extends Error{
    constructor(status,message){
        super()
        this.name = "InternalServerError"
        this.status = status 
        this.message = message
    }
}
export class NotFoundError extends Error{
    constructor(status,message){
        super()
        this.name = "NotFoundError"
        this.status = status 
        this.message = message
    }
}

export class ForbiddenError extends Error{
    constructor(status,message){
        super()
        this.name = "ForbiddenError"
        this.status = status 
        this.message = message
    }
}
export class CustomError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.name = "CustomError";
  }
}
