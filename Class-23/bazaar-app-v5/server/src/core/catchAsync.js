
/*
    @params: callback - It is a async function
*/

function catchAsync(callback) {
    return (req, res, next) => {
        callback(req, res, next) // this will return a promise
            .catch((err) => {
                next(err);
        })
    
    }
}

export default catchAsync;