// Write your solution in this file!
const employee = {
    name: "Jeff",
    streetAddress: "123 Elm St"
};

function updateEmployeeWithKeyAndValue(employee, streetAddress) {
    return {
        ...employee,
        [streetAddress]: "11 Broadway",
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress) {
    employee[streetAddress] = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, streetAddress, name) {
    const newEmployee = {...employee};
    delete newEmployee.streetAddress;
    return {
        [name]: undefined,
    }
}

function destructivelyDeleteFromEmployeeByKey(employee, streetAddress, name) {
    employee[name] = undefined;
    delete employee[streetAddress];
    const newEmployee = {...employee};
    return employee;
}