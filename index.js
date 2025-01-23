let arr =[
    {
        dp:"https://images.unsplash.com/photo-1737366984875-fb81751f6655?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1737366984875-fb81751f6655?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1737392497675-2e6314d3c73b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1737392497675-2e6314d3c73b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1737111869094-80ed40daca91?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1737111869094-80ed40daca91?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1737367561330-58e07edefa09?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4M3x8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1737367561330-58e07edefa09?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4M3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1736880705369-e345ec5fa278?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1736880705369-e345ec5fa278?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1711560707076-d50fbf8a3a26?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1711560707076-d50fbf8a3a26?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D"
    },
   
]
let patanhi=""
arr.forEach(function(vel ,idx){
   patanhi +=` <div class="box">
         <img id="${idx}" src="${vel.dp}" alt="">
    </div>`
})
 let story = document.querySelector("#story")
story.innerHTML=patanhi
story.addEventListener("click",(dets)=>{
   let data = arr[dets.target.id].story
   let fulls = document.querySelector("#full-screen")
   fulls.style.display= "block"
   fulls.style.backgroundImage=`url(${data})`
   setTimeout(function(){
    fulls.style.display= "none"
   },1000)
    
})

let container =document.querySelector(".contant")
let icon = document.querySelector(".dil")
container.addEventListener("dblclick",function (){
    icon.style.transform ='translate(-50%,-50%) scale(1)'
    icon.style.opacity="0.8"
    setTimeout(function(){
    icon.style.opacity ='0'
},1000)
setTimeout(function(){
    icon.style.transform ='translate(-50%,-50%) scale(0)'
},2000)
})
