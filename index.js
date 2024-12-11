import inquirer from 'inquirer';
var questions=
inquirer
  .prompt([
    /* Pass your questions in here */
    console.log("Can you generate omne qr image")
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("yes") 
  })
  .catch((error) => {
    if (error.isTtyError) {
      console,log("couldn't be rendered in the current environment")
    } else {
      console.log("Something else went wrong");
    }
  });