const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question('Enter a number: ', (res) => {
      let num = parseInt(res);
      sum += num;
      numsLeft--
      console.log(sum)
      addNumbers(sum, numsLeft, completionCallback)
    });

  } else {
    completionCallback(sum);
    reader.close();
  }

};

addNumbers(2, 5, sum => console.log(`Total Sum: ${sum}`));
