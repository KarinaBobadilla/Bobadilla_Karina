class producto{
    #stock = 0;

    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = null;

    }

    setStock(cantidad){
        if (typeof cantidad !== 'number' || !Number.isInteger(cantidad)){
            throw new Error(" el stock debe ser un numero entero");

        }
        if( cantidad < 0){
            throw new Error("el stock debe ser mayor a cero");

        }
        this.#stock = cantidad;
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
    static descuento(producto, porentaje){
        if (porentaje < 0 || porentaje > 100){
            throw new Error(" el descuento debe estar entre los 0 y 100%");

        }
        const descuento = producto.precio * (porentaje / 100);
        return producto.precio - descuento;
    }
}

function actuaizarStock(producto, cantidad){
    try {
        producto.setStock(cantidad);
        console.log('stock actualizado a ${cantidad} unidades');

    }catch (error){
        console.error('error al actualizar el stock: ${error.message}');

    }


    }




const proc1 = new producto("remera de river",1200);

actuaizarStock(proc1, 20);
actuaizarStock(proc1, -5)

