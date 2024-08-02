export function readPrice(price) {
    // Transform price in readable format
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
