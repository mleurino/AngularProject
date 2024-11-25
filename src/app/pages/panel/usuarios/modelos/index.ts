export interface Usuario {
    id: number | string,
    nombre: string,
    apellido: string,
    contraseña: string,
    email: string,
    rol: string,
    token: string,
    creadoFecha: Date,
    Aprobado: boolean
}