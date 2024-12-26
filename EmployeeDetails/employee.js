const employees = [
    {
        id: 1,
        name: "Ajith Kumar",
        age: 30,
        gender:"Male",
        city:"Chennai",
        position: "Software Engineer",
        department: "IT",
        salary: 70000,
    },
    {
        id: 2,
        name: "Delaxana Ranjith",
        age: 45,
        gender:"Female",
        city:"Bangalore",
        position: "Project Manager",
        department: "Management",
        salary: 90000,
    },
    {
        id: 3,
        name: "Uma Gnanavel",
        age: 22,
        gender:"Female",
        city:"Chennai",
        position: "Software Engineer",
        department: "IT",
        salary: 25000,
    },
    {
        id: 4,
        name: "David Bravo",
        age: 35,
        gender:"Male",
        city:"Madurai",
        position: "DevOps Engineer",
        department: "IT",
        salary: 75000,
    },
    {
        id: 5,
        name: "Karthik Selvan",
        age: 32,
        gender:"Male",
        city:"Bangalore",
        position: "HR Specialist",
        department: "Human Resources",
        salary: 60000,
    },
];

function getMaleEmployees(employees){
    return employees.filter((emp)=> emp.gender === "Male")
}

function getFemaleEmployees(employees){
    return employees.filter((emp)=> emp.gender === "Female")
}
function getEmployeesByGender(gender="male"){
    gender=gender.toLowerCase()
    if(gender=="male"){
        return getMaleEmployees(employees)
    }
    else{
        return getFemaleEmployees(employees)
    }
}
let maleEmployees=getMaleEmployees(employees)
let femaleEmployees=getFemaleEmployees(employees)
let employeesInGender=getEmployeesByGender("female")
// console.log("Male Employees:",maleEmployees)
// console.log("Female Employees:",femaleEmployees)
console.log(employeesInGender)