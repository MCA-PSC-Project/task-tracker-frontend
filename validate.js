function validation(e){
    event.preventDefault();

let uname = document.getElementById('uname').value;
 flag=true;

function validate_name(uname)
{
    if(uname==""){
        alert("cant be null");
        flag=false;
        return;
    }
    else {
        console.log(uname);
    }
}

 let email = document.getElementById('email').value;
 function validate_email(email)
 {
   if(email==""){
       alert("email cant be null");
       flag=false;
       return;
   }
   else if(email.match(/\S+@\S+\.+\S+/)){
    console.log(email);
   }
   else{
       alert("invalid");
       flag=false;
       return;
   }
 }

 let pass =document.getElementById('pass').value;

 function validate_password(pass)
 {  
    if(pass==""){
        alert("pass cant be null");
        flag=false;
        return;
    }
    else if(pass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/))
    {
         console.log(pass);
    }
    else{
        alert("Password should not be less than 8 digit, contain atleast one lowercase alphabet ,atleast one uppercase alphabet ,one digit(0-9) and one special character");
        flag=false;
        return;
    }

 }

let confirm_pass =document.getElementById('confpass').value;

function validate_confpass(pass,comfirm_pass)
{   
    if(confirm_pass==""){
      alert("confirm pass cant be null");
      flag=false;
      return;
    }
    else if(confirm_pass != pass )
    {
      alert("Password and confirm password does not match");
      flag=false;
      return;
    }
   else{
    console.log(confirm_pass);
   }
}

 let dob =document.getElementById('dob').value;

 function validate_dob(dob){
    let current_date=new Date();
     let date=new Date(dob);
    
     a=current_date.getTime();
     b=date.getTime();
      if(dob==""){
          alert("Cant be null");
          flag=false;
          return;
      }
      else  if(b> a)
      {
          alert("Date should not be greater than current date");
          flag=false;
          return;
      }
     else{
        console.log(dob);
     }
    }

let g  = document.getElementsByName("gender");
let gender;
if(g[0].checked){
   gender=g[0].value;
}
else if(g[1].checked){
    gender=g[1].value;
}
else if(g[2].checked){
    gender=g[2].value;
}

function validate_gender(){

    if(gender==""){
        alert("Gender can't be null");
        flag=false;
        return;
    }
    else {
        console.log(gender);
    }
}

let phone =document.getElementById('phone').value;

function validate_phone(phone){
   let ph=phone.slice(3);
     if(ph==""){
         alert("cant be null");
         flag=false;
         return;
     }
     else if(isNaN(ph)){
         alert("Phone number should only contain number");
         flag=false;
         return;
     }
     else if(ph.length!=10){
       alert("Not a valid phone number");
       flag=false;
       return;
     }
     else{
        console.log(phone);
     }
}


validate_name(uname);
validate_email(email);
validate_password(pass);
validate_confpass(pass,confirm_pass);
validate_dob(dob);
validate_gender();
validate_phone(phone);

 if(flag){

     document.write("<H1>NAME:"+uname+"<br></H1>");
     document.write("<H1>EMAIL:"+email+"<br></H1>");
     document.write("<H1>PASSWORD:"+pass+"<br></H1>");
     document.write("<H1>CONFIRM PASSWORD:"+confirm_pass+"<br></H1>");
     document.write("<H1>DATE OF BIRTH:"+dob+"<br>V");
     document.write("<H1>GENDER:"+gender+"<br>V");
     document.write("<H1>PHONE NUMBER:"+phone+"</H1>");
 }
 else{
     document.write("<H1>PLEASE FILL THE FORM AGAIN </H1>");
 }

 


 }
