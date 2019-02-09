const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');


// create element & render cafe

function renderCafe(doc){

    let li = document.createElement('li');

    let name = document.createElement('span');

    let blood_group = document.createElement('span');
    
    let priority = document.createElement('span');
    let city= document.createElement('span');
    let sex = document.createElement('span');
    let age = document.createElement('span');
     let flight = document.createElement('button');

    li.setAttribute('data-id', doc.id);

    name.textContent = doc.data().name;

    blood_group.textContent = doc.data().blood_group;
     priority.textContent = doc.data().priority;
     city.textContent = doc.data().city;
    sex.textContent = doc.data().sex;
    age.textContent = doc.data().age;

    flight.textContent = "Flight confirmation";
  

    li.appendChild(name);

    li.appendChild(blood_group);
    li.appendChild(priority);
   li.appendChild(age);
   li.appendChild(sex);
   li.appendChild(city);
  
  li.appendChild(flight);
   

    cafeList.appendChild(li);
  
flight.onclick = function() {
  window.location.replace("https://www.jetairways.com/EN/IN/home.aspx");
}
}



// getting data

db.collection('Heart_Reciever').where('blood_group','==','A+').orderBy('priority').get().then(snapshot => {

    snapshot.docs.forEach(doc => {

        renderCafe(doc);

    });

});
// saving data
 


form.addEventListener('submit', (e) => {

    e.preventDefault();

    db.collection('Heart').add({

        name: form.name.value,
        blood_group: form.blood_group.value
       
    });

    form.name.value = '';

    form.blood_group.value = '';
   
    

});