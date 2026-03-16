let brands=[

"hikvision",
"dahua",
"uniview",
"tplink",
"tapo"

];

let grid=document.getElementById("brandGrid");

brands.forEach(function(name){

let box=document.createElement("div");

box.innerHTML=

'<img src="images/brands/'+name+'.jpg" width="120"><p>'+name+'</p>';

box.onclick=function(){

location.href="products.html?brand="+name;

};

grid.appendChild(box);

});
