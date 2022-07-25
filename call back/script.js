let button= document.getElementById('button')
let name,password,message

button.addEventListener('click',(e)=>{
 
name =document.getElementById('name').value

password= document.getElementById('password').value

let message=(alertmessage)=>{
    alert(alertmessage)
}

validateform(name,password,message)
})

let validateform=(name,password,callback)=>{
    if(name == "" || password == ""){
    callback("Please enter all the fields")
}else if(name.length<5){
    callback("Name should be atleat 7 characters")
}else if(password.length <8){
    callback("password should be atleat 8 characters")
}else{
    callback("Form is validated")
}
}