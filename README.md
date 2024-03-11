# JavaScript-Tutorial-for-Beginners-JS-Crash-Course-2024

https://www.youtube.com/watch?v=FtaQSdrl7YA 

https://raw.githubusercontent.com/RodrigoMvs123/JavaScript-Tutorial-for-Beginners-JS-Crash-Course-2024/main/README.md

How the web and websites work

Frontend Code: HTML + CSS + JavaScrip ( Frontend and Backend ) 

HTML
Text, image, link
Structure of webpage
No styling 

CSS
Styling of a webpage
Colors, Fonts, Positioning 

JavaScript
Upload photo
Send message
Like picture or comment 

Backend Code

“Lives” in the back ( NOT in the browser )
Makes it available to others
Keep history of messages ( data )
Save data to be available later
Can be written in different programming languages 
Python
Java
Php
Node.js

Java 
Validates the revived image
Save image ( data ) in database 

Database
Like a warehouse for data

Where do backend code and database “lives” ?
Servers

Introduction to JavaScript

What are JavaScript frameworks ?
Framework is:
Improved version of pure vanilla JavaScript
Pre-written JavaScript code
Own concepts and syntax
Makes written JS code easier 

Most popular Javascript frameworks ?
React.js
Angular
Vue.js
Node.js ( Frontend and Backend ) 

Data Types and Variables

Numbers   55
String        “desk”
Boolean     true
Array         [2, 33, 0]
Object       { “age”: 28 }

Where to write JavaScript 
for the start: Use the Browser
Browser interprets you JavaScript code
Each Browser comes packaged with “Developer Tools”
Inspect / Console 

Data Type: Numbers
Whole numbers ( Integer: Positive, Negative, Zero )
Number of Subscribers 
Numbers of Likes
Numbers of Videos
Numbers of Results

Decimal Numbers ( Decimal: Positive, Negative, Zero ) 
Prices
Ratings 

Data Type: String 
Everything you see on the computer´s keyboard
Strings must be written in quotes 

Data Type: Boolean
Wrong or Correct ( False or True ) 
Wrong password try it again
Invalid credit card number
Invalid email address

Data Type: Array 
Array is a list
List of friends
List of apartments 
List of comments 

Data Type: Object 
Object group information
Syntax {}
Key Value pairs
{authorName: “user12”, rating: 5, explanation: “great product”}

{
	location: “address 12/34”,
	price: “70”,
	rating: 5,
	description: “some text”,
	availability: true,
	images: [“image1Link”, “image2Link”, “image3Link”]
}

[
	{authorName: “user12”, rating: 5, explanation: “great product”},
{authorName: “user34”, rating: 4.5, explanation: “It is ok I guess”},
{authorName: “user56”, rating: 4, explanation: “nothing special”}
]

Working with Numbers 

… to write the logic

Addition 
Multiplication
Subtraction 
Division 

Calculating Prices	
Calculating Ratings 
Calculating Distances 

String Concatenation 
“12” + “12”
“1212”

“bla” + “12”
“bla12”

“bla” + false
“blafalse”

Variables 

Changing your Username on Facebook
Username on Profile
On comments section 
On friends lists 
On products discounts 

You give a variable a name, which makes sense for that value
productAPrice = 50 
var userName = “app-user-A”

	var productAPrice = 50
	“product-A price: $” + productAPrice
		“productAPrice: $50”

Multi-Language Applications
User Input

let emailOrPhoneNumber
let fullName
let userName
let password

validateEmail(emailOrPhoneNumber)
isLenghtGreatThan20(password)

Where to write and execute JavaScript ?

1 - Browser Console
Developer Tools
Inspect 
Console

Disadvantages of Browser
After refreshing the Browser, your JavaScript code is gone
One command at a time

2 - File
Write JavaScript code in a file
Create a basic HTML file ( Simple Text Editor )
Notepad 

<body> 

</body>

Save file format: .html

2.1 - JavaScript code inside <script>

<script>
var name = “some-name”
</script>

<body> 

</body>

2.2 - Especial Code Editors
Support for different programming languages 
They have different features to help you in write your code
Making you more productive as a developer

Webstorm from JetBrains 

Download Webstorm IDE and create a new Project

https://www.jetbrains.com/webstorm/download/?source=google&medium=cpc&campaign=AMER_en_BR_WebStorm_Branded&term=webstorm&content=523833970790&gad_source=1&gclid=CjwKCAiA_5WvBhBAEiwAZtCU75JzDkObuFK8fsLoEYNdIcoe3IKXIYUBaZYwoDO7Mk6PT4Uvb1tvQRoCjNkQAvD_BwE#section=windows 

