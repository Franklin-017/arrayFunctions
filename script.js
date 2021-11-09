const greatestOfTwoNumbers = (a, b) => {
  if( a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(greatestOfTwoNumbers(12,14));

const findScaryWord = (arr) => {
  let maxLen = 0;
  let scaryWord = '';
  for(let i=0; i<arr.length; i++) {
    if(arr[i].length > maxLen) {
      maxLen = arr[i].length;
      scaryWord = arr[i];
    }
  }
  return scaryWord;
}

const words = ['George', "Alice", 'Alex', 'John', 'Infanta', 'Xavior', 'LourdhAntony'];

console.log(findScaryWord(words));

const netPrice = (arr) => {
  let totalPrice = 0;
  arr.forEach((price) => {
    totalPrice += price;
  })
  return totalPrice;
}

const price = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110];
console.log(netPrice(price));


const sumOfArray = (arr) => {
  let total = 0;
  const newArray = add(arr);
  newArray.forEach((num) => {
    total += num;
  })
  return total;
}

const add = (arr) => {
  let newArr = [];
  arr.forEach((arr) => {
    if(typeof arr === 'string') {
      newArr.push(arr.length);
    } else if(typeof arr === 'boolean') {
      newArr.push(parseInt(Number(arr)));
    } else {
      newArr.push(parseInt(arr));
    }
  })
  return newArr;
}

const array =[63, 122, 'Audi', 61, true, 'Volvo','20','Lamborghini',38, 156];

console.log(sumOfArray(array));

// mid point


const midPointOfLevels = (arr) => {
  return sumOfArray(arr) / arr.length;
}


const levels = [22, 16, 9, 10, 7, 14, 11, 9];
console.log(midPointOfLevels(levels));

const averageWorgLength = (arr) => {
  return sumOfArray(arr) / arr.length;
}

const items = ['bread', 'jam', 'milk', 'egg', 'flour', 'oil', 'rice', 'coffee powder', 'sugar', 'salt'];
console.log(averageWorgLength(items));

const avg = (arr) => {
  return sumOfArray(arr) / arr.length;
}

console.log(avg(array));

const uniqueArray = (arr) => {
  let newArray = [...new Set(arr)];
  return newArray;
}

const things = ['bread', 'jam', 'milk', 'egg', 'flour', 'oil', 'rice', 'coffee powder', 'sugar', 'salt', 'egg', 'flour'];
console.log(uniqueArray(things));

const searchElement = (arr, word) => {
  return arr.includes(word);
}

console.log(searchElement(things, "milky"));

const howManyTimesElementRepeated = (arr) => {
  let count  = [];
  arr.forEach((item) => {
    count[item] = (count[item] || 0) + 1;
  })
  return count;
}

console.log(howManyTimesElementRepeated(things));

const multiplyFourNumbers = (a, b, c, d) => {
  return a*b*c*d;
}

const maximumProduct = (arr) => {
  let maxProduct = 0;
  for(let i =0; i< arr.length; i++) {
    for(let j = 0; j<arr.length; j++) {
      if((j-3) >= 0) {
        let product1 = multiplyFourNumbers(arr[i][j], arr[i][j-1], arr[i][j-2], arr[i][j-3]);
        if(product1 > maxProduct) {
          maxProduct = product1;
        }
      } 
      if((i-3) >= 0) {
        let product2 = multiplyFourNumbers(arr[i][j], arr[i-1][j], arr[i-2][j], arr[i-3][j]);
        if(product2 > maxProduct) {
          maxProduct = product2;
        }
      }
    }
  }
  return maxProduct;
}

const matrix = [[1,2,3,4,5],
                [1,25,3,4,5],
                [1,20,3,4,5],
                [1,20,3,4,5],
                [1,4,3,4,5]
              ];

console.log(maximumProduct(matrix));

const maximunProductOfDiagonal = (arr) => {
  let maxProduct = 0;
  for(let i =0; i< arr.length; i++) {
    for(let j = 0; j<arr.length; j++) {
      if((j-3) >= 0 && (i-3) >= 0) {
        let product1 = multiplyFourNumbers(arr[i][j], arr[i-1][j-1], arr[i-2][j-2], arr[i-3][j-3]);
        if(product1 > maxProduct) {
          maxProduct = product1;
        }
      } 
      if((i-3) >= 0 && (j-1) <= 0) {
        let product2 = multiplyFourNumbers(arr[i][j], arr[i-1][j+1], arr[i-2][j+2], arr[i-3][j+3]);
        if(product2 > maxProduct) {
          maxProduct = product2;
        }
      }
    }
  }
  return maxProduct;
}

console.log(maximunProductOfDiagonal(matrix));

