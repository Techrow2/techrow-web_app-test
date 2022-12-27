const { faker } = require('@faker-js/faker');

    function generateUser() {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = firstName + '_' + lastName + '@qa.team';
        const password = faker.internet.password();
        const schoolCode = 'TECHROW';
    
        return {firstName, lastName, email, password, schoolCode};
    }
    
    module.exports = { generateUser };
