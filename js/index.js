// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }

// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }

// let i= 0;
//  while (i <= 100) {
//      console.log(i);
//      i++;
//  }
 
 
// let val = parseFloat(prompt('Enter A'));
// while (isNaN(val)) {
//     alert('Please enter a number');
//     val = parseFloat(prompt('Enter A'));  // ввод только числа от пользователя,другое не пускает
// }


// let val;
// do {
//   val = parseFloat(prompt('Enter Val')); 
// } while (isNaN(val));   //тоже только упрощенная версия


// let val;
// do {
//     alert('Please enter a number');
//     val = parseFloat(prompt('Enter Val')); 
// } while (isNaN(val));  // тоже числа плюс алерт


// let products = ['Audi R8', 'Lambo Diablo']; // масив
// products.push('Tesla Model X');//2
// products.push('Tesla Model S');//3
// products.push('Tesla Model 3');//4
// // alert(products[0]);
// products[0] = 'Ferrari LaFerrari';
// // alert(products[0]);
// products[3] = 'Chevrolet Corvette';
// console.log(products.length);
// console.log(products);
// alert(products);

// for (let i = 0; i < products.length; i++) {
//     console.log(products[i]);
// }
// products.forEach(console.log);


// products.forEach(function(element, idx){
//     console.log(idx + ' ' + element);
// });                                                          // масив



// let numbers = [];
// numbers.push(prompt('enter 1st number'));
// numbers.push(prompt('enter 2nd number'));
// numbers.push(prompt('enter 3d number'));
// numbers.push(prompt('enter 4th number'));
// numbers.push(prompt('enter 5th number'));


// alert(numbers);
// console.log(numbers);



// let nums = [];
// for (i = 0; i < 5; i++) {
//     nums.push(prompt('enter a value'));
// }
// nums.forEach( el => console.log(el) );


//пустой обект дополняем его полями
let teslaX = {};
teslaX.name = 'Tesla X';
teslaX.color = 'red';
teslaX.price = 100000;

teslaX['isAvailable'] = true;
teslaX.isAvailable = true;

teslaX.beep = function() {
    console.log(this.name + ' beep-beep!');// вместо конкретного имени исп. this
}
teslaX.beep();



//Об'єктний літерал
let tesla3 = {
    name: 'Tesla 3',
    color: 'white',
    beep: function() {
    console.log(this.name + ' beep-beep!');
 }
}

tesla3.beep();

// Функція-конструктор
function Car(name, color, price){
    this.name = name;
    this.color = color;
    this.price = price;
    this.beep = function() {
        console.log(this.name + ' beep-beep!');
    }
}


let chevy = new Car('Chevrolet Corvette', 'silver', 50000);
chevy.beep();

// class
class SuperCar {
    constructor(name, color, price){
        this.name = name;
        this.color = color;
        this.price = price;
    }
    beep() {
        console.log(this.name + ' beep-beep!');
    }
}    

let lambo = new SuperCar('Lambo Diablo', 'yellow', 500000);
lambo.beep();

// Object.create()
let lamboAve = Object.create(lambo);
lamboAve.name = 'Lambo Ave';
lambo.beep();



