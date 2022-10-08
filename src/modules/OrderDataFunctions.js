function getOrderData(data) {
    let orders = [];
    const separated = separateOrders(data);
    separated.forEach(order => {
        let orderData = {};
        orderData.orderNumber = getOrderNumber(order);
        orderData.trackingNumber = getTrackingNumber(order);
        orders.push(orderData);
    })
    console.log(orders)

}

function getOrderNumber(orderData) {
    return (orderData.match(/Order\s[#]\:\s(BBY01[-])?\d+/g) || [])
        .map(e => e.substr(e.indexOf(':') + 2));
}

function getTrackingNumber(orderData) {
    return (orderData.match(/Tracking\s[#]\:\s(BBYGD|BBYSD)\d+/g) || [])
        .map(e => e.substr(e.indexOf(':') + 2));
}

function getWeight(orderData) {

}

function separateOrders(data) {
    return data.match(/Staging\sLocation\:.+?In[-]Hand\sDate\:\s\d{2}[/]\d{2}[/]\d{4}/g) || [];
}

export {getOrderData}