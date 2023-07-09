function showCart(){
    cartBox.classList.toggle('showCart')
}

function addStorage(id){
    let productList = JSON.parse(localStorage.getItem('productList'))
    let product = productList.find(e => e.id === id)

    product.itemsCount = product.itemsCount ? ++product.itemsCount : 1
    product.cartPrice = product.price * product.itemsCount

    localStorage.setItem('productList', JSON.stringify(productList))

    updateCart()

    // if(product.itemsCount){
    //     product.itemsCount = product.itemsCount +1
    // }else{
    //     product.itemsCount = 1
    // }
}

function updateCart(){
    let productList = JSON.parse(localStorage.getItem('productList'))
    let cartProducts = productList.filter(e => e.itemsCount)
    cartItems.innerHTML = '' 
    let total = 0
    totalBox.innerHTML = 'Cart is empty :('

    if(cartProducts){
        cartProducts.forEach(product => {

            total += product.cartPrice
            totalBox.innerHTML = `Total price: $ ${total}`
            cartItems.innerHTML += `
                <div class='cart'>
                    <img src='./admin/img/${product.image}'>
                    <div class="cartItemInfo">
                        <h4>${product.title}</h4>
                        <p>$ ${product.cartPrice}</p>
                        <div class="countBox">
                            <span onclick='changeCount(${product.id}, )'>-</span>
                            <span>${product.itemsCount}</span>
                            <span onclick='changeCount(${product.id}, "true")'>+</span>
                        </div>
                    </div>
                    <i onclick="remove(${product.id})" id="removeBtn" class="fa fa-times"></i>
                </div>
            `
        })
    }
                
}
            


function changeCount(id, value){
    let productList = JSON.parse(localStorage.getItem('productList'))
    let product = productList.find(e => e.id === id)

    product.itemsCount = value ? ++product.itemsCount : --product.itemsCount
    product.cartPrice = product.price * product.itemsCount

    localStorage.setItem('productList', JSON.stringify(productList))


    updateCart()
    // if(value){
    //     product.itemsCount = product.itemsCount + 1 
    // }else{
    //     product.itemsCount = product.itemsCount - 1 

    // }
}

function remove(id){
    let productList = JSON.parse(localStorage.getItem('productList'))
    let product = productList.find(e => e.id === id)

    delete product.itemsCount

    localStorage.setItem("productList", JSON.stringify(productList))
    updateCart()
}
updateCart()