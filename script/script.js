var menuShowStatus;
function toggleUl(e) {  
    for (let i = 0; i < 19; i++) {
      let heading = document.getElementsByTagName("h4")[i];
      if (e.target == heading) {        
        let mid = e.target.id;
        let myindex = -2;
        console.log(mid);
        if(mid!="")
        {myindex=1;}
        console.log(myindex);
        let ulr = document.getElementsByTagName("ul")[i+myindex];        
        let articleBox = document.querySelectorAll(".article-box")[i];
        articleBox.classList.toggle("ul");
        ulr.classList.toggle("ul-2");
        
      }
    }
  }
  
  addEventListener("click", toggleUl);
  
function setmenuStatus()
{
  if(menuShowStatus == null)
  {
    menuShowStatus = "fullmenu";  }

    console.log(menuShowStatus);
}

function ShowHideSideMenu()
{  
  console.log("called showhidesidemenu");
  if(menuShowStatus=="fullmenu")
  {
      menuShowStatus ="iconmenu";
      var obj = document.getElementById("fullmenu");
      var obj1 = document.getElementById("iconmenu");
      obj.style.display = "none";
      obj1.style.display = "block";
      console.log("hide full menu show icon");
  }
  else
  {
    menuShowStatus ="fullmenu";
    var obj = document.getElementById("fullmenu");
    var obj1 = document.getElementById("iconmenu");
    obj.style.display = "block";
    obj1.style.display = "none";
    console.log("hide icon menu show full menu");
  }
}


function ShowSideMenu(btn)
{    
  var obj = document.getElementById("sidemenu");
  var objClientTitle = document.getElementById("clientTitle");

  
  if(obj.style.display == "none")
  {      
      obj.style.display = "block";
      btn.style.marginRight = "0px";
      objClientTitle.style.display = "block";
  }
  else
  {    
    obj.style.display = "none";      
      btn.style.marginRight = "180px";
      objClientTitle.style.display = "none";
  }
}

function clicktab(tab){
  var tabdetid = tab.id+"_detail";
  document.getElementById("tab1").classList.remove("seltab");
  document.getElementById("tab2").classList.remove("seltab");
  document.getElementById("tab3").classList.remove("seltab");
  tab.classList.add("seltab");
  document.getElementById("tab1_detail").style.display="none";
  document.getElementById("tab2_detail").style.display="none";
  document.getElementById("tab3_detail").style.display="none";
  document.getElementById(tabdetid).style.display="block";

}

function showMenu (menuname)
{
  document.getElementById(menuname).style.display="block";
}

function hideMenu(menuname)
{
  document.getElementById(menuname).style.display="none";
}



const article = document.getElementsByTagName('article')[0]
const hamburger = document.querySelectorAll('.bx-menu')[0]
const container = document.querySelectorAll('.container')[0]
const sidebar = document.getElementsByTagName('sidebar')[0]
console.log(container);
function sidebarToggle(e) {
  
  if(e.target == hamburger){
    article.classList.toggle('article-hide')
    article.classList.toggle('article-show')
    container.classList.toggle('container-widthMax')
    container.classList.toggle('container-widthMin')
    sidebar.classList.toggle('sidebar-2')

    article.style.overflowY = 'hidden'
    console.log('hello');
  }
}

addEventListener('click',sidebarToggle)


function generateAPIKey()
{
  let clientKey = "4d939ba0-3548-4b49-b008-e4fe5de3c3ea";
  let clientSecret = "u73HnND5LUWr3AvvCWiGAg-xNSwCjnvKUCkmZUp23zhiQ-0AXgFilTB0WrC9WUwKT9bQ";
  document.getElementById("apiCKey").value = clientKey;
  document.getElementById("apiCSecret").value = clientSecret;
}