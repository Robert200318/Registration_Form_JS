const my_email = document.getElementById("Email");
const username = document.getElementById("username");
const password = document.getElementById("password");

function registr(){
  
    // UserName is valid

    if(!(username.value.length >= 3 && username.value.length <= 20))
    {
        document.getElementById("demo1").style.color = "red";
        document.getElementById("demo1").style.fontSize = "10px";
       
    }

    else if(username.value[0].toLowerCase() == username.value[0])
    { 
        document.getElementById("demo1").style.color = "red";
        document.getElementById("demo1").style.fontSize = "10px";
        
    }
    else{
    document.getElementById("demo1").style.fontSize = "0px";
   }


    

    //Email is valid
    if(my_email.value.length < 1 )
    {
        document.getElementById("demo2").style.color = "red";
        document.getElementById("demo2").style.fontSize = "10px";
    }

    
    else if (true)
    {
        let count = 0;
        let aa ="";
        for(let i = (my_email.value.length-9);i<my_email.value.length; ++i)
        {
            aa =  aa + my_email.value[i];
        }
        
        if(aa != "@gmail.ru" && aa != "@gmail.am" )
        {
            document.getElementById("demo2").style.color = "red";
            document.getElementById("demo2").style.fontSize = "10px";
            count++;
        }

        for(let i = 0;i<=3; ++i)
        {
           if(my_email.value[i]=="@")
           {
            document.getElementById("demo2").style.color = "red";
            document.getElementById("demo2").style.fontSize = "10px";
           }
           else if(count == 0){document.getElementById("demo2").style.fontSize = "0px";}
        }

    }

    //Password is valid
    if(password.value.length < 5 || password.value.length >20)
    {
        document.getElementById("demo3").style.color = "red";
        document.getElementById("demo3").style.fontSize = "10px";
    }
    else{
        document.getElementById("demo3").style.fontSize = "0px";
    }
    let _uppercase = 0;
    let _lowercase = 0;
    let _number = 0; 

    for(let i = 0; i < password.value.length ; ++i)
    {
        if(password.value[i].codePointAt(0)>47 && password.value[i].codePointAt(0) < 58)
        { 
            _number++
        }
        else if(password.value[i].toLowerCase() == password.value[i])
        {     
          _lowercase++
        }
        else if(password.value[i].toUpperCase() == password.value[i])
        {   
            _uppercase++
        }
    }
    if(!(_uppercase >= 1  && _lowercase >= 1 && _number >= 1))
    {
        document.getElementById("demo3").style.color = "red";
        document.getElementById("demo3").style.fontSize = "10px";
    }
    else{document.getElementById("demo3").style.fontSize = "0px";}
   


}