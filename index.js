 setInterval(()=>{
    const  time =document.getElementById("time");
    let date =new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let dayNight="AM"

    if(hours>12){
        hours=hours-12;
        dayNight="PM"
    }

    if(minutes<10){
        minutes="0"+minutes;
    }
    
    if(seconds<10){
        seconds="0"+seconds;
    }
   
    time.textContent=hours + ":" +minutes + ":"+ seconds + " "+ dayNight;
 })




















//  const  time =document.getElementById("time");
//  console.log(time);
//  const date =newdate();
//  const hours=date.getHours();
//  const minute=date.getMinutes();
//  const second=date.getSeconds();

//  time.textContent=hours + ":" minute +":" second;