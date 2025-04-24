const crypto = require('crypto');

const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
});

const transaction = JSON.stringify({
    from: 'alice',
    to: 'BOB',
    amount: 200,
});

// Signing the transaction
const sign = crypto.createSign('SHA256');
sign.update(transaction);
sign.end();

const signature = sign.sign(privateKey, 'hex');

console.log('Digital signature:', signature);

// Tampered transaction
const transactionTampered = JSON.stringify({
    from: 'alice',
    to: 'BOB',
    amount: 100,
});

// Verifying the tampered transaction
const verify = crypto.createVerify('SHA256');
verify.update(transactionTampered);
verify.end();

const isValid = verify.verify(publicKey, signature, 'hex');

console.log('Is the tampered signature valid?', isValid);
