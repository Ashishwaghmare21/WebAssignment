var input=(e)=>{
    var text=document.getElementById('wrote');
    var value=(e.target.value);
      text.innerHTML=value;
}
document.getElementById('input-field').addEventListener('input',input);