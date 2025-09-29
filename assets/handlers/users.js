async function processResponse(response, handlerName) {
    try {
        return await response;
    } catch (error) {
        console.error(`Error processing ${handlerName}:`, error.message);
        throw error;
    }
}

export async function getUser(response) {
    try {
        const data = await processResponse(response, 'Users');
        
        switch (data.status) {
            case 'success':
            console.log(data.data) 

            default:
                console.log(data.data)
                break;
        }
    } catch (error) {
        console.error('Error al procesar la respuesta:', error.message);
    }
}
export async function setUser(response) {
    const data = await processResponse(response, 'Users');
    console.log(data)
        // Validación en el handler
        if (!data?.data?.name) {
            console.error("El campo 'name' está vacío");
            return;
        }
    switch (data.status) {
        case 'success':
            console.log(data.data)
        
            break;

        case 'error':
            
            break;

        default:
             
            break;
    }
}
