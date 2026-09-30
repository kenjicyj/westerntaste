const categoryName = document.querySelectorAll('.choice');
const itemList = document.querySelectorAll('.all');

for(let i = 0; i < categoryName.length; i++){
    categoryName[i].addEventListener('click', filterPosts.bind(this, categoryName[i]));
}

function filterPosts(item){
    changeActivePosition(item);
    for(let i = 0; i < itemList.length; i++){
        if(itemList[i].classList.contains(item.attributes.id.value)){
            itemList[i].style.display = "block";
        } else {
            itemList[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem){
    for(let i = 0; i < categoryName.length; i++){
        categoryName[i].classList.remove('active');
    }
    activeItem.classList.add('active');
};