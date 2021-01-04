class UI{
    constructor(){
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.postBody = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.forState = 'add';
    }

    showPosts(posts){
        let output = '';

        posts.forEach(function(post){
            console.log(post)
            output += `
                <div class="card mb-3">
                    <div class="card-body">
                    <h2 class="card-title">${post.title}</h2>
                    <p class="card-text">${post.body}</p>
                    <a href="#" class="edit card-link" data-id="${post.id}">
                    <i class="fa fa-pencil"></i>
                    </a>

                    <a href="#" class="delete card-link" data-id="${post.id}">
                    <i class = "fa fa-remove"></i>
                    </a>
                    </div>
                </div>
            `;
        });
        this.post.innerHTML= output;
    }

    clearFields(){
        this.titleInput.value = '';
        this.postBody.value = '';
    }

    showAlert(message,className){
        //clearalertt///
        this.clearAlert();
        //Create div
        const div = document.createElement('div');
        //ClassName
        div.className = className;
        //append//
        div.appendChild(document.createTextNode(message));
        //parent//
        const postContainer = document.querySelector('.postsContainer');
        //posts//
        const post = document.querySelector('#posts')
        //Insert Alert//
        postContainer.insertBefore(div,posts);

        setTimeout(()=>{
            this.clearAlert();
        },3000)

    }

    clearInputID(){
        this.idInput = '';
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }

    //fillForm

    fillForm(data){

        this.titleInput.value = data.title;
        this.postBody.value = data.body;
        this.idInput = data.id;

        this.changeFormState('edit');

    }

    changeFormState(type){

        if(type === 'edit'){
            ///Update Button
            this.postSubmit.textContent = 'Update Post';
            this.postSubmit.className = 'post-submit btn btn-warning btn-block';
            ///Cancel button//
            const button = document.createElement('button');
            button.className = 'cancel-submit btn btn-light btn-block';
            button.appendChild(document.createTextNode('Cancel Post'));

            //parent and dup element for Insert//
            const cardform = document.querySelector('.card-form');
            const formend=document.querySelector('.form-end');
            //Insert button..
            cardform.insertBefore(button,formend);
        }else{
            ///Post it Button//
            this.postSubmit.textContent = 'Post It';
            this.postSubmit.className = 'post-submit btn btn-primary btn-block';
            //remove Cancel button//
            if(document.querySelector('.cancel-submit')){
                document.querySelector('.cancel-submit').remove();
            }
            //clear fields//
            this.clearFields();
            //clear ID///
            this.clearInputID();
            

        }
    }
}

export const ui = new UI();


