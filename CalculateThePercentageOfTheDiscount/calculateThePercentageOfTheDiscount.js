const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
  const discountAmount = originalPrice - discountedPrice;
  const discountPercentage = (discountAmount / originalPrice) * 100;
  return discountPercentage.toFixed(2);
};

const originalPrice = prompt('Enter original price:- ');
const discountedPrice = prompt('Enter discounted price:- ');
const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(`Discount percentage: ${discountPercentage}%`);

