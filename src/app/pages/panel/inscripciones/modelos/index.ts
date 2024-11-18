
import { Producto } from "../../productos/modelos";
import { Usuario } from "../../usuarios/modelos"; 

export interface Inscripcion {
  id: string;
  userId: string;
  productId: string;
  user?: Usuario;
  product?: Producto;
}