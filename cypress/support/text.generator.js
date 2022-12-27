const { faker } = require('@faker-js/faker');

    function generateText() {
        const subject = faker.word.noun();
        const message = faker.lorem.paragraph();
    
        return { subject, message };
    }
    
    module.exports = { generateText };