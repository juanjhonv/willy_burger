export interface Adicional {
  nombre: string;
  precio: number;
}

export interface Platillo {
  id: number;
  subcategoriaSlug: string;
  titulo: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

export interface SubCategoria {
  id: number;
  slug: string;
  nombre: string;
  categoriaSlug: string;
  descripcion: string;
  imagen: string;
  adicionales: Adicional[];
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
