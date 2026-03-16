let params=new URLSearchParams(location.search);

let brand=params.get("brand");

document.getElementById("title").innerText=brand+" Products";

let gallery=document.getElementById("gallery");

for(let i=1;i<=6;i++){

let img=document.createElement("img");

img.src="images/products/"+brand+"/cam"+i+".jpg";

gallery.appendChild(img);

}
