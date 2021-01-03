import  {http} from './http';
import {ui} from './ui';

    ///get Posts
    document.addEventListener('DOMContentLoaded',getPosts);
    ///post submit event///
    document.querySelector('.post-submit').addEventListener('click',submitPost);

 
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
  






