

const errorHandle = (error, req, res, next) => {
    console.log(error);
    const errorStatus = error.status || 500;
    const errorMessage = error.message || 'unknown error';

    return res.status( errorStatus ).json({
        message : errorMessage,
        status : errorStatus,
        stack : error.stack
    })
}

export default errorHandle;
