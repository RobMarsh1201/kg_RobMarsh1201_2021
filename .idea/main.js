
//Array that holds the phoentic value of each number at the correct position
const phoneticValue = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']

//Final string that holds all phoentic parameter equivelents
let finalPhoenticString = ''
// Read parameters and iterate, skipping first two params
for (var i = 2; i < process.argv.length; i++)
{
    //Initlaize string to be printed to console
    let workingString = ''

    //Split a string into a array of characters
    const splitNumber = process.argv[i].split('');

    for (var k = 0; k < process.argv[i].length; k++)
    {
        // March through array, using the value of each number to call the String numeral array,
        // and assign its phonetic value from its parseInt
        workingString += (phoneticValue[parseInt(splitNumber[k])]);
    }

    finalPhoenticString += workingString + ","

}

console.log(finalPhoenticString);