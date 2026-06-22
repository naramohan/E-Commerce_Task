const API = "http://localhost:5000";


// REGISTER

function registerUser(){

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    fetch(`${API}/register`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            email,
            password
        })
    })
    .then(res=>res.text())
    .then(data=>{

        alert(data);

        window.location.href =
            "login.html";
    });
}



// LOGIN

function loginUser(){

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;

    fetch(`${API}/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,
            password
        })
    })
    .then(res=>{

        if(!res.ok){
            throw new Error();
        }

        return res.json();
    })
    .then(user=>{

        localStorage.setItem(
            "userId",
            user.id
        );

        window.location.href =
            "index.html";
    })
    .catch(()=>{
        alert("Invalid Login");
    });
}



// LOAD PRODUCTS

function loadProducts(){

    const productList =
        document.getElementById("productList");

    if(!productList) return;

    fetch(`${API}/products`)
    .then(res=>res.json())
    .then(products=>{

        productList.innerHTML = "";

        products.forEach(product=>{

            productList.innerHTML += `
            <div class="product">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <p>
                    ₹${product.price}
                </p>

                <button
                onclick='addToCart(
                    "${product.name}",
                    ${product.price}
                )'>
                    Add To Cart
                </button>

            </div>
            `;
        });
    });
}



// ADD TO CART

function addToCart(name,price){

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    cart.push({
        name,
        price
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("Added To Cart");
}



// LOAD CART

function loadCart(){

    const cartDiv =
        document.getElementById("cartItems");

    if(!cartDiv) return;

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    let total = 0;

    cartDiv.innerHTML = "";

    cart.forEach(item=>{

        total += Number(item.price);

        cartDiv.innerHTML += `
        <div class="cart-item">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
        </div>
        `;
    });

    document.getElementById(
        "totalPrice"
    ).innerHTML =
    "Total : ₹" + total;
}



// CHECKOUT

function checkout(){

    const userId =
        localStorage.getItem("userId");

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    if(cart.length===0){
        alert("Cart Empty");
        return;
    }

    cart.forEach(item=>{

        fetch(`${API}/orders`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                user_id:userId,
                product_name:item.name,
                price:item.price
            })
        });
    });

    localStorage.removeItem("cart");

    alert("Order Placed Successfully");

    location.reload();
}



window.onload = ()=>{

    loadProducts();

    loadCart();
};
