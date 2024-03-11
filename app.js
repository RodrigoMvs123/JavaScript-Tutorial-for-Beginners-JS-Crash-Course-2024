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
