//* Получаем ссылки на элементы DOM
// const form=document.getElementsByClassName('container')
const contactForm = document.getElementById('contact-form');
const contactsList = document.getElementById('contacts-list');

//* Получаем контакты из localStorage или создаем пустой массив, если их там нет
let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

// *Функция, которая отображает контакты в списке
renderContacts();
function renderContacts() {
    contactsList.innerHTML = '';
    let data  = JSON.parse(localStorage.getItem('contacts'))
    data.forEach(function(contact,index) {
      const li = document.createElement('li');
      contactsList.innerHTML += `
      <li>
        <img style="width: 50px;height: 50px;" src="https://avatarko.ru/img/kartinka/24/igra_Dota_2_Ember_Spirit_23840.jpg" alt="Contact avatar">
        <span>${contact.name}</span>
        <span>${contact.email}</span>
        <span>${contact.phone}</span>
        <button class="delete-button" onclick="deleteContact(${index})">Удалить</button>
        <button class="edit-button" onclick="editTask(${index})">Редактировать</button>
        </li>`;
        // contactsList.appendChild(li);
    });
}
function createTask() { 
    if (!localStorage.getItem("tasks-data")) { 
      // проверка на наличие ключа в localStorage 
      localStorage.setItem("tasks-data", "[]"); 
    } 
  // стягиваем данные с localStorage , чтобы через цикл отобразить все объекты 
    let data = JSON.parse(localStorage.getItem("tasks-data")); 
   
    list.innerHTML = ""; 
  // проходимся по массиву data при помощи forEach() и на каждой  
  // итерации добавляем в list новый <li>, 
  //  который содержит в себе данные одного объекта 
    data.forEach((elem, index) => { 
    // для корректного отображения 
    //  мы используем += , чтобы содержимое list не заменялось , 
    //  а прибавлялось к старому значению 
      list.innerHTML += ` 
      <li> 
        ${elem.task} 
        <button id="btnDel" onclick="deleteTask(${index})">delete</button> 
        <button  onclick="editTask(${index})">Edit</button> 
      </li> 
      `; 
      // вешаем прослушки onclick внутри тега ,  
      // потомучто кнопки создаются динамически 
    }); 
  } 

let count=0
  function deleteContact(index) {
    let data = JSON.parse(localStorage.getItem("contacts"));
    data.splice(index, 1);
    localStorage.setItem("contacts", JSON.stringify(data)); 
    console.log(count++)
    console.log(data)
    renderContacts();
  }



  
  
  //*----------------------------------------------------------------------
  // Обработчик события отправки формы
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Получаем значения из полей формы
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;
  

    const id = Date.now().toString();
   const newContact = { id, name, email, phone };
    contacts.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
     event.target.reset();
     console.log(`Добавлен новый контакт: ${name}, ${email}, ${phone}`);
     renderContacts();

    });
//*________________________________________________________________________________________
let name=document.querySelector('#name')
let email=document.querySelector('#email')
let phone=document.querySelector('#phone')
let modalWindow = document.querySelector('.modal')
// let editBtn = document.querySelector('.edit-button')
let jj=document.querySelector('#jj')
let gg=document.querySelector("#gg")
let vv=document.querySelector('vv')
let btnSave = document.querySelector(".modal_body button"); 
let closeModal = document.querySelector(".modal_footer button"); 


function editTask(index){
    modalWindow.style.display='block'
    let data=JSON.parse(localStorage.getItem('contacts'))
    jj.value=data[index].contact.name
    jj.setAttribute('id',index)

    gg.value=data[index].contact.email
    gg.setAttribute('id',index)

    vv.value=data[index].contact.phone
    vv.setAttribute('id',index)
}
closeModal.addEventListener('click',()=>{
    modalWindow.style.display='none'
})
btnSave.addEventListener('click',()=>{
    let nid=jj.nid
    let numid=gg.numid
    let url=vv.url
    let data=JSON.parse(localStorage.getItem('task-data'))
    let newObj={
        name:jj.value,
        email:gg.value,
        phone:vv.value,
    }
    data.splice(nid,1,newObj);
    data.splice(numid,1,newObj);
    data.splice(url,1,newObj)
    localStorage.setItem('task-data',JSON.stringify(data))
    modalWindow.style.display="none"
    renderContacts()
})


editTask.addEventListener('click',()=>{
    name.value=""
    email.value=""
    phone.value=""
})
console.log(editTask)

  








  
  