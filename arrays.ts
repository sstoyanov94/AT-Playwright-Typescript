// arrays declaration

let stringArray: string[] = ["hello","Apple"];
let numbersArray: number[] = [1,2,3,4];
let mixedArray: (string | number)[] = [1,"hello",2,"hey"];

//access element by index
stringArray[0];
stringArray[1];
mixedArray[2];


//acces array length

numbersArray.length;

// method map
let multiplynums = numbersArray.map((num: number) => num * 2);
let mapNames = stringArray.map((currName: string) => `Hello ${currName}`)
let checkTypeOf = mixedArray.map((element: number | string) => {
    if(typeof element === "number") {
        return element + 5;
    } else {
        return `Welcome ${element}`
    }
})
console.log(checkTypeOf);

let stringsArray: string[] = ["Dog", "Cat", "Rat", "Snake"];
let arrayPop = stringsArray.push("Elephant");
console.log(stringsArray);

let numberArray: number[] = [20,30,40,50,60];
numberArray.shift();
console.log(numberArray);

let arrayMap = numbersArray.map((num: number) => num / 2);
console.log(arrayMap);

let numArray: number[] = [3, 7, 1, 9 ,12, 4];
let arrayFilter = numArray.filter(num => num > 5);
console.log(arrayFilter);

let anotherNumArray = [9, 3, 7, 2, 8, 5];
let arraySort = anotherNumArray.sort((a: number, b: number) => a - b);
console.log(arraySort);

let anotherStingArray: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let arraySlice = anotherStingArray.slice(0,3);
console.log(arraySlice);

let anotherStringsArray: string[] = ['car', 'bike', 'bus', 'train','boat'];
anotherStringsArray.splice(1,2);
console.log(anotherStringsArray);

function findLargest(num1: number,num2: number,num3: number):number {
    if (num1 > num2 && num1 > num3){
        return num1
    }else if(num2 > num1 && num2 > num3){
        return num2
    }else{
        return num3
    }
}
console.log(findLargest(10, 50, 30));

function convertToCentimeters(inches: number = 50): number{
    let inchesToCm = inches * 2.54
    return inchesToCm
}
console.log(convertToCentimeters());
console.log(convertToCentimeters(10));

function calculateArea(width: number, height?: number): number{
 if(height === undefined){
    height = width
 }
  return width * height  
 }
 console.log(calculateArea(5));
 console.log(calculateArea(10,20));
 
