const generatePassword = require('generate-password');

function generateRandomPassword(){
    const password = generatePassword.generate({
        length:15,
        number:true,
        symbols:true,
        excludeSimilarCharacters:true
    });
    console.log(password);
}
generateRandomPassword();