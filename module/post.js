const loadPostData = () =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>displayPost(posts))
    .catch(err => handleError(err))
}

const displayPost = posts =>{

    const div = document.getElementById("post-container");

    posts.forEach(post => {
        const section = document.createElement("section");

        const h1 = document.createElement("h1");
        const p = document.createElement("p");
        h1.innerText = post.title;
        p.innerText = post.body;
        section.append(h1,p);
        div.appendChild(section)
    });
}

const handleError = err =>{
    alert(`Error Status: ${err.status} && Message: ${err.message} `)
}
