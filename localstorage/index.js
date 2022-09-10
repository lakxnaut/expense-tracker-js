


const form = document.getElementById("form");

form.addEventListener('submit', formsubmit)
const items = document.getElementById("items");


// Object.keys(localStorage).map(function (key) {
// const li = document.createElement("li");
// li.className = 'list-item';

// li.appendChild(document.createTextNode(key))
// console.log(li);

// items.appendChild(li)

// });


axios('https://crudcrud.com/api/c3575173f794430896847bbb59de8132/add').then(resp => {
    resp.data.map(item => {
        const li = document.createElement("li");
        li.className = 'list-item';

        li.appendChild(document.createTextNode(item.fname))
        li.appendChild(document.createTextNode(item.email))
        console.log(li);

        items.appendChild(li)
    }





    )
})


function formsubmit(e) {
    e.preventDefault();
    const fname = e.target.fname.value;
    const email = e.target.email.value;




    const obj = {
        fname, email
    }

    axios.post('https://crudcrud.com/api/c3575173f794430896847bbb59de8132/add', obj).then(resp => console.log(resp).catch(error => console.log(error)))
    // localStorage.setItem(email, JSON.stringify(obj))

    return false
}