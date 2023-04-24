function removeDuplicates(cart) {
  const uniqueCart = [];
  const itemIds = [];

  cart.forEach((item) => {
    if (!itemIds.includes(item.id)) {
      uniqueCart.push(item);
      itemIds.push(item.id);
    }
  });

  return uniqueCart;
}
