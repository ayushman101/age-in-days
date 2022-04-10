function clickme()
{
 var year=prompt("Write your birthyear","2000");
 var ageindays=(2022-year)*365;
    
 for(let i=year; i<=2022;i++)
    {
        if(i%4===0)
            ageindays++;
    }
let agenode=document.createElement("h3");
agenode.setAttribute("id","agenode");
let agetext=document.createTextNode(`Your age in days is ${ageindays}`);
agenode.appendChild(agetext);
document.getElementById("text-inside").appendChild(agenode);
}

function reset()
{
    document.getElementById("agenode").remove();
}