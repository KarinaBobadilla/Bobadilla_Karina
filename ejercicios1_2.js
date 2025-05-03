class producto{
    #stock = 0;

    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = null;
    }

    setStock(cantidad){
        if(cantidad >=0){
            this.#stock = cantidad;
        }else{
            console.error("Ingresar un stock válido");

        }
    }

    getStock(){
        return this.#stock;
    }

    setCategoria(categoria){
        this.categoria = categoria;
    }

    info(){
        return{
             nombre: this.nombre,
              precio: this.precio,
              categoria: this.categoria ? this.categoria.nombre : "sin categoria"
        };
    }

    static descuento(producto, porcentaje){
        if(porcentaje < 0 || porcentaje > 100){
            console.error("el porcentaje de descuent deve estar entre los 0 y 100%");
            return producto.precio;
        }
        const descuento = producto.precio * (porcentaje / 100);
        return producto.precio - descuento;
    }
}

class categoria{
    constructor(nombre){
        this.nombre = nombre;
        this.productos = [];
    }

    agre_pro(producto){
        this.productos.push(producto);
        producto.setCategoria(this);
    }
    lista_pro(){
        return this.productos.map(producto => producto.nombre);
    }
}

//ejecico parte 2

const proc1 = new producto("remera de river",1200);
const proc2 = new producto(" remera de argentina", 200);
const proc3 = new producto("remera de boca",100);

proc1.setStock(5);
proc2.setStock(20);
proc3.setStock(4);

const river = new categoria("River")
const argentina = new categoria("Seleccion Argentina")
const boca = new categoria("no jugan la liertadores")

river.agre_pro(proc1);
argentina.agre_pro(proc2);
boca.agre_pro(proc3);

console.log(proc1.info());
console.log(proc2.info());
console.log(proc3.info());

console.log("Productos de River Plate: ", river.lista_pro());
console.log("Productos de la Sele Argentina: ", argentina.lista_pro());
console.log("Productos de boca: ", boca.lista_pro());

console.log("Precio con descuento: ", producto.descuento(proc1,10));
console.log("Precio con descuento: ", producto.descuento(proc2,15));
console.log("Producto con descuento: ", producto.descuento(proc3,50));
