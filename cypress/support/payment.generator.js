const { faker } = require('@faker-js/faker');

    function generatePaymentCreds() {
        const creditCards = ['378282246310005', '371449635398431', '378734493671000',
        '5610591081018250', '30569309025904', '38520000023237', '6011111111111117'];

        const randomCard = Math.floor(Math.random() * creditCards.length);

        const creditCard = creditCards[randomCard];
        const expiration = '0223';
        const cvv = faker.finance.creditCardCVV();
        const zipCode = faker.address.zipCode().replaceAll('-', '');
    
        return {creditCard, expiration, cvv, zipCode};
    }

    module.exports = { generatePaymentCreds }
