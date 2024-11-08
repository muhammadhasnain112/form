function calculateTotal() {
    let total = 0;
    const deliveryCharge = 200;

    if (document.getElementById("tshirt").checked) {
        total += parseInt(document.getElementById("tshirt").value);
    }
    if (document.getElementById("paint").checked) {
        total += parseInt(document.getElementById("paint").value);
    }
    if (document.getElementById("coat").checked) {
        total += parseInt(document.getElementById("coat").value);
    }

    if (document.getElementById("online").checked) {
        total += deliveryCharge;
    }

    document.getElementById("totalAmount").innerText = total;
}