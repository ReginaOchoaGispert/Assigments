const storage = localStorage;

//creates an item in the storage
if (!storage.getItem('bsg-posts'))
    storage.setItem('bsg-posts', JSON.stringify([], null, 4));

//find a post whit author and title
function findPost(author, title) {
    let list = getPosts();
    let res = list.filter(
        (post) => post.author === author && post.title === title
    );

    return res.length > 0 ? res : false;
}

//find a post by ID
function findPostById(id) {
    let list = getPosts();
    let res = list.filter((post) => post.id === id);

    return res.length > 0 ? res : false;
}

//function to generates a difficult id to duplicate
function generateID(post) {
    let now = new Date();
    let seed = Date.UTC(now.getFullYear(), now.getMonth(), now.getDay());
    let num = Math.round((Math.random() * seed) / now.getMilliseconds());

    return num;
}

//function to get all the posts
function getPosts() {
    const saved = storage['bsg-posts'];
    const parsed = JSON.parse(saved);
    return parsed;
}

//function to save posts
function savePost(post) {
    //complete the post info
    const today = new Date();
    post.date = `${today.getDate()}/${
        today.getMonth() + 1
    }/${today.getFullYear()}`;
    post.id = generateID();

    let list = getPosts();
    //checks if the posts already exits
    if (!findPost(post.author, post.title)) {
        list.push(post);
        const to_save = JSON.stringify(list, null, 2);
        storage.setItem('bsg-posts', to_save);
        return true;
    }
    return false;
}

//removes a post
function deletePost(id) {
    if (!findPostById(id)) return false;
    let list = getPosts();
    list = list.filter((post) => post.id !== id);
    const to_save = JSON.stringify(list, null, 2);
    storage.setItem('bsg-posts', to_save);

    return true;
}

//updates a post
function updatePost(id, property, value) {
    if (!findPostById(id)) {
        return false;
    }
    let list = getPosts();
    list = list.map((post) => {
        if (post.id === id) {
            post[property] = value;
        }
        return post;
    });
    const to_save = JSON.stringify(list, null, 2);
    storage.setItem('bsg-posts', to_save);
    return true;
}

export { savePost, getPosts, findPostById, deletePost, updatePost };
