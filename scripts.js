<<<<<<< HEAD
//scripts.js - jak używać "self"?

function Button(text){
    this.text = text || 'Hello';
}

Button.prototype = {
    create: function() {
        var self = this;
        this.$element = $('<button>'); // tworzy button (bez tekstu)
        this.$element.text(this.text); // dodaje tekst (zawartość) do buttona
        this.$element.click(function() { // odpowiada za wyświetlenie alertu po kliku
            alert(self.text);
        });
        // this.$element.appendTo($('body')); // wybieramy element i przypinamy go do body
        $('body').append(this.$element); // wybieramy body i przypinamy do niego element,
    }
}

var btn1 = new Button('Hello!');
btn1.create();


// Zgubiony kontekst - this wskaże na obiekt Window, który nie ma właściwości name.

// var person = {
// 	name: "Jan",
// 	sayHello: function() {
// 		console.log("Hello "  + this.name + "!");
//     }
// }
// var hello = person.sayHello;

// Zapobiegamy gubieniu kontenstu: W funkcji sayHello tworzymy zmienną, która będzie trzymać prawidłowy kontekst, na który wskazuje this (obiekt person). W efekcie za każdym razem, kiedy odwołujemy się do zmiennej self, mamy dostęp do właściwego kontekstu i wszystko działa tak, jak powinno.
// var person = {
// 	name: 'Jan',
// 	sayHello: function() {
//     var self = this;
// 	setTimeout(function(){
// 		console.log('Hello '  + self.name + '!');
//         }, 1000)
//     }
// };
// person.sayHello() // Hello Jan!
=======
//scripts.js

function Phone(brand, price, color, rating, size) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.rating = rating;
	this.size = size;
	this.printInfo = function() {
		console.log("This phone's model is called " + this.brand + " costs " + this.price + " and is available in  " + this.color + " version" + " and " + this.size + " size. " + "I would say it is " + this.rating);
	};
};

var iPhone = new Phone("iPhone 1", " 1$", "black", "5/10", "medium");
var Galaxy = new Phone("Galaxy 2", " 2$", "white", "6/10", "small");
var OnePlus = new Phone("One Plus 3", " 3$", "gold", "7/10", "large");
var LG = new Phone ("LG Something", " 4$", "violet", "8/10", "extra large");
var Nokia = new Phone ("Nokia", "5$", "yellow", "9/10", "extra small");

iPhone.printInfo() 
Galaxy.printInfo() 
OnePlus.printInfo() 
LG.printInfo()
Nokia.printInfo()  
>>>>>>> 16583d9329ea98fb6d90d33876f75c808478a483
