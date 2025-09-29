// Configuración base de la API
const API_BASE = 'http://localhost/TrainsCustomFetch/api';

// Definición de rutas de la API
export const routes = {
    // Usuarios
    users: {
        // CRUD básico
        getAll: () => `${API_BASE}/api.php`,
        getOne: (id) => `${API_BASE}/api.php?id=${id}`,
        create: () => `${API_BASE}/api.php`,
        update: (id) => `${API_BASE}/api.php?id=${id}`,
        delete: (id) => `${API_BASE}/api.php?id=${id}`,
        
        // Autenticación
        login: () => `${API_BASE}/auth.php?action=login`,
        profile: () => `${API_BASE}/auth.php?action=profile`,
        
        // Métodos personalizados
        search: (query) => `${API_BASE}/api.php?search=${encodeURIComponent(query)}`
    },
    
    // Productos
    products: {
        getAll: () => `${API_BASE}/products`,
        getOne: (id) => `${API_BASE}/products/${id}`,
        create: () => `${API_BASE}/products`,
        update: (id) => `${API_BASE}/products/${id}`,
        delete: (id) => `${API_BASE}/products/${id}`
    },
    
    // Otras rutas pueden ir aquí
    auth: {
        login: () => `${API_BASE}/auth/login`,
        register: () => `${API_BASE}/auth/register`
    }
};

export default routes;
