// Raw employee data
const data = require("./data");
// Constructor function
const Employee = function (obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.profileImage = obj.profileImage;
    this.introduction = obj.introduction;
    this.profileLink = obj.profileLink;
};

// get all employee's keys
Employee.keys = Object.keys(data[0]);

// Check if it contains all the given keys
Employee.containKeys = (objKeys) => {
    const keys = Employee.keys;

    let result = true;
    objKeys.forEach((k) => {
        if (!keys.includes(k)) result = false;
    });

    return result;
};

// Creating Array of Employee
const employees = data.map((e) => new Employee(e));

// console.log(employees);

const getEmployeeOfId = (id) => {
    return employees.find((employee) => employee.id === id);
};

console.log(getEmployeeOfId("2"));

const getEmployee = (obj) => {
    const objKeys = Object.keys(obj); // get all obj's key

    // If keys does nt match
    if (!Employee.containKeys(objKeys)) return null;

    // Creating a new variable to store the resultant value
    let result = employees;

    // Iterate through all the keys and value of the objects and filter the employees
    Object.entries(obj).forEach((entry) => {
        const [key, value] = entry;

        result = result.filter((e) => e[key] === value);
    });

    return result[0];
};

// console.log(
//     findEmployee({
//         name: "Varun Athreya",
//         id: "2",
//         profileImage: "assets/images/varun.jpg",
//     })
// );

const updateEmployee = (id, obj) => {
    const objKeys = Object.keys(obj);

    if (!Employee.containKeys(objKeys)) return null;

    const employee = getEmployeeOfId(id);

    Object.entries(obj).forEach((entry) => {
        const [key, value] = entry;
        if (key == "id") {
            console.log(`Updating "${key}" is prohibited!`);
            return;
        }

        employee[key] = value;
    });

    return employee;
};

// console.log(
//     updateEmployee("2", {
//         id: 21,
//         name: "Athreya Varun",
//         profileImage: "assets/images/athreya.jpg",
//     })
// );

const deleteEmployee = (id) => {
    employees.splice(
        employees.findIndex((employee) => employee.id === id),
        1
    );
};

// deleteEmployee("2");
// console.log(getEmployeeOfId("2"));
// console.log(employees);
