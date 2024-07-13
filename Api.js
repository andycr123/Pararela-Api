const fetchMultipleResources = async function() {
    try {
        const [usersResponse, postsResponse, todoResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users'),
            fetch('https://jsonplaceholder.typicode.com/posts'),
            fetch('https://jsonplaceholder.typicode.com/todos/1')
        ]);

        const users = await usersResponse.json();
        const posts = await postsResponse.json();
        const todo = await todoResponse.json();

        const contentContainer = document.getElementById('content');

        // Mostrar usuarios
        if (users.length > 0) {
            contentContainer.innerHTML += '<div class="user-post-card">';
            contentContainer.innerHTML += '<h2>Usuarios</h2>';
            users.forEach(user => {
                contentContainer.innerHTML += `<p>${user.name} (${user.username}) - ${user.email}</p>`;
            });
            contentContainer.innerHTML += '</div>';
        }

        // Mostrar publicaciones
        if (posts.length > 0) {
            contentContainer.innerHTML += '<div class="user-post-card">';
            contentContainer.innerHTML += '<h2>Publicaciones</h2>';
            posts.forEach(post => {
                contentContainer.innerHTML += `<p>${post.title} por ${post.userId}</p>`;
            });
            contentContainer.innerHTML += '</div>';
        }

        // Mostrar tarea
        contentContainer.innerHTML += '<div class="user-post-card">';
        contentContainer.innerHTML += '<h2>Tarea</h2>';
        contentContainer.innerHTML += `<p>${todo.title} - Completado: ${todo.completed}</p>`;
        contentContainer.innerHTML += '</div>';

    } catch (error) {
        console.error('Error fetching resources:', error);
        throw error;
    }
}

fetchMultipleResources().catch(error => {
    console.error('Error in fetchMultipleResources:', error);
});