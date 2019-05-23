module.exports = function main(inputs) {
    // write your code here...
    const {distance, parkTime} = inputs
    let price = 0
    if (distance > 0 && distance < 2) {
        price = 6
    } else if (distance <= 8) {
        price = 6 + (distance - 2) * 0.8
    } else {
        price = 10.8 + (distance - 8) * 1.5 * 0.8
    }
    return Math.round(price + 0.25 * parkTime)
};
