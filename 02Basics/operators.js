
var sellingPrice = 199;
var listingPrice = 799;

var discountPercentage = ((listingPrice - sellingPrice) / listingPrice) * 100 ;

// rounding off

var roundOffDiscount = Math.round(discountPercentage);

console.log(roundOffDiscount + "%")
