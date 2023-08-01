let list = document.querySelectorAll('.product .product__item');
list.forEach(product__item => {
    product__item.addEventListener('click', function (event){
        if(event.target.classList.contains('buy')){
            var itemNew = product__item.cloneNode(true);
            let checkIsset = false;

            let listcart = document.querySelectorAll('.cart .product__item');
            listcart.forEach(cart =>{
                if(cart.getAttribute('data-key')== itemNew.getAttribute('data-key')){
                    checkIsset = true;                
                }
            })
            if(checkIsset == false){
                document.querySelector('.listcart').appendChild(itemNew);
            }
        }
    })
})
function Remove($key){
    let listcart = document.querySelectorAll('.cart .product__item');
    listcart.forEach(product__item => {
        if(product__item.getAttribute('data-key')==$key){
            product__item.remove();
            return;
        }
    })
}