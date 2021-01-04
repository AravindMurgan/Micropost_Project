import  {http} from './http';
import {ui} from './ui';

    ///get Posts
    document.addEventListener('DOMContentLoaded',getPosts);
    ///post submit event///
    document.querySelector('.post-submit').addEventListener('click',submitPost);
    //delete post//
    document.querySelector('#posts').addEventListener('click',deletePost);
    //edit post///
    document.querySelector('#posts').addEventListener('click',editPost);
    //cancel post//
    document.querySelector('.card-form').addEventListener('click',cancelPost);

 
//get Post from API
function getPosts(){
    http.get('http://localhost:3000/posts')
    .then(data=>ui.showPosts(data))
    .catch(error=>console.log(error))
}
function cancelPost(e){
    if(e.target.classList.contains('cancel-submit'));
    ui.changeFormState('add');
}

//Submit Input Post
function submitPost(e){
    //Input from User
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    
    //Form Validation//
    if(title === '' || body === ''){
        ui.showAlert('Please Enter the fields','alert alert-danger');
    }else{
        
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

//editpostt///
function editPost(e){
    if (e.target.parentElement.classList.contains('edit')){
       
        const id = e.target.parentElement.dataset.id;
        const body = e.target.parentElement.previousElementSibling.textContent;
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        console.log(title);

        const data = {
            id,
            body,
            title
        }

        ui.fillForm(data);
    }

 
}
  






