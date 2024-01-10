document.body.addEventListener('click',(event)=>{
    let snow = document.createElement('span')
    console.log(event.clientX , event.clientY);
    snow.style.left = event.clientX +"px"
    snow.style.top = event.clientY +"px"
    snow.classList.add('snowflake')
    let size =Math.floor(Math.random()*100)
    snow.style.width = size +"px";
    snow.style.height = size +"px";
    document.body.append(snow)

    setTimeout(() => {
        snow.remove()
    }, 2000);
})