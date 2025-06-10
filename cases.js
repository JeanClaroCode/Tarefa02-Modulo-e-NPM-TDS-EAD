const toSpaceCase = require('to-space-case');

const strings = [
    'InstitutoFederalDeBrasilia',
    'sistemas.para.internet',
    'Programacao_para_Internet-1'
];

strings.forEach(str => {
    console.log('Original:', str);
    console.log('Space Case:', toSpaceCase(str));
    console.log('---');
});
