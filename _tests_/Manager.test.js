const { expect } = require('@jest/globals')
const Manager = require('../lib/Manager')
test('checkingManager', function () {
    const myManager = new Manager()
    expect((typeof(myManager))).toBe('object') // error
})
test('checkingManagerName', function () {
    const myManager = new Manager('Eugene')
    expect((myManager.name)).toBe('Eugene')
})
test('checkingManagerId', function () {
    const myManager = new Manager('Eugene', 100)
    expect((myManager.id)).toBe(100)
})
test('checkingManagerEmail', function () {
    const myManager = new Manager("Eugene", 100, 'Eugene@gmail.com')
    expect((myManager.email)).toBe('Eugene@gmail.com')
})
test('checkingManagerNameFunction', function () {
    const myManager = new Manager("Eugene", 100, 'Eugene@gmail.com')
    expect((myManager.getName())).toBe('Eugene')
})
test('checkingManagerIdFunction', function () {
    const myManager = new Manager("Eugene", 100, 'Eugene@gmail.com')
    expect((myManager.getId())).toBe(100) // error here
})
test('checkingManagerEmailFunction', function () {
    const myManager = new Manager("Eugene", 100, 'Eugene@gmail.com')
    expect((myManager.getEmail())).toBe('Eugene@gmail.com')
})
test('checkingManagerRoleFunction', function () {
    const myManager = new Manager("Eugene", 100, 'Eugene@gmail.com')
    expect((myManager.getRole())).toBe('Manager')
})
test('checkingManagerFunction', function () {
    const myManager = new Manager("Eugene", 100, 'Eugene@gmail.com','300')
    expect((myManager.getOfficeNumber())).toBe('300')
})
