

let temp=''
window.addEventListener('DOMContentLoaded',()=>{
    fetch('http://localhost:3000/new-blog')

    .then(response => response.json())
    .then(data =>{
        let blogs = data
        let blogList = ''
        let admList = ''
        for(let blog of blogs){
            blogList += `							<article>
            <span class="image">
                <img src="/images/blog-1-720x480.jpg" alt="">
            </span>
            <header class="major">
                <h3>${blog.snippet}</h3>

                <p><br> <span>Ajiv Sally</span> | <span>${blog.createdAt} </span></p>

                <div class="major-actions">
                    <a href="/blogs-read/${blog._id}" class="button small next scrolly">Read Blog</a>
                </div>
            </header>
        </article>`
        admList +=` <div class="col-md-12 d-flex blogs">
        <h3 style="color: #555;">01</h3>
        <div class="image">
            <img src="/images/one.jpg" alt="" class="image">
        </div>
        <div class="details">
            <p>${blog.blogTitle} </p>
            <p>${blog.snippet}</p>
            <p>${blog.createdAt} </p>
        </div>
        <div class="icons">
            <a href="/delete/${blog._id}" class="text-decoration-none"><i class="fa fa-trash"></i></a>
        </div>
    </div>`
        }
        document.querySelector('#display').innerHTML= blogList
        document.querySelector('#blog-disp').innerHTML= admList

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
    const preloader = document.querySelector('.preloader')
    setTimeout(()=>{
        preloader.classList.add('hide')
    },2000)
    fetch('http://localhost:3000/new-blog')

    .then(response => response.json())
    .then(data =>{
        let blogs = data
        let counter = 0
        let admList = ''
        for(let blog of blogs){
        counter +=1
        admList +=` <div class="col-md-12 d-flex blogs mb-3">
        <h3 style="color: #555;">${counter}</h3>
        <div class="image">
            <img src="/images/one.jpg" alt="" class="image">
        </div>
        <div class="details">
            <p>${blog.blogTitle} </p>
            <p><strong>${blog.snippet}</strong></p>
            <p>${blog.createdAt} </p>
        </div>
        <div class="icons">
            <a href="/delete/${blog._id}" class="text-decoration-none delete"><i class="fa fa-trash"></i></a>
        </div>
        
    </div>
    `
        }
        
        document.querySelector('#blog-disp').innerHTML= admList
        const closebtn = document.querySelector('.closer')
        const deletebtn = document.querySelector('.delete')
        const alerter = document.querySelector('.alerter')
       


        closebtn.addEventListener('click',()=>{
            if(alerter.classList.contains('hide')){
                
                alerter.classList.remove('show')


            }
            else{
                alerter.classList.add('hide')
                alerter.classList.remove('show')


            }
        })
        deletebtn.addEventListener('click',()=>{
            alerter.classList.add('show')
        })
    } )
    .catch((err)=>{
        console.log(err)
    })
  
   
})
