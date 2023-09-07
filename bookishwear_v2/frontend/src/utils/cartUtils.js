export const addDecimals = (num) => {
    return (Math.round(num*100)/100).toFixed(2);
}

export const updateCart = (state) => {
    //Calculate Items Price
    state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));
            
    //Calculate Shipping Price If order is above 1000 the free shipping else 99
    state.shippingPrice = addDecimals(state.itemsPrice > 1000 ? 0 : 99);

    //Discount lets say 20%
    state.discountPrice = addDecimals(Number((0.2 * state.itemsPrice).toFixed(2)));

    //Calculate Total Price
    state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) -
        Number(state.discountPrice)
    ).toFixed(2);

    localStorage.setItem('cart', JSON.stringify(state));

    return state;
}