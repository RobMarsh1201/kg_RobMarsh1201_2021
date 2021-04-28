var phoenetic_numeral_values = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']

// Read parameters and iterate, skipping first two params
for (var i = 2; i < process.argv.length; i++)
{
    console.log(process.argv[i])
}