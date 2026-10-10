
// Example 1: Online Shopping Details
let Order = {
    orderId: 501,
    customerName: "Shylusha",
    deliveryDetails: {
        city: "Hyderabad",
        address: "Kphb",
        status: "Pending"
    }
};

console.log(Order);

// Retrieving the data
console.log("----- Retrieving Data ------");
console.log(`Order ID = ${Order.orderId}`);
console.log(`Customer Name = ${Order.customerName}`);
console.log(`Delivery City = ${Order.deliveryDetails.city}`);
console.log(`Delivery Address = ${Order.deliveryDetails.address}`);
console.log(`Delivery Status = ${Order.deliveryDetails.status}`);

// Updating the data
console.log("------ Before Update ------");
console.log(Order);

console.log("------ After Update ------");
Order.customerName = "Shylu";
Order.deliveryDetails.city = "Warangal";
Order.deliveryDetails.address = "Hanamkonda";
Order.deliveryDetails.status = "Delivered";

console.log(Order);

// Deleting the data
console.log("------ Deleting ------");
delete Order.deliveryDetails.address;

console.log(Order);


// Example 2: Restaurant Details

let Restaurant={
    RestaurantName:"Spicy Hub",
    RestaurantId: 202,
    menuDetails:{
        foodItem:"Chicken Biryani",
        price:250,
        category:"Non-Veg"
    }
};
console.log(Restaurant);
//Retrieving
console.log("------Retrieving Data------");
console.log(`Restaurant Name="${Restaurant.RestaurantName}`)
console.log(`Restaurant Id="${Restaurant.RestaurantId}`)
console.log(`Restaurant foodItem="${Restaurant.menuDetails.foodItem}`)
console.log(`Restaurant price="${Restaurant.menuDetails.price}`)
console.log(`Restaurant category="${Restaurant.menuDetails.category}`)
//updating
console.log("------Before Update--------");
console.log(`Restaurant Name="${Restaurant.RestaurantName}`)
console.log(`Restaurant Id="${Restaurant.RestaurantId}`)
console.log(`Restaurant foodItem="${Restaurant.menuDetails.foodItem}`)
console.log(`Restaurant price="${Restaurant.menuDetails.price}`)
console.log(`Restaurant category="${Restaurant.menuDetails.category}`)
console.log("------After Update------");
Restaurant.RestaurantName="Royal feast";
Restaurant.menuDetails.foodItem="Paneer Biryani";
Restaurant.menuDetails.price=349;
Restaurant.menuDetails.category="Veg";
console.log(Restaurant);
//Deleting
console.log("----Deleting");
delete Restaurant.category;
console.log(Restaurant);