module.exports = function generatePassword() {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';

    while (!regex.test(password)) {
        password = '';
        for (let i = 0; i < 8; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    }

    return password;
}