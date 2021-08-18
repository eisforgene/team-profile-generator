const { expect } = require('@jest/globals')
const Intern = require('../lib/Intern')
test('checkingIntern', function () {
    const myIntern = new Intern()
    expect((typeof(myIntern))).toBe('object') // error
})
test('checkingInternName', function () {
    const myIntern = new Intern('Eugene')
    expect((myIntern.name)).toBe('Eugene')
})
test('checkingInternId', function () {
    const myIntern = new Intern('Eugene', 100)
    expect((myIntern.id)).toBe(100)
})
test('checkingInternEmail', function () {
    const myIntern = new Intern("Eugene", 100, 'Eugene@gmail.com')
    expect((myIntern.email)).toBe('Eugene@gmail.com')
})
test('checkingInternNameFunction', function () {
    const myIntern = new Intern("Eugene", 100, 'Eugene@gmail.com')
    expect((myIntern.getName())).toBe('Eugene')
})
test('checkingInternIdFunction', function () {
    const myIntern = new Intern("Eugene", 100, 'Eugene@gmail.com')
    expect((myIntern.getId())).toBe(100) // error here
})
test('checkingInternEmailFunction', function () {
    const myIntern = new Intern("Eugene", 100, 'Eugene@gmail.com')
    expect((myIntern.getEmail())).toBe('Eugene@gmail.com')
})
test('checkingInternRoleFunction', function () {
    const myIntern = new Intern("Eugene", 100, 'Eugene@gmail.com')
    expect((myIntern.getRole())).toBe('Intern')
})
test('checkingInternSchoolFunction', function () {
    const myIntern = new Intern("Eugene", 100, 'Eugene@gmail.com','ucla')
    expect((myIntern.getSchool())).toBe('ucla')
})

