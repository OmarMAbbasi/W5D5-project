const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function absurdBubbleSort(arr, sortCompletionCallback) {
  outerBubbleSortLoop(true)

  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, i=0, madeAnySwaps = false, outerBubbleSortLoop)
    } else {
      sortCompletionCallback(arr)
      
    }
  }
}

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}: `, (res) => {
    if (res === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
  
  
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], comparisonHelper)
  } else if (i === arr.length-1) {
    outerBubbleSortLoop(madeAnySwaps)
  }
  function comparisonHelper(isGreaterThan) {
    if (isGreaterThan) {
      [arr[i] , arr[i+1]] = [arr[i+1], arr[i]];
      madeAnySwaps = true;
    }
    innerBubbleSortLoop(arr, (i+1), madeAnySwaps, outerBubbleSortLoop);
  };
  
};

absurdBubbleSort([5,6,1,3,2], (arr) => {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});


// askIfGreaterThan(1, 2, p => {console.log(p)});

// reader.close();
