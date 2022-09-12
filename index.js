const form = document.getElementById("addForm");
const items = document.getElementById("items");
const filter = document.getElementById('filter')
form.addEventListener('submit', addItems);
items.addEventListener('click', deleteitem);

filter.addEventListener('keyup', filterItem)



function addItems(e) {
    e.preventDefault();
    const InputValue = document.getElementById("inputVal");

    const InputDesc = document.getElementById("inputDesc");
    if (InputValue.value !== "" || InputDesc.value !== "") {
        const li = document.createElement('li');
        li.className = "list-group-item"
        li.appendChild(document.createTextNode(`${InputValue.value} ${InputDesc.value}`))

        const dltbtn = document.createElement('button');
        dltbtn.appendChild(document.createTextNode('x'));
        dltbtn.classList = 'btn btn-danger btn-sm float-right delete';

        const editbtn = document.createElement('button')
        editbtn.className = "btn btn-success btn-sm delete";
        editbtn.appendChild(document.createTextNode('Edit'))
        li.appendChild(editbtn)
        li.appendChild(dltbtn)

        items.appendChild(li)

        localStorage.setItem('inputvalue', InputValue.value);
        localStorage.setItem('inputdesc', InputDesc.value);
        InputValue.value = ''
        InputDesc.value = ''

    }




}


function deleteitem(e) {
    if (e.target.classList.contains('btn-danger')) {
        e.target.parentElement.remove();
    }

}

function filterItem(e) {
    let text = e.target.value.toLowerCase();
    let item = items.getElementsByTagName('li');
    Array.from(item).map(function (itm) {
        let itemName = itm.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            itm.style.display = 'block';
        } else {
            itm.style.display = 'none';
        }


    })

}













// let form = document.getElementById('addForm');
// let itemList = document.getElementById('items');
// let filter = document.getElementById('filter');

// // Form submit event
// form.addEventListener('submit', addItem);
// // Delete event
// itemList.addEventListener('click', removeItem);
// // Filter event
// filter.addEventListener('keyup', filterItems);

// // Add item
// function addItem(e) {
//     e.preventDefault();

//     // Get input value
//     let newItem = document.getElementById('item').value;

//     // Create new li element
//     let li = document.createElement('li');
//     // Add class
//     li.className = 'list-group-item';
//     // Add text node with input value
//     li.appendChild(document.createTextNode(newItem));

//     // Create del button element
//     let deleteBtn = document.createElement('button');

//     // Add classes to del button
//     deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//     // Append text node
//     deleteBtn.appendChild(document.createTextNode('X'));

//     // Append button to li
//     li.appendChild(deleteBtn);

//     // Append li to list
//     itemList.appendChild(li);
// }

// // Remove item
// function removeItem(e) {
//     if (e.target.classList.contains('delete')) {
//         if (confirm('Are You Sure?')) {
//             let li = e.target.parentElement;
//             itemList.removeChild(li);
//         }
//     }
// }

// // Filter Items
// function filterItems(e) {
//     // convert text to lowercase
//     let text = e.target.value.toLowerCase();
//     // Get lis
//     let items = itemList.getElementsByTagName('li');
//     // Convert to an array
//     Array.from(items).forEach(function (item) {
//         let itemName = item.firstChild.textContent;
//         if (itemName.toLowerCase().indexOf(text) != -1) {
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// }