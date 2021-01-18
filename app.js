// Code to display error messages on web pages

function valid()
{

  var inpValue=document.getElementById("inp").value;
  var reg=/^[6-9][0-9]{9}$/g;
  var res=reg.test(inpValue);

  if(res==true)
  {
    alert("Mobile number accepted");
    return true;
  }
  else
  {
    document.getElementById("inp").style.border="2px solid red";
    document.getElementById("msg").style.visibility="visible";
    return false;
  }

  

}


