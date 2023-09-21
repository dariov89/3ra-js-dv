let cocktailsContainer = document.getElementById("cocktails-container");

cocteles.forEach((el) => {
    let card = document.createElement("div");
    card.className = "quote-card";

    let title = document.createElement("h3");
    title.innerText = `Cocktail: ${el.nombre}`;

    card.appendChild(title);

    let imagenes = document.createElement("div");
    imagenes.innerHTML = `<img class="card-imgs" src = ${el.imagenes}>`;

    card.appendChild (imagenes);

    let plan = document.createElement("p");
    plan.innerText = `Plan: ${el.plan}`;

    card.appendChild(plan);


    let price = document.createElement("p");
    price.innerText = `Price: $${el.precio},00`;

    card.appendChild(price);

    let botonAnadir = document.createElement("button");
    botonAnadir.innerText = "Add to Plan";
    botonAnadir.className = "btn btn-secondary btn-anadir";

    botonAnadir.onclick = () => agregarAlCarrito(el.id);
    card.appendChild(botonAnadir);


    cocktailsContainer.appendChild(card);

});

let carrito =  JSON.parse(localStorage.getItem("carrito")) || [];

let btnShowCart = document.getElementById("show-cart");
let btnHideCart = document.getElementById("hide-cart");
let btnCleanCart = document.getElementById("clean-cart");

btnShowCart.onclick = () => mostrarCarrito();
btnHideCart.onclick = ocultarCarrito;
btnCleanCart.onclick = () => limpiarCocteles();


//JSON.parse(localStorage.getItem("carrito")) ||