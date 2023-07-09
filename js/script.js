(() => {
    let categoryList = JSON.parse(localStorage.getItem('categoryList'))
    if(categoryList){
        categoryList.forEach(e => {
            categoriesSection.innerHTML +=`
                <li>
                    <a href="#" onclick='apdateProductList("${e.title}")'>${e.title}</a>
                </li>
            `
        })
    }
}) ()

function apdateProductList(category){

    let productList = JSON.parse(localStorage.getItem('productList'))
    category ? productList = productList.filter(e => e.category == category) : null

    productSection.innerHTML = ''

    if(productList){
        productList.forEach(product => {
            productSection.innerHTML += `
               
            <div class='product'>
                <div class='product-info'>
                    <h3>${product.title}</h3>
                    <p>$ ${product.price}</p>
                </div>
                <img src='./admin/img/${product.image}'>
                <div class='action'>
                    <a href='#' onclick='addStorage(${product.id})'>Add to cart</a>
                    <a href='#'>See more</a>
                </div>
            </div>
            `
            
        })
    }
}

apdateProductList()