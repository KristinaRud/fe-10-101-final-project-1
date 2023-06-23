const structureDataToStore = (action) => {
  if (action) {
    const itemsCart = action.map((item) => {
      return {
        id: item.product._id,
        image: item.product.imageUrls[0],
        alt: item.product.name,
        description: item.product.name,
        currentPrice: item.product.currentPrice,
        cartQuantity: item.cartQuantity,
        itemNo: item.product.itemNo,
        categories: item.product.categories,
      };
    });
    return [...itemsCart];
  }
};

const structureDataWishList = (action) => {
  const itemsWishList = action.map((item) => {
    return {
      id: item._id,
      image: item.imageUrls[0],
      alt: item.name,
      description: item.name,
      currentPrice: item.currentPrice,
      itemNo: item.itemNo,
      oldPrice: item.previousPrice,
      rating: item.rating,
      available: item.enabled,
      categories: item.categories,
    };
  });
  return [...itemsWishList];
};

const structureWishListLS = () => {
  const cartLS = JSON.parse(localStorage.getItem("wishList"));
  const product = [];
  cartLS.forEach((item) => {
    product.push(item.id);
  });
  return { products: product };
};

export { structureDataToStore, structureDataWishList, structureWishListLS };
