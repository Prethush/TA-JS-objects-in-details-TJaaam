## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: 'John',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};

let user2 = {
  username: 'Arya',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};
let user3 = {
  username: 'Bran',
};

function MainUser() {
  this.username = 'Tyrion';
  this.sayHello = function sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // `Hello John` implicit binding we are accessing the function using an object so this keyword will point to that object
console.log(user2.sayHello()); // `Hello Arya` implicit binding we are accessing the function using an object so this keyword will point to that object
console.log(user.sayHello.call(user2)); // `Hello Arya` explicit binding call method will reset the this keyword to point user2 object
console.log(user.sayHello.call(user2, 'Hey')); // `Hey Arya` explicit binding call method will reset the this keyword to point user2 object and we can pass parameter to the function using call method
console.log(user.sayHello.apply(user2, ['Hey'])); // `Hey Arya` explicit binding apply method will reset the this keyword to point user2 object and we can pass parameter to the function using apply method in an array
console.log(typeof user.sayHello.bind(user2)); // function bind method will return a function reference
console.log(user.sayHello.bind(user2)()); // `Hello Arya` explicit binding bind method will return a function reference and the this keyword in that function reference will point to object which bind method is passing
console.log(userSayHello()); // `Hello undefined` defaultbinding we are calling a function without using any object so this keyword will point to window object
console.log(typeof userSayHello.bind(user2)); // function bind method will return a function reference
console.log(userSayHello.bind(user2)()); // `Hello Arya` explicit binding bind method will return a function reference and the this keyword in that function reference will point to object which bind method is passing
console.log(user3.sayHello()); // error sayHello is not a function because in object3 there is no method called sayHello
console.log(userSayHello.apply(user3)); // `Hello Bran` explicit binding apply method will reset the this keyword to point user3 object and we can pass parameter to the function using apply method in an array
console.log(userSayHello.call(user3)); // `Hello Bran` explicit binding call method will reset the this keyword to point user3 
console.log(typeof new MainUser()); // object new keyword will create a new object
console.log(typeof new MainUser()); // object new keyword will create a new object
console.log(new MainUser().sayHello()); // `Hello Tyrion` new binding when we create an object using a constructor the this keyword inside the function will point to the newly created object
console.log(new MainUser().sayHello.call(user2)); // `Hello Arya` explicit binding call method will reset the this keyword to point user2 object and we can pass parameter to the function using call method
console.log(new MainUser().sayHello.call(user)); // `Hello John` explicit binding call method will reset the this keyword to point user object and we can pass parameter to the function using call method
console.log(
  new MainUser().sayHello.apply(user, ['Welcome!'])
); // `Welcome! John` explicit binding apply method will reset the this keyword to point user object and we can pass parameter to the function using apply method in an array
```
