function getHandler(){
  const handler = document.getElementById('handler-status')
  handler.innerText='Stay With US'
}
//option-2

  document.getElementById('handler-listener').addEventListener('click',function (){
  const handle =document.getElementById('handler-status')
  handle.innerText ='We Are SORRY,Hope we will serve better for you.'
})
//option-3 for add comment

document.getElementById('btn-field').addEventListener('click', function (){
  const inputField = document.getElementById('input-field')
  const inputText = inputField.value

  const p = document.getElementById('input-text')
  p.innerText= inputText

  inputField.value = '' 

})