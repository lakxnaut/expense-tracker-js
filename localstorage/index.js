


const form = document.getElementById("form");



form.addEventListener('submit', formsubmit)
const items = document.getElementById("items");


window.addEventListener('DOMContentLoaded', ApiCall)


function ApiCall() {
    axios('https://crudcrud.com/api/0b3abdd654f14e98b4a106c6b89de627/add').then(resp => {
        resp.data.map(item => {
            const li = document.createElement("li");
            const button = document.createElement("button")
            button.appendChild(document.createTextNode("delete"));
            button.className = 'deletebutton'
            li.className = 'list-item';
            button.addEventListener('click', deleteItem)

            function deleteItem(e) {


                const id = item._id

                axios.delete(`https://crudcrud.com/api/0b3abdd654f14e98b4a106c6b89de627/add/${id}`)


            }


            li.appendChild(document.createTextNode(item.fname))
            li.appendChild(document.createTextNode(item.email))
            li.appendChild(button)
            // console.log(li);

            items.appendChild(li)
        }





        )
    })
}


function formsubmit(e) {
    e.preventDefault();
    const fname = e.target.fname.value;
    const email = e.target.email.value;




    const obj = {
        fname, email
    }

    axios.post('https://crudcrud.com/api/0b3abdd654f14e98b4a106c6b89de627/add', obj).then(resp => console.log(resp).catch(error => console.log(error)))
    // localStorage.setItem(email, JSON.stringify(obj))

}


items.addEventListener('click', deleteItem);


function deleteItem(e) {

    console.log(e.target);

    if (e.target.classList.contains('deletebutton')) {
        // e.target.parentElement.remove();
    }


}