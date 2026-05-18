const cursor=document.querySelector(".custom-cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

function scrollToJourney(){

document.getElementById("journey")
.scrollIntoView();

}

function showProject(title,description){

document.getElementById(
"popup"
).style.display="block";

document.getElementById(
"projectTitle"
).innerHTML=title;

document.getElementById(
"projectDescription"
).innerHTML=description;

}

function closePopup(){

document.getElementById(
"popup"
).style.display="none";

}

function showProject(title, description){

const popup = document.createElement("div");

popup.className="popup";

popup.innerHTML=`

<div class="popup-content">

<span class="close-btn">&times;</span>

<h2>${title}</h2>

<p>${description}</p>

</div>

`;

document.body.appendChild(popup);

document.querySelector(".close-btn")
.onclick=()=>{

popup.remove();

}

popup.onclick=(e)=>{

if(e.target===popup){

popup.remove();

}

}

}