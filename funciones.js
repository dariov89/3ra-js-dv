function agregarAlCarrito(id) {
    if(carrito.some((el) => el.id ===id)){
        let index = carrito.findIndex(el => el.id === id);
        carrito[index].cantidad += 1;
    }else {
        let productoAAgregar = cocteles.find((el) => el.id === id);
        carrito.push({
            ...productoAAgregar,
            cantidad: 1,
    });
}

localStorage.setItem("carrito", JSON.stringify(carrito));
mostrarCarrito();
};

function mostrarCarrito() {
    let divCarrito = document.getElementById("cart");

    divCarrito.innerHTML = "";

    carrito.forEach((el, index)=> {
    let card = document.createElement("div");
    card.className = "quote-card";

    let title = document.createElement("h3");
    title.innerText = `Cocktail: ${el.nombre}`;

    card.appendChild(title);

    let imagenes = document.createElement("div");
    imagenes.innerHTML = `<img class="card-imgs" src = ${el.imagenes}>`;
    imagenes.className = "img-tag"

    card.appendChild (imagenes);

    let plan = document.createElement("p");
    plan.innerText = `Plan: ${el.plan}`;

    
    card.appendChild(plan);
    
    
    let price = document.createElement("p");
    price.innerText = `Price: $${el.precio},00`;
    
    card.appendChild(price);
    
    let divCantidad = document.createElement("div");
    divCantidad.className = "div-cantidad";
    
    let btnMinus = document.createElement("button");
    btnMinus.innerText = "-";
    btnMinus.className = "incard-tag";
    btnMinus.onclick = () => modificarCarrito (index, "-");

    let quantity = document.createElement("p");
    quantity.innerText = `Cantidad: ${el.cantidad}`;
    quantity.className = "incard-tag";

    let btnPlus = document.createElement("button");
    btnPlus.innerText = "+"; 
    btnPlus.className = "incard-tag";
    btnPlus.onclick = () => modificarCarrito (index, "+");
    
    divCantidad.appendChild(btnMinus);
    divCantidad.appendChild(quantity);
    divCantidad.appendChild(btnPlus);
    
    card.appendChild(divCantidad);
/*
    let btnDelete = document.createElement("button");
    btnDelete.oneclick = () => carrito.splice();
    btnDelete.innerText = "Quitar Coctel";
    console.log(carrito);
    card.appendChild(btnDelete);
*/
    divCarrito.append(card);
    
    
})
};

function ocultarCarrito() {
    divCarrito.innerHTML = "";
console.log(ocultarCarrito);
    };
    

function modificarCarrito (index, op) {
    if(op === "-") {
        if (carrito[index].cantidad > 1) {
            carrito[index].cantidad -= 1 
        } else {
            carrito.splice(index, 1);
        }
    } else{
    carrito[index].cantidad += 1
    };
    localStorage.setItem("carrito",JSON.stringify(carrito)); 
    mostrarCarrito();
};


function limpiarCocteles(index) {
    carrito = [];
    localStorage.setItem("carrito",(JSON.stringify(carrito)));
    mostrarCarrito();
};



function eliminarCocteles(index){
    carrito.splice(index,1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}



function finalizarCompra(){

};