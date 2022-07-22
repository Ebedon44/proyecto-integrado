export interface Ropa{
    id:number,
    tipo:string,
    marca:string, 
    nombre:string,
    talla:string,
    costo:number,
    stock:number,
    imagen:string,
    fecha:Date
}
export interface Usuario{
    id:number,
    idrol:Rol,
    nombre:string,
    contrasena:string,
    email:string,
    telefono:string,
    direccion:string
}

export interface Rol{
    id:number,
    nombrerol:string
}

export interface Venta{
    idventa:number,
    ropa:Ropa,
    usuario:Usuario,
    fecha:Date,
    cantidad:number,
    subtotal:number,
    total:number
}