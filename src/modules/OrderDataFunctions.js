function getOrderData(data) {
    let orders = [];
    const separated = separateOrders(data);
    separated.forEach(order => {
        let orderData = {};
        orderData.orderNumber = getOrderNumbers(order);
        orderData.trackingNumber = getTrackingNumbers(order);
        orders.push(orderData);
    })
    console.log(orders)

}

function getOrderNumbers(orderData) {
    return (orderData.match(/Order\s[#]\:\s(BBY01[-])?\d+/g) || [])
        .map(e => e.substr(e.indexOf(':') + 2));
}

function getTrackingNumbers(orderData) {
    return (orderData.match(/Tracking\s[#]\:\s(BBYGD|BBYSD)\d+/g) || [])
        .map(e => e.substr(e.indexOf(':') + 2));
}

function getWeight(orderData) {

}

function separateOrders(data) {
    return data.match(/Staging\sLocation\:.+?In[-]Hand\sDate\:\s\d{2}[/]\d{2}[/]\d{4}/g) || [];
}

function getDuplicates(data) {
    let counts = {};
    let orderNumbers = getOrderNumbers(data);
    orderNumbers.forEach(order => {
        counts[order] = counts[order] + 1 || 1;
    })
    let duplicates = Object.keys(counts).filter(e => counts[e] > 1);
    if (!duplicates.length) return [];
    return duplicates.map(e => [e, counts[e]]);

}

export {getOrderData, getDuplicates}