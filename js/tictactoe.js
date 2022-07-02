var tick_o = "O";
var tick_x = "X";
var countx = 0,countO = 0;
var check = true;  // toggle the X and O 
var positions = [1,0,1,0,1,0,0,1,0]; //stores the value in an array. 
var winnerdiv = document.querySelector("#winner");

function dellogin()
{
    document.querySelector(".login").style = "display:none;";
    document.querySelector(".maindiv").style = "display: block";
}

document.querySelector(".row").addEventListener("click",function(e){
    if(e.target.id)
        setVal(e.target); //creating a function which takes id as a parameter;
})

//setval function which evalutes x and o 
function setVal(curDiv){
    id = curDiv.id;
    if(check){
        if(positions[id] == 1 || positions[id] == 0)//adding if statment to stop the print of x and O after winner displayed
        {
        curDiv.innerHTML = tick_x;  //if true then we print X 
        positions[id] = tick_x; //adding the value at the specified id
        check = !check;
        checkwinner(!check);
        }  
    }
    else{
        if(positions[id] == 1 || positions[id] == 0)  //adding if statment to stop the print of x and O after winner displayed
        {
        curDiv.innerHTML = tick_o; //if false then we print o
        positions[id] = tick_o;//adding the value at the specified id
        check = !check;
        checkwinner(!check);
        }  
    } 
   
  // console.log(positions)
}
function checkwinner(type){ 
    
    const winnerindexs = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];   
    for(let i=0 ; i<winnerindexs.length ;i++)
    {
        let [a,b,c] = winnerindexs[i];
       if((positions[a]==positions[b]) && (positions[b]==positions[c]))
       {
        winnerdiv.innerHTML=type?"Winner X ":"winner O";
        setwinner(winnerindexs[i]);
        setDisable();
        countforpoints(type);
        break;
       }
    }
}
function setDisable()
{
    for(let i=0;i<positions.length;i++)
    {
        if(positions[i]==0 || positions[i]==1)
        {
            positions[i]=null;
        }
    }
}

function setwinner(index){
    for(let i = 0;i<index.length;i++){
        document.getElementById(index[i]).style.backgroundColor="green";
    }
}
//reset function to reset the X and O;
function gameReset(){
    var checkcon = confirm("Are You Sure You Want to Reset");
    if(checkcon)
    {
        check = true; 
        positions = [1,0,1,0,1,0,0,1,0]; 
        var resetrow = document.querySelectorAll(".row Div");
        // console.log(resetrow);
        for(let i=0;i<resetrow.length;i++)   
        {
            resetrow[i].innerHTML = "";
            winnerdiv.innerHTML = " ";
            resetrow[i].style.backgroundColor=" ";
        }
    }
}
function countforpoints(type)
{
   (type)? countx++ : countO++;
    document.querySelector("#countx").innerHTML=countx;
    document.querySelector("#countO").innerHTML=countO;
}



