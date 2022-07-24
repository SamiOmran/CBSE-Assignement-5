const employeeService = require("./employeeService")
const reqResponse = require('./responseHandler');

// dashboard = async (req, res, next) => {
//   try {
//     const response = await employeeService.dashboardMajor();
//     return res.success(reqResponse.successResponse(200, 'Success getting all employees!', response))
//   } catch (err) {
//     next(err)
//   }
// }

dashboard = async (req, res, next) => {
  try {
    const response = await employeeService.dashboard();
    return res.sendStatus(reqResponse.successResponse(200, 'Success getting all employees!', response))
  } catch (err) {
    next(err)
  }
}

specificEmployee = async (req, res) => {
  const response = await employeeService.specificEmployee(req.params.id)
  if (!response) {
    res.notFound(reqResponse.errorResponse(400))
  }
  else if (response.length === 0) {
    res.notFound(reqResponse.errorResponse(404))
  }
  else {
    res.sendStatus(reqResponse.successResponse(200, 'Success getting the employee', response))
  }
}  

module.exports = {
  dashboard,
  specificEmployee
};
