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
   post1.style.display="none"
   post2.style.display="none"
  
   
   document.querySelector("#full-screen").style.display="block"
   document.querySelector("#full-screen").style.backgroundImage=`url(${ arr[dets.target.id].story})`
   

    
   setTimeout(function(){
    document.querySelector("#full-screen").style.display="none"
    post1.style.display="block"
    post2.style.display="block"
    
   },2000)
})






var post1 = document.querySelector("#post1")
var love = document.querySelector("#fir")





post1.addEventListener("dblclick" , function (){
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

var post2 = document.querySelector("#post2")
var love2 = document.querySelector("#sec")





post2.addEventListener("dblclick" , function (){
   love2.style.transform='translate(-50%,-50%) scale(1)'
   love2.style.opacity=0.8
   love2.style.color="red"

   setTimeout(function(){
    love2.style.opacity= 0
   },1000)
   setTimeout(function(){
    love2.style.transform='translate(-50%,-50%) scale(0)'
    
   },2000)
});






var istatus = document.querySelector("h6")


var btn = document.querySelector("#add")


var flag=0;
btn.addEventListener("click",function(){
    if (flag ==0)
    {
    istatus.innerHTML = "Friend"
    istatus.style.color ="green"
    btn.innerHTML = "Following"
    btn.style.background="#a0a3a3"
    flag=1
}
    else{
        istatus.innerHTML = "Unfriend"
        istatus.style.color ="red"
        btn.innerHTML = "Follow"
        btn.style.background="cadetblue"
        
        flag=0
}

})











