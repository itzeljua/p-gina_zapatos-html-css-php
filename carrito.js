/*const product =[
    {
        id:0,
        titulo: "Botas para dama negro",
        imagen: "C:\Users\Juare\OneDrive\Documentos\proyectojuanga\imagenes\p2.jpg",
        precio: 575,
    },
    {
    id:1,
    titulo: "Botas negro",
    imagen: "C:\Users\Juare\OneDrive\Documentos\proyectojuanga\imagenes\p3.jpg",
    precio: 600,
    },
    {
    id:2,
    titulo: "Botas",
    imagen: "C:\Users\Juare\OneDrive\Documentos\proyectojuanga\imagenes\p4.jpg",
    precio: 354,
    },
    {
    id:3,
    titulo: "Botas (moderna)",
    imagen: "C:\Users\Juare\OneDrive\Documentos\proyectojuanga\imagenes\p5.jpg",
    precio: 698,
    },
];

const categoria=[...new Set(product.map((item)=>
    {returnitem}))]
    let i=0;
document.getElementById('root').innerHTML=categoria.map((item)=>
{
    var{imagen,titulo,precio} =item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${imagen}></img>
            </div>
        <div class='bottom'>
        <p>${titulo}></p>
        <h2>${precio}.00</h2>`+
        "<button onclick='carrito("+(i++)+")'>Add to cart </button>" +
        `</div>
        </div>`
    )
}).join('')

var car=[];
function addtocart(a){
    cart.push({...categoria[a]});
    displaycart();
}

function delElemen(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j=0;
    document.getElementById("count").innerHTML=cart.length;
    if(categoria.length==0){
        document.getElementById('cartItem').innerHTML="Your cart is empty";
        document.getElementById('total').innerHTML ="$ "+0+".00";
    }else{
        document.getElementById("cartItem").innerHTML=cart.map((items)=>
        {
            var{imagen,titulo,precio}=items;
            total=total+precio;
            document.getElementById("total").innerHTML="$ "+total+".00";
            return(
                `<dic class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${imagen}>
                </div>
                <p style='font-size:12px;'>${titulo}</p>
                <h2 style='font-size: 15px;'>${precio}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElemen("+ (j++)+")'></i></div>"
            );
        }).join('');
    }
}
*/
document.addEventListener("DOMContentLoaded", function () {
    const addButtonList = document.querySelectorAll(".product button");

    addButtonList.forEach(button => {
        button.addEventListener("click", () => {
            const productName = button.parentElement.querySelector(".product__title").textContent;
            const productPrice = parseFloat(button.parentElement.querySelector(".producto__price").textContent.replace("$", ""));
            
            addToCart(productName, productPrice);
        });
    });
});

let cartItems = [];

function addToCart(name, price) {
    cartItems.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartItemContainer = document.getElementById("cartItem");
    const totalElement = document.getElementById("total");

    if (cartItems.length === 0) {
        cartItemContainer.innerHTML = "Your cart is empty";
    } else {
        let cartHTML = "";
        let total = 0;

        cartItems.forEach(item => {
            cartHTML += `<div class="cart-item">${item.name} - $${item.price.toFixed(2)}</div>`;
            total += item.price;
        });

        cartItemContainer.innerHTML = cartHTML;
        totalElement.textContent = `$ ${total.toFixed(2)}`;
    }
}

// ... Código anterior ...

function updateCart() {
    const cartItemContainer = document.getElementById("cartItem");
    const totalElement = document.getElementById("total");

    if (cartItems.length === 0) {
        cartItemContainer.innerHTML = "Your cart is empty";
    } else {
        let cartHTML = "";
        let total = 0;

        cartItems.forEach((item, index) => {
            cartHTML += `
                <div class="cart-item">
                    ${item.name} - $${item.price.toFixed(2)}
                    <i class="fas fa-trash-alt" onclick="removeFromCart(${index})"></i>
                </div>
            `;
            total += item.price;
        });

        cartItemContainer.innerHTML = cartHTML;
        totalElement.textContent = `$ ${total.toFixed(2)}`;
    }
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
}

// ... Resto del código ...

