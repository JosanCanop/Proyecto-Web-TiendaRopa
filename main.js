const productos = [
    {
        id: 1231,
        categoria: "KIDS DRESS",
        nombre: "Kiddo Winter Boys Jacket",
        precio: 19.93,
        imagen: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-1.png",
    },
    {
        id: 1232,
        categoria: "WINTER COLLECTION",
        nombre: "Terius Winter Gray Hat for Child",
        precio: 24.58,
        imagen: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-2.png",
    },
    {
        id: 1233,
        categoria: "MEN DRESS",
        nombre: "Adidas Men's Kaptir Super Trail",
        precio: 49.19,
        imagen: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-3.png",
    },
    {
        id: 1234,
        categoria: "SHOE",
        nombre: "New Balance Women's 481V3",
        precio: 16.00,
        imagen: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-4.png",
    },
    {
        id: 1235,
        categoria: "WINTER COLLECTION",
        nombre: "Adidas Child Shirt Kaptir Super Trail",
        precio: 23.88,
        imagen: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-5.png",
    },
    {
        id: 1236,
        categoria: "LADIES DRESS",
        nombre: "Kiddo Winter Boys Jacket",
        precio: 34.99,
        imagen: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-6.png",
    },
    {
        id: 1237,
        categoria: "FASHION",
        nombre: "Columbia Ladies Bag",
        precio: 14.93,
        imagen: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-7.png",
    },
    {
        id: 1238,
        categoria: "KIDS DRESS",
        nombre: "HappyMom winter Boys Jacket",
        precio: 24.19,
        imagen: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-8.png",
    },
]

let miCompra = []

function loadProducts() {
    for (const producto of productos) {
        document.getElementById('articulos').innerHTML +=
            `<div class="col-12 col-sm-6 col-md4 col-lg-3">
        <div class="card border-0 rounded-4">
            <div class="imagen rounded-4">
                <img class="card-img-top rounded-top-4"
                    src="${producto.imagen}"
                    class="card-img-top" alt="...">
            </div>
            <div class="card-body fw-medium">
                <p class="mb-1 text-secondary text-uppercase">${producto.categoria}</p>
                <P class="mb-1">"${producto.nombre}"</P>
                <p class="mb-1 text-secondary fw-bold">${producto.precio}€</p>
                <div class="row g-2 mt-2">
                    <div class="col">
                        <button class="btn btn-secondary w-100">Ver más</button>
                    </div>
                    <div class="col">
                        <button onclick="addTooCar(${producto.id})" class="btn btn-primary w-100">Añadir</button>
                    </div>
                </div>
            </div>
        </div>

    </div>`
    }
}



function shoping() {
    document.getElementById("shopping-bag").classList.toggle("d-none");
};

function addTooCar(id) {
    //buscamos la compra
    const misProductos = JSON.parse(JSON.stringify(productos));
    let producto = misProductos.filter((producto) => producto.id == id);
    let existe = miCompra.filter((producto) => producto.id == id);
    //añadir el producto
    if (existe.length == 0) {
        producto[0].qty = 1;
        miCompra.push(producto[0]);
    } else {
        existe[0].qty = existe[0].qty + 1;
        existe[0].precio = producto[0].precio * existe[0].qty;
    }

    loadShoppingCar();
    document.getElementById("shopping-bag").classList.remove("d-none")

};



function loadShoppingCar() {
    let totalcompra = 0;
    for (const producto of miCompra) {
        totalcompra += producto.qty;
    }
    document.getElementById("TotalCompra").innerHTML = totalcompra;

    document.getElementById("shopping-list").innerHTML = "";
    for (const producto of miCompra) {
        document.getElementById('shopping-list').innerHTML += ` <div class="d-flex border-bottom py-2">
        <img class="mini" src="${producto.imagen}" alt="">
        <div class="mb-2 d-felx">
            <p>${producto.nombre}</p>
            <button onclick="deleteProduct(${producto.id})" class="border-0 bg-transparent" id="erase"><svg width='24px' height='24px'
                    viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'
                    xmlns:xlink='http://www.w3.org/1999/xlink'>
                    <title>delete_2_line</title>
                    <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                        <g id='System' transform='translate(-576.000000, -192.000000)' fill-rule='nonzero'>
                            <g id='delete_2_line' transform='translate(576.000000, 192.000000)'>
                                <path
                                    d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z'
                                    id='MingCute' fill-rule='nonzero'></path>
                                <path
                                    d='M14.2792,2 C15.1401,2 15.9044,2.55086 16.1766,3.36754 L16.7208,5 L20,5 C20.5523,5 21,5.44772 21,6 C21,6.55227 20.5523,6.99998 20,7 L19.9975,7.07125 L19.9975,7.07125 L19.1301,19.2137 C19.018,20.7837 17.7117,22 16.1378,22 L7.86224,22 C6.28832,22 4.982,20.7837 4.86986,19.2137 L4.00254,7.07125 C4.00083,7.04735 3.99998,7.02359 3.99996,7 C3.44769,6.99998 3,6.55227 3,6 C3,5.44772 3.44772,5 4,5 L7.27924,5 L7.82339,3.36754 C8.09562,2.55086 8.8599,2 9.72076,2 L14.2792,2 Z M17.9975,7 L6.00255,7 L6.86478,19.0712 C6.90216,19.5946 7.3376,20 7.86224,20 L16.1378,20 C16.6624,20 17.0978,19.5946 17.1352,19.0712 L17.9975,7 Z M10,10 C10.51285,10 10.9355092,10.386027 10.9932725,10.8833761 L11,11 L11,16 C11,16.5523 10.5523,17 10,17 C9.48715929,17 9.06449214,16.613973 9.00672766,16.1166239 L9,16 L9,11 C9,10.4477 9.44771,10 10,10 Z M14,10 C14.5523,10 15,10.4477 15,11 L15,16 C15,16.5523 14.5523,17 14,17 C13.4477,17 13,16.5523 13,16 L13,11 C13,10.4477 13.4477,10 14,10 Z M14.2792,4 L9.72076,4 L9.38743,5 L14.6126,5 L14.2792,4 Z'
                                    id='形状' fill='#FF6252FF'></path>
                            </g>
                        </g>
                    </g>
                </svg></button>
        </div>
        <div class="d-felx align-items-center justify-content-between">
            <input id="qty-${producto.id}" oninput="updateProduct(${producto.id})" class="w-50 form-control" type="number" value="${producto.qty}">
            <p id="precios" class="mb-0">${producto.precio}€</p> 
            
        </div>
    </div>`

    }
    calcularPrecio();
};


function deleteProduct(id) {
    miCompra = miCompra.filter((producto) => producto.id != id);
    loadShoppingCar();
}

function updateProduct(id) {
    let inputID = "qty-" + id;
    let valor = document.getElementById(inputID).value;
    console.log(valor);

    // actualizar el qty del product
    let producto = miCompra.filter((producto) => producto.id == id);
    producto[0].qty = parseInt(valor); // pasarlo a intger => NUMERO!!

    // actualizar el price del product
    const misProductos = JSON.parse(JSON.stringify(productos));
    let productoInventario = misProductos.filter((producto) => producto.id == id);
    producto[0].precio = productoInventario[0].precio * producto[0].qty;

    // pintar el carrito de nuevo
    loadShoppingCar();
}

function calcularPrecio() {
    let totalPrice = 0;
    for (const compra of miCompra) {
        totalPrice += compra.precio
    }
    document.getElementById("suma").innerHTML = totalPrice;
}

loadShoppingCar();

loadProducts();