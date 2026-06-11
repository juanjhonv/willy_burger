export interface Adicional {
  nombre: string;
  precio: number;
}

export interface Platillo {
  id: number;
  categoriaSlug: string;
  titulo: string;
  descripcion: string;
  precio: number;
  adicionales: Adicional[];
  imagen: string;
}

export interface Categoria {
  id: number;
  slug: string;
  nombre: string;
  descripcion: string;
  imagen: string;
}

export interface MenuData {
  categorias: Categoria[];
  platillos: Platillo[];
}
