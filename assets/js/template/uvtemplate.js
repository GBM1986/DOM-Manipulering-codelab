

const mySubjects = Array.from(document.getElementsByTagName('section'));
const myNavTag = document.getElementById('mainMenu');


generateMenu(mySubjects, myNavTag);


function generateMenu(menuSubjects, parentTag) {
    console.log('creating menu in: ' + parentTag.id);

    parentTag.innerHTML = "";

    myMenuList = document.createElement('ul');

    menuSubjects.map((menuItem) => {
        console.log(menuItem.id);
        myListItem = document.createElement('li');
        menyItem = document.createElement('a');
        menyItem.innerText = menuItem.getElementsByTagName('h2')[0].innerText;
        menyItem.href = '#' + menuItem.id;
        myListItem.appendChild(menyItem);

        myMenuList.appendChild(myListItem);
    });

    parentTag.appendChild(myMenuList);


}