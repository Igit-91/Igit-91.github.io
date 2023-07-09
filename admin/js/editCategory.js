let id = location.hash.slice(1)

let categoryList = JSON.parse(localStorage.getItem('categoryList'))
let cat = categoryList.find(e => e.id == id)

category.value = cat.title

function edit (){
    
    let productList = JSON.parse(localStorage.getItem('productList'))
    
    if(productList){
        productList.forEach(e => {
            if(e.category === cat.title){
                e.category = category.value
            }         
        })
    }
    
    cat.title = category.value

    localStorage.setItem('categoryList', JSON.stringify(categoryList))
    localStorage.setItem('productList', JSON.stringify(productList))
    location.href = 'index.html'
}

window.addEventListener('keydown', function(e){
    e.key === 'Enter' && edit()
})