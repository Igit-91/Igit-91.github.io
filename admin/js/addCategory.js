function add(){
    let categoryList = localStorage.getItem('categoryList') ? JSON.parse(localStorage.getItem('categoryList')) : [] 

    let id = 1

    if(localStorage.getItem('catId')){
        id = +localStorage.getItem('catId') + 1
    }
    categoryList.push({
        id: id,
        title: category.value
    })
    localStorage.setItem('categoryList', JSON.stringify(categoryList))
    localStorage.setItem('catId', id)

    location.href = 'index.html'
}