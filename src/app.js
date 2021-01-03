import  {http} from './http';
import {ui} from './ui';

    ///get Posts
    document.addEventListener('DOMContentLoaded',getPosts);
    ///post submit event///
    document.querySelector('.post-submit').addEventListener('click',submitPost);
    //delete post//
    document.querySelector('#posts').addEventListener('click',deletePost);

 
//get Post from API
function getPosts(){
    http.get('http://localhost:3000/posts')
    .then(data=>ui.showPosts(data))
    .catch(error=>console.log(error))
}

//Submit Input Post
function submitPost(e){
    //Input from User
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    
    //Input data
    const data = {
        title,
        body
    }

    http.post('http://localhost:3000/posts',data)
        .then(data=>{
            getPosts();
            ui.clearFields();
            ui.showAlert('Post Added','alert alert-success');
        })
        .catch(err=>console.log(err));


}

function deletePost(e){
    const id = e.target.parentElement.dataset.id;

   if(e.target.parentElement.classList.contains('delete')){
    const id = e.target.parentElement.dataset.id;
    if(confirm('Are you Sure ?')){
        http.delete(`http://localhost:3000/posts/${id}`)
            .then(data=>{
                getPosts();
                ui.showAlert('Post Removed','alert alert-success');
            })
            .catch(err=>{
                console.log(err)
            });
    }
   }
}
  






