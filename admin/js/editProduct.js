let id = location.hash.slice(1)

let categoryList = JSON.parse(localStorage.getItem('categoryList'))
// let categoryItem = categoryList.find(e => e.title == product.category)

if(categoryList){
    categoryList.forEach(cat => {
        category.innerHTML += `
            <option value='${cat.title}'>${cat.title}</option>
        `
    })
}

let productList = JSON.parse(localStorage.getItem('productList'))
let product = productList.find(e => e.id == id)

title.value = product.title
price.value = product.price
description.value = product.description

img.setAttribute('src', `./img/${product.image}`)

function edit (){
    product.title = title.value
    product.price = price.value
    product.description = description.value
    product.category = category.value

    if(image.files.length > 0){
        product.image = image.files[0]['name']
    }
    
    
    localStorage.setItem('productList', JSON.stringify(productList))
    location.href = 'index.html'
}

window.addEventListener('keydown', function(e){
    e.key === 'Enter' && edit()
})
