let categoryList = JSON.parse(localStorage.getItem('categoryList'))

if(categoryList){
    categoryList.forEach(cat => {
        category.innerHTML += `
            <option value='${cat.title}'>${cat.title}</option>
        `
    })
}

function add(){
    if(!category.value) return
    let productList = localStorage.getItem('productList') ? JSON.parse(localStorage.getItem('productList')) : [] 

    let id = 1

    if(localStorage.getItem('productId')){
        id = +localStorage.getItem('productId') + 1
    }
    productList.push({
        id: id,
        title: title.value,
        price: price.value,
        description: description.value,
        image: image.files[0]['name'],
        category: category.value
    })
    localStorage.setItem('productList', JSON.stringify(productList))
    localStorage.setItem('productId', id)

    location.href = 'index.html'
}