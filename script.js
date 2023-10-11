
function validateAndPlaceOrder() {
    const tagline = document.getElementById('tagline').value;
    const color = document.getElementById('color').value;
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('special_requests').value;

    if (tagline === '' || color === '' || size === '' || quantity === '' || phone === '' || message === '') {
        alert('All fields are required.');
        return false;
    }

    if (phone.length !== 10) {
        alert('Number should be 10 digits long.');
        return false;
    }

    const receiptDate = new Date();

    document.getElementById('receiptDate').textContent = receiptDate.toLocaleString();
    document.getElementById('receiptTagline').textContent = tagline;
    document.getElementById('receiptColor').textContent = color;
    document.getElementById('receiptSize').textContent = size;
    document.getElementById('receiptQuantity').textContent = quantity;
    document.getElementById('receiptPhone').textContent = phone;
    document.getElementById('receiptMessage').textContent = message;
    document.getElementById('receiptDeliveryDate').textContent = document.getElementById('delivery_date').value;

    document.getElementById('receipt').style.display = 'block';

    return false;
}
