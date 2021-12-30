export const MAS_VENDIDOS: string = `SELECT DISTINCT ID_ProveedorServicios,NombreServicio,cat_gruposproductoproveedores.ID_GrupoProducto,cat_productos.EsPin,Base64Imagen FROM cat_proveedoresservicios 
INNER JOIN cat_gruposproductoproveedores ON ID_ProveedorServicios = cat_gruposproductoproveedores.ID_ProveedorServicio
INNER JOIN cat_productos ON ID_ProveedorServicios = cat_productos.ID_ProveedorServicio WHERE ID_GrupoProducto = 12 or ID_GrupoProducto = 13 ORDER BY NombreServicio`;

export const RECARGAS: string = `SELECT DISTINCT ID_ProveedorServicios,NombreServicio,cat_gruposproductoproveedores.ID_GrupoProducto,cat_productos.EsPin,Base64Imagen FROM cat_proveedoresservicios 
INNER JOIN cat_gruposproductoproveedores ON ID_ProveedorServicios = cat_gruposproductoproveedores.ID_ProveedorServicio
INNER JOIN cat_productos ON ID_ProveedorServicios = cat_productos.ID_ProveedorServicio WHERE ID_GrupoProducto = 12  ORDER BY NombreServicio`;

export const SERVICIOS: string = `SELECT * FROM totem.cat_gruposproducto`;