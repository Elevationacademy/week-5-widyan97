const priceFurniture = function () {
    let input = $("#furniture-input").val()

    $.get(`priceCheck/${input}`, function (furniture) {
        $("body").append(`<div>${furniture.price} `)
    })
}

const buyFurniture = function () {
    let input = $("#furniture-input").val()

    $.get(`buy/${input}`, function (furnitureData) {
        $("body").append(`Congratulations, you've just bought <div>${furnitureData.name} for ${furnitureData.price} .
         There are ${furnitureData.inventory} left now in the store `)
    })
}