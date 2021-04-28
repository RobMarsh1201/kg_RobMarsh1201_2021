const phoneticValue = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']

// Read parameters and iterate, skipping first two params
for (var i = 2; i < process.argv.length; i++)
{
    //Initlaize string to be printed to console
    let numeralString = ''

    //Split a string into a array of characters
    const splitNumber = process.argv[i].split('');

    for (var k = 0; k < process.argv[i].length; k++)
    {
        // March through array, using the value of each number to call the String numeral array,
        // and assign its phonetic value from its parseInt
        numeralString += (phoneticValue[parseInt(splitNumber[k])]);
    }

    console.log(numeralString);
}