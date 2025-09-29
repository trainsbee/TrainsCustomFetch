
<form class="form-data" data-destination="users.create" calling-method="setUser" data-type="json">
    <input type="text" name="name" id="name">
    <input type="text" name="email" id="email">
    <input type="text" name="password" id="password">
    <button type="submit">Enviar</button>
</form>
<div id="users">
    <button type="button" onclick="getUser()">Get Users</button>
</div>
<script>
    const router = "http://localhost/TrainsCustomFetch/";
</script>
<script type="module" src="assets/helpers/http.js"></script>
<!-- Script principal como módulo -->
<script type="module">
    import { CustomFetch } from './assets/helpers/customFetch.js';
    
    
    const customFetch = new CustomFetch();

    // Hacer la función accesible globalmente
    window.getUser = async function() {
        try {
            const response = await customFetch.get(router + 'api/api.php', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
         
            console.log(response.data);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    };
</script>