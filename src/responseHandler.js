const getErrorStatus = require('./errorData');
function findErrorMessage(status) {
    return (
        getErrorStatus.ERROR_STATUS_ARRAY.find((v) => v.status == status) || {
            error: 'Error.',
        }
    );
}

let successResponse = (status, succMessage, data) => {
    return {
        status,
        message: succMessage,
        data,
    };
};

let errorResponse = (statusCode) => {
    return findErrorMessage(statusCode);
};

module.exports = {
    successResponse,
    errorResponse
};