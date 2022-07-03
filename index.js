const form=document.querySelector("#submission");
let list=document.querySelector('#list');
const items=document.querySelector('#todo');
form.addEventListener('submit',function(e){
    e.preventDefault();
    let todo=items.value;
    let newLi=document.createElement('li');
    newLi.innerHTML=`
    <div class='container' style="width:40rem;">
          <div class="row">
        <div class="col" style="text-align: center; word-wrap: break-word;">
          ${ todo} 
        </div>
        <div class="col">
        <button id="btn1">X</button>
        </div>
    </div>
    </div>
`
    list.append(newLi);
    items.value="";
})
btn1.addEventListener('click',function(){
    list.innerHTML="";
})