const node_for_click = document.getElementById("for_click")

function find_edit()
{
    const lastname = document.getElementsByTagName('span')[3]
    console.log(lastname.innerText)
    lastname.innerText = 'Kuzmicheva'

    const name = document.getElementsByTagName('span')[4]
    console.log(name.innerText)
    name.innerText = 'Lada'

    const date = document.getElementsByTagName('span')[7]
    console.log(date.innerText)
    date.innerText = '19th October 2004'
}

node_for_click.addEventListener("click",find_edit)
