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
                    <div class="card-body>
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

    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }
}

export const ui = new UI();


