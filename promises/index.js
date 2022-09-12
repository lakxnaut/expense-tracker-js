const ul = document.getElementById("ul");
const posts = [{
    title: "hello1", description: 'byeeeeee1'
},
{
    title: "hello2", description: 'byeeeeee2'
}
]

function getPost() {
    setTimeout(() => {
        let output = ''

        posts.map(post => {
            output = output + `<li>${post.title}</li>`
        }
        )
        document.body.innerHTML = output

    }, 1000)
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback();

    }, 2000);



}

createPost({ title: 'hello3', description: "byeee3" }, getPost)