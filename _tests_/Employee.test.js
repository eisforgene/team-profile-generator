const { expect } = require('@jest/globals')
const Employee = require('../lib/Employee')
test('checkingEmployee', function () {
    const myEmployee = new Employee()
    expect((typeof(myEmployee))).toBe('object') // error
})
test('checkingEmployeeName', function () {
    const myEmployee = new Employee('Eugene')
    expect((myEmployee.name)).toBe('Eugene')
})
test('checkingEmployeeId', function () {
    const myEmployee = new Employee('Eugene', 100)
    expect((myEmployee.id)).toBe(100)
})
test('checkingEmployeeEmail', function () {
    const myEmployee = new Employee("Eugene", 100, 'Eugene@gmail.com')
    expect((myEmployee.email)).toBe('Eugene@gmail.com')
})
test('checkingEmployeeNameFunction', function () {
    const myEmployee = new Employee("Eugene", 100, 'Eugene@gmail.com')
    expect((myEmployee.getName())).toBe('Eugene')
})
test('checkingEmployeeIdFunction', function () {
    const myEmployee = new Employee("Eugene", 100, 'Eugene@gmail.com')
    expect((myEmployee.getId())).toBe(100)
})
test('checkingEmployeeEmailFunction', function () {
    const myEmployee = new Employee("Eugene", 100, 'Eugene@gmail.com')
    expect((myEmployee.getEmail())).toBe('Eugene@gmail.com')
})
test('checkingEmployeeRoleFunction', function () {
    const myEmployee = new Employee("Eugene", 100, 'Eugene@gmail.com')
    expect((myEmployee.getRole())).toBe('Employee')
})