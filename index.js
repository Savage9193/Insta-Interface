var arr=[
    {dp:"https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    story:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    story:"https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    story:"https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww",
    story:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D"},    
];

var storiyan =document.querySelector("#storiyan")
var clutter=""
arr.forEach(function(elem,idx){
  clutter += ` <div class="story">
  <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})



storiyan.innerHTML =clutter
 
storiyan.addEventListener("click",function(dets){
   con.style.display="none"
  
   
   document.querySelector("#full-screen").style.display="block"
   document.querySelector("#full-screen").style.backgroundImage=`url(${ arr[dets.target.id].story})`
   

    
   setTimeout(function(){
    document.querySelector("#full-screen").style.display="none"
    con.style.display="block"
    
   },2000)
})






var con = document.querySelector("#post")
var love = document.querySelector("i")





con.addEventListener("dblclick" , function (){
   love.style.transform='translate(-50%,-50%) scale(1)'
   love.style.opacity=0.8
   love.style.color="red"

   setTimeout(function(){
    love.style.opacity= 0
   },1000)
   setTimeout(function(){
    love.style.transform='translate(-50%,-50%) scale(0)'
    
   },2000)
});










