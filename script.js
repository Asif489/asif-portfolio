// ===== Smooth Scroll =====

function scrollToJourney(){

document.getElementById("journey")
.scrollIntoView({

behavior:"smooth"

});

}


// ===== Project Popup =====

function showProject(title,description){

const popup=document.createElement("div");

popup.className="popup";

popup.innerHTML=`

<div class="popup-content">

<span class="close-btn">

✖

</span>

<h2>${title}</h2>

<p>${description}</p>

</div>

`;

document.body.appendChild(popup);


// Close button

popup.querySelector(
".close-btn"
)

.onclick=()=>{

popup.remove();

};


// Click outside popup

popup.onclick=(e)=>{

if(e.target===popup){

popup.remove();

}

};

}



// ===== AI Cursor =====

const cursor=
document.querySelector(
".custom-cursor"
);

const trail=
document.querySelector(
".cursor-trail"
);


// Mouse movement

document.addEventListener(

"mousemove",

(e)=>{

cursor.style.left=
e.clientX+"px";

cursor.style.top=
e.clientY+"px";

trail.style.left=
e.clientX+"px";

trail.style.top=
e.clientY+"px";

}

);


// Hover animation

const hoverItems=

document.querySelectorAll(

"a,button,.project-card,.gallery-card,.contact-box"

);

hoverItems.forEach(item=>{

item.addEventListener(

"mouseenter",

()=>{

cursor.style.transform=
"translate(-50%,-50%) scale(2)";

trail.style.transform=
"translate(-50%,-50%) scale(1.5)";

}

);


item.addEventListener(

"mouseleave",

()=>{

cursor.style.transform=
"translate(-50%,-50%) scale(1)";

trail.style.transform=
"translate(-50%,-50%) scale(1)";

}

);

});