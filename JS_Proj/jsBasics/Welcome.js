
// Assignment 1: Write a simple Javascript program to print "Welcome {{Your Name}} to tavisca."
const name= 'Jyoti Sharma';
GetWelcomeMessege(name);

/* function: GetWelcomeMessege
 * Argument : Name
 */
function GetWelcomeMessege(Name)
{   
    console.log('Assignment 1: Get Welcome Messege ');
    if(Name != null && Name != "" )
	{
        console.log(`Welcome ${Name} to Tavisca!`);
    }
    else
    {
        console.log('Name is blank!');
    }
}

