const input=document.getElementById("input")
const btn=document.getElementById("btn")
const items=document.querySelector(".items")

btn.addEventListener('click',()=>{
    if(input.value){
        var li=document.createElement('li')
        li.innerHTML=input.value;
        items.appendChild(li);

        var btn2=document.createElement('btn')
        btn2.innerText='delete'
        btn2.setAttribute('class','btn')
        li.appendChild(btn2)

        }
        btn2.addEventListener('click',()=>{
            items.removeChild(li)
        })
})