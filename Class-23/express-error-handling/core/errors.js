class BadRequestError extends Error{
    constructor(message = 'Bad Request') {
        super(message);
        this.status = 400;
    }
}

class InternalServerError extends Error{
    constructor(message = 'Internal Server Error') {
        super(message);
        this.status = 500;
    }
}

module.exports = {
    BadRequestError,
    InternalServerError
}