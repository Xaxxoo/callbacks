const posts = [
    { title: 'post one', body: 'This is the first post' },
    { title: 'post second', body: 'This is the second post' },
    { title: 'post three', body: 'This is the third post' },
    { title: 'post four', body: 'This is the fourth post' },
];



function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post)
    callback();
  }, 3000)
};

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}: ${post.body}</li>`;
     
    });
   document.getElementById('child').innerHTML = output
    
    
  }, 1000)
}

createPost({ title: 'post five', body: 'This is the fifth post' }, getPosts);
getPosts();

