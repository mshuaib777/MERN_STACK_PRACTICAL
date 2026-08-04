const fruit = ['Apple','Banana','Orange'];
console.log(fruit[0]);
fruit.push('Mango');
fruit.unshift('Kiwi');
fruit.pop();
const total = fruit.length;
console.log(total);

// Object
const user = {
    name:"HET",
    age:"19",
    isAdmin:true };

console.log(user.name);
console.log(user['age']);