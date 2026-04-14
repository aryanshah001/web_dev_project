const second = document.querySelector("li:nth-child(2)")
const newli = document.createElement('li')
newli.textContent = 'js edited'
second.replaceWith(newli)


const li = document.querySelector("li:lastElementChild")
li.remove()