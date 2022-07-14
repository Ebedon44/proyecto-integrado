export interface Ropa{
    id:number,
    tipo:string,
    marca:string, 
    nombre:string,
    talla:string,
    costo:number,
    imagen:string,
    fecha:Date
}

export interface Usuario{
    idusuario:number,
    idrol:number,
    nombre:string,
    contrasena:string,
    email:string,
    telefono:string,
    direccion:string
}

export interface Venta{
    idventa:number,
    idropa:number,
    idusuario:number,
    producto:Ropa[],
    fecha:string,
    cantidad:number,
    subtotal:number,
    total:number
}

export type EstadoPedido = 'enviado' | 'visto' | 'camino' | 'entregado';

