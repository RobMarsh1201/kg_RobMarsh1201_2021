
//Array that holds the phoentic value of each number at the correct position
const phoneticValue = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']

//Final string that holds all phoentic parameter equivelents
let finalPhoenticString = ''

// Read parameters and iterate, skipping first two executable and filelocation parameters
for (var i = 2; i < process.argv.length; i++)
{
    //Initlaize string to hold phoeneticValues of strings
    let workingString = ''

    //Split a string into a array of characters
    const splitNumber = process.argv[i].split('');

    //Marches through array of characters, and assigns each character its phoentic value
    for (var k = 0; k < process.argv[i].length; k++)
    {
        // March through array, using the value of each number to call the String numeral array,
        // and assign its phonetic value from its parseInt, and adds the phonetic numberal to the workingString variable
        workingString += (phoneticValue[parseInt(splitNumber[k])]);
    }
    //Adds the string to the final string to be printed
    finalPhoenticString += workingString

    //Handles the comma inbetween main string. Ensures a comma will not be added to the last workingString
    if (i < process.argv.length - 1)
        finalPhoenticString += ","
}

//Prints combined string to console
console.log(finalPhoenticString);