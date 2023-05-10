

let temp=''
window.addEventListener('DOMContentLoaded',()=>{
    fetch('https://ajevisally.onrender.com/new-blog')

    .then(response => response.json())
    .then(data =>{
        let blogs = data
        let blogList = ''
        for(let blog of blogs){
            blogList += `							<article>
            <span class="image">
                <img src="/images/blog-1-720x480.jpg" alt="">
            </span>
            <header class="major">
                <h3>${blog.snippet}</h3>

                <p><br> <span>Ajevi Sally</span> | <span>${blog.createdAt} </span></p>

                <div class="major-actions">
                    <a href="/blogs-read/${blog._id}" class="button small next scrolly">Read Blog</a>
                </div>
            </header>
        </article>`
        }
        document.querySelector('#display').innerHTML= blogList
    } )
    .catch((err)=>{
        console.log(err)
    })
    fetch('http://localhost:3000/comment')

    .then(response => response.json())
    .then(data =>{
        let comments = data
        let commentList = ''
        for(let comment of comments){
            blogList += `<div class="contact-method" >
            <span class="icon alt fa-comment"></span>
            <h5>Name: ${comment.name} </h5>
            <span>${comment.comment}</span>
        </div>`
        }
        document.querySelector('#comment').innerHTML= commentList
    } )
    .catch((err)=>{
        console.log(err)
    })
   
})
