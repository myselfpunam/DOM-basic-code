 document.getElementById('delete-confirm').addEventListener('keyup',function(evt){
  const text = evt.target.value;
  const deleteButton = document.getElementById('btn-delete');
  if(text === 'delete'){
    deleteButton.removeAttribute('disabled');
  }
  else{
    deleteButton.setAttribute('disabled',true);
  }

 })
 document.getElementById('btn-delete').addEventListener('click', function(){
  const secret = document.getElementById('info-delete')
  secret.style.display='none'
 })