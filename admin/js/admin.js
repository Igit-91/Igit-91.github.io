function apdateCategoryList(){

    let categoryList = JSON.parse(localStorage.getItem('categoryList'))
    let productList = JSON.parse(localStorage.getItem('productList'))

    
    categorySection.innerHTML = ''
    
    if(categoryList){
        categoryList.forEach(category => {


            categorySection.innerHTML += `
                <tr id='toxer'>
                    <td>${category.id}</td>
                    <td>${category.title}</td>
                    <td>
                        <a href='editCategory.html#${category.id}'>
                            <i class='fa fa-pen' id='edit'></i>
                        </a>
                        <a href='#'>
                            <i class='fa fa-trash-alt' id='remove' onclick='removeCategory(${category.id})'></i>
                        </a>
                    </td>
                </tr>
            `
            
        })
    }
}

// function show(){
    //     toxer.classList.toggle('nshvac')
    // }
    // chashxatec toggle
    
function removeCategory(id){
    let categoryList = JSON.parse(localStorage.getItem('categoryList'))
    let i = categoryList.findIndex(e => e.id == id)
    categoryList.splice(i, 1)

    if(categoryList.length === 0){
        localStorage.removeItem("categoryList")
        localStorage.removeItem("catId")
    }else{

        localStorage.setItem('categoryList', JSON.stringify(categoryList))
    }
        
    apdateCategoryList()
        
        
}

apdateCategoryList()

// / ************************************************** /

function apdateProductList(){

    let productList = JSON.parse(localStorage.getItem('productList'))

    productSection.innerHTML = ''

    if(productList){
        productList.forEach(category => {
            productSection.innerHTML += `
                <tr id='toxer'>
                    <td>${category.id}</td>
                    <td>${category.title}</td>
                    <td>${category.description.slice(0, 50)}...</td>
                    <td>${category.price} $</td>
                    <td>${category.category}</td>
                    <td><img src='./img/${category.image}'></td>
                    <td>
                        <a href='editProduct.html#${category.id}'>
                        <i class='fa fa-pen' id='edit'></i></a>
                        <a href='#'>
                        <i class='fa fa-trash-alt' id='remove' onclick='removeProduct(${category.id})'></i></a>
                    </td>
                </tr>
            `
            
        })
    }
}


    
function removeProduct(id){
    let productList = JSON.parse(localStorage.getItem('productList'))
    let i = productList.findIndex(e => e.id == id)
    productList.splice(i, 1)

    if(productList.length === 0){
        localStorage.removeItem("productList")
        localStorage.removeItem("productId")
    }else{

        localStorage.setItem('productList', JSON.stringify(productList))
    }
    
        
    apdateProductList()
        
        
}

apdateProductList()

    
    