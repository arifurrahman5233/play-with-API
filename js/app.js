fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setposts(data))
    
const setposts = (posts) => {
    const postContainer = document.getElementById('post-container')
    for (const post of posts) {
        const postdiv = document.createElement('div')
      
        postdiv.innerHTML =`    <div class="post bg-light border border-secondary border-3 m-3 p-5 text-center">
        <h1>Play With API</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, dolorum.</p>
        <p>Post NO: ${post.id}</p>
    </div>
    `
    
        postContainer.appendChild(postdiv)
    }
}