/**
 * This function calcules total price of a new order
 * @param {Array} products cartProducts: Array of Objects
 * @returns {Number} total price of all products in the cart
 */
export const totalPrice = (products) => {
    return products.reduce((acc, product) => acc + product.price, 0)
}