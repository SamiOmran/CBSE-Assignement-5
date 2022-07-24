const repository = require("./repository")
const reqResponse = require('./responseHandler');

// specificEmployee = async (req, res) => {
//   const response = await repository.specificEmployee(req.params.id)
//   if (!response) {
//     res.fail(reqResponse.errorResponse(400))
//   }
//   else if (response.length === 0) {
//     res.fail(reqResponse.errorResponse(404))
//   }
//   else {
//     res.success(reqResponse.successResponse(200, 'Success getting the employee.', response))
//   }
// }

specificEmployee = async (req, res) => {
  const response = await repository.specificEmployee(req.params.id)
  if (!response) {
    res.fail(reqResponse.errorResponse(400))
  }
  else if (response.length === 0) {
    res.fail(reqResponse.errorResponse(404))
  }
  else {
    res.sendStatus(reqResponse.successResponse(200, 'Success getting the employee.', response))
  }
}

allEmployees = async (req, res) => {
  const response = await repository.allEmployees(req.params.id)
  res.sendStatus(reqResponse.successResponse(200, 'Success getting all the employees.', response))
}

module.exports = {
  allEmployees,
  specificEmployee
};
