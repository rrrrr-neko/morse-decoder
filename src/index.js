const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    expr = expr.match(/.{10}/g);
    expr.map( function(item, index) {
        if (item == '**********') expr[index] = ' ';
        else {
            let char = '';
            for (let i=0; i < item.length; i+=2) {
                switch (item.slice(i, i+2)){
                    case '10': {
                            char +='.'; 
                            break;
                            }
                    case '11': {
                            char +='-'; 
                            break;
                            }
                    case '00': {
                            break;
                            }
                }
            }
            if (char in MORSE_TABLE) {
                expr[index] = MORSE_TABLE[char];                        
           };     
        }
    });
    return expr.join('');
}

module.exports = {
    decode
}