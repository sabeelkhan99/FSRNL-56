export class BadRequestError extends Error{
    constructor(message = 'Bad Request') {
        super(message);
        this.status = 400;
    }
}

export class InternalServerError extends Error{
    constructor(message = 'Internal Server Error') {
        super(message);
        this.status = 500;
    }
}

export class AuthenticationError extends Error{
    constructor(message = 'Authentication Error') {
        super(message);
        this.status = 401;
    }
}

export class AuthorizationError extends Error{
    constructor(message = 'Authorization Error') {
        super(message);
        this.status = 401;
    }
}