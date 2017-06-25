//scripts.js

function Phone(brand, price, color, rating, size, percent) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.rating = rating;
	this.size = size;
	this.percent = percent; 
	this.printInfo = function() {
		console.log("This phone's model is called " + this.brand + " costs " + this.price + " and is available in  " + this.color + " version" + " and " + this.size + " size. " + "I would say it is " + this.rating);
	};
	
	
	this.applyDiscount = function() {
        console.log(this.brand + " goes with " + this.percent + " discount")
	};
};

var iPhone = new Phone("iPhone 1", " 1$", "black", "5/10", "medium", "1%");
var Galaxy = new Phone("Galaxy 2", " 2$", "white", "6/10", "small", "1%");
var OnePlus = new Phone("One Plus 3", " 3$", "gold", "7/10", "large", "1%");
var LG = new Phone ("LG Something", " 4$", "violet", "8/10", "extra large", "1%");
var Nokia = new Phone ("Nokia", "5$", "yellow", "9/10", "extra small", "1%");

iPhone.printInfo();
Galaxy.printInfo(); 
OnePlus.printInfo(); 
LG.printInfo();
Nokia.printInfo(); 

iPhone.applyDiscount(); 
Galaxy.applyDiscount();