const priceFurniture = function () {
    let input = $("#furniture-input").val()

    $.get(`priceCheck/${input}`, function (furniture) {
        $("body").append(`<div>${furniture.price} `)
    })
}