js-app

Visual Studio Code
Explorer 
Open Editors 
index.html

index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS App</title>
    <script>
        let name = "some-name"
        console.log(name)
        console.log("output in console")
    </script>
</head>
<body>
    
    This is our awesome JS application 

</body>
</html>

Visual Studio Code
Explorer
Open Editors
index.html
app.js

app.js
let name = "some-name"
console.log(name)
console.log("output in console")


Visual Studio Code
Explorer
Open Editors
index.html
app.js

index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS App</title>
    <script src="app.js"></script>
</head>
<body>
    
    This is our awesome JS application 

</body>
</html>

Conditionals and Operators 

Comparison Operator

Facebook Display Birthday 
Today equals birthday ?
Today === birthday 

Conditional ( if else )

if totalPrice > 20 is true
then offer free shipping 
otherwise charge 5 $

example.js
let totalPrice = 19;
let shippingCost;

if (totalPrice > 20) {
	shippingCost = 0
} else {
	shippingCost = 5
}

if (totalPrice <= 20) {
	shippingCost = 5
} else {
	shippingCost = 0
}

exemple2.js
if (totalPrice <= 10) {
	shippingCost = 5
} else if (totalPrice <= 20) {
	totalPrice = 3 
} else {
	shippingCost = 0
}

Not equals
userMembership === premium
userMembership !== premium

example.js
let userMembership;

if (userMembership !== ‘premium’) {
	// show user non-premium contents
	// recommend premium upgrade
} else {
	// show premium conten
}

Logical Operator 

todayDate === birthdayDate and birthdayDisplayed === true

exemple.js
// todayDate === birthdayDate and birthdayDisplayed === true
let todayDate;
let birthdayDate;
let birthdayDisplayed;

if (todayDate === birthdayDate and birthdayDisplayed === true) {
	// show notification
} else {
	do not 
}

exemple2.js
let totalPrice;
let amazonPrime;

if (totalPrice > 20 || amazonPrime === true) {
	// free shipment
} else {
	// no free shipment
}

exemple.js
let totalPrice;
let amazonPrime;

if (!(totalPrice > 20 || amazonPrime === true)) {
	// free shipment
} else {
	// no free shipment
}

Functions in Javascript

Visual Studio Code
Explorer
Open Editors
index.html
app.js

app.js
function calculateShippingCost() {
    let totalPrice = 19;
    let shippingCost;

    if (totalPrice <= 10) {
        shippingCost = 5
    } else if (totalPrice <= 20) {
        shippingCost = 3
    } else {
        shippingCost = 0
    }

    // console.log("Shipping cost for you is " + shippingCost)
    console.log(`Shipping cost for you is ${shippingCost}`)
}

calculateShippingCost()

Functions Parameters

Visual Studio Code
Explorer
Open Editors
index.html
app.js

app.js
let totalPrice;

function calculateShippingCost(totalPriceParam) {
    let totalPrice = 19;
    let shippingCost;

    if (totalPriceParam <= 10) {
        shippingCost = 5
    } else if (totalPriceParam <= 20) {
        shippingCost = 3
    } else {
        shippingCost = 0
    }

    // console.log("Shipping cost for you is " + shippingCost)
    console.log(`Shipping cost for you is ${shippingCost}`)
    console.log(`for total price of ${totalPriceParam}`)
}

// user starts shopping
totalPrice = 10
// more items added to shopping cart
totalPrice = 19
// ready to order
calculateShippingCost(totalPrice)

“Const” Use Case

Visual Studio Code
Explorer
Open Editors
index.html
app.js

app.js
const standardShippingCost = 6
const discountedShippingConst = 4
let totalPrice;

function calculateShippingCost(totalPriceParam) {
    let totalPrice = 19;
    let shippingCost;

    if (totalPriceParam <= 10) {
        shippingCost = standardShippingCost
    } else if (totalPriceParam <= 20) {
        shippingCost = discountedShippingConst
    } else {
        shippingCost = 0
    }

    // console.log("Shipping cost for you is " + shippingCost)
    console.log(`Shipping cost for you is ${shippingCost}`)
    console.log(`for total price of ${totalPriceParam}`)
    console.log("--------------")
}

// user starts shopping
totalPrice = 10
calculateShippingCost(totalPrice)

// more items added to shopping cart
totalPrice = 19
// ready to order
calculateShippingCost(totalPrice)

// add another thing to cart
totalPrice = 24
calculateShippingCost(totalPrice)

// place the order

Names Conventions

CamelCase

Way to separate the words
Start with a small letter, the later words start with a capital letter
Commonly used in programming and naming convention







