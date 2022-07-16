const helpers = {};

helpers.randomName = () => {
    const possible = 'abcdefghijklmnopqrstuvwxyz';
    let randomNumber = '';
    for (let i = 0 ; i < 10 ; i++){
        randomNumber += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return randomNumber;
}

helpers.randomUrl = () => {
    const possible = 'abcdefghijklmnopqrstuvwxyz';
    let randomUrl = '';
    for (let i = 0 ; i < 16 ; i++){
        randomUrl += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return randomUrl;
}

module.exports = helpers;