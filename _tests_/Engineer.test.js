const { expect } = require('@jest/globals')
const Engineer = require('../lib/Engineer')
test('checkingEngineer', function () {
    const myEngineer = new Engineer()
    expect((typeof(myEngineer))).toBe('object') // error
})
test('checkingEngineerName', function () {
    const myEngineer = new Engineer('Eugene')
    expect((myEngineer.name)).toBe('Eugene')
})
test('checkingEngineerId', function () {
    const myEngineer = new Engineer('Eugene', 100)
    expect((myEngineer.id)).toBe(100)
})
test('checkingEngineerEmail', function () {
    const myEngineer = new Engineer("Eugene", 100, 'Eugene@gmail.com')
    expect((myEngineer.email)).toBe('Eugene@gmail.com')
})
test('checkingEngineerNameFunction', function () {
    const myEngineer = new Engineer("Eugene", 100, 'Eugene@gmail.com')
    expect((myEngineer.getName())).toBe('Eugene')
})
test('checkingEngineerIdFunction', function () {
    const myEngineer = new Engineer("Eugene", 100, 'Eugene@gmail.com')
    expect((myEngineer.getId())).toBe(100) // error here
})
test('checkingEngineerEmailFunction', function () {
    const myEngineer = new Engineer("Eugene", 100, 'Eugene@gmail.com')
    expect((myEngineer.getEmail())).toBe('Eugene@gmail.com')
})
test('checkingEngineerRoleFunction', function () {
    const myEngineer = new Engineer("Eugene", 100, 'Eugene@gmail.com')
    expect((myEngineer.getRole())).toBe('Engineer')
})
test('checkingEngineerGithubFunction', function () {
    const myEngineer = new Engineer("Eugene", 100, 'Eugene@gmail.com','eisforgene')
    expect((myEngineer.getGithub())).toBe('eisforgene')
})