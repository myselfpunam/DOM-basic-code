document.getElementById('btn-handler').addEventListener('click',function(){
  const textHandler = document.getElementById('text-handler')
  const newComment = textHandler.value;

  const p = document.getElementById('p-tag')
  const newElement = document.createElement('p')
  newElement.innerText =newComment;
  p.appendChild(newElement)

  textHandler.value=''

})