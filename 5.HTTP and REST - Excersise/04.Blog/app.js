function attachEvents() {
    let BLOG_POST_URL = 'http://localhost:3030/jsonstore/blog/posts'
    let BLOG_COMMENTS_URL = 'http://localhost:3030/jsonstore/blog/comments'

    let btnLoadPosts = document.getElementById('btnLoadPosts');
    let postsDropDown = document.getElementById('posts');
    let btnViewPost = document.getElementById('btnViewPost');
    let postTitle = document.getElementById('post-title');
    let postBody = document.getElementById('post-body');
    let postComments = document.getElementById('post-comments');

    let allPostsArr = [];

    btnLoadPosts.addEventListener('click', loadPostList);
    btnViewPost.addEventListener('click', loadCommentList);

    async function loadPostList() {
        let blogRes = await fetch(BLOG_POST_URL);
        let blogData = await blogRes.json();
        let blogArr = Object.values(blogData);
        
        blogArr.forEach(blogPost => {
            allPostsArr.push(blogPost);
            let {body, id, title} = blogPost;
            let option = document.createElement('option');
            option.value=id;
            option.textContent = title.toUpperCase();
            postsDropDown.appendChild(option);
        });
    }

    async function loadCommentList() {

        let postID = document.querySelector('#posts').value;

        let article = allPostsArr.filter(e => e.id === postID)[0];
        postTitle.textContent = article.title;
        postBody.textContent = article.body;

        let commentRes = await fetch(BLOG_COMMENTS_URL);
        let commentData = await commentRes.json();
        let commentArr = Object.values(commentData);

        let validComments = commentArr.filter(e => e.postId === postID);

        postComments.innerHTML = '';

        validComments.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element.text;
            postComments.appendChild(li);
        });


        
    }

    
}

attachEvents();