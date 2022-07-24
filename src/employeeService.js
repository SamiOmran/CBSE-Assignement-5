const employeeRepository = require("./employeeRepository")

dashboard = async () => {
  return await employeeRepository.dashboard();
};

specificEmployee = async (id) => {
  return await employeeRepository.specificEmployee(id); 
} 

module.exports = {
  dashboard,
  specificEmployee
};
