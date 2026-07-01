const products = [
{
    id:1,
    name:"Wireless Headphones",
    price:2999,
    image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
},
{
    id:2,
    name:"Smart Watch",
    price:4999,
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
},
{
    id:3,
    name:"Laptop",
    price:59999,
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
},
{
    id:4,
    name:"Mobile Phone",
    price:19999,
    image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
}
];
let cartCount = 0;
const container = document.getElementById("product-container");
const cartCounter = document.getElementById("cart-count");
products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product");
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
            <h3>${product.name}</h3>
            <p class="price">₹${product.price}</p>
            <button onclick="addToCart()">Add To Cart</button>
        </div>
    `;
    container.appendChild(card);
});
function addToCart(){
    cartCount++;
    cartCounter.innerText = cartCount;
}