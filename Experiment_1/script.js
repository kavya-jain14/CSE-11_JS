function calculateResult() {
    const n=document.getElementById("subjects").value;
    let total=0;
    let i;
    for(i=1;i<=n;i++){
let x=parseFloat(prompt("Enter the Subject Number " + (i)));   
total+=x;
    }
    
    let avg=total/n;

    let grade;
    if(avg>=90){
        grade="A";
    }  
     else if(avg>=80){
        grade="B";
    }
     else if(avg>=70){
        grade="C";
    }
     else if(avg>=60){
        grade="D";
    }
     else{
        grade="F";
    }
    let r;
    
    if (avg>40)
        r="Pass";
    else
        r="Fail";

    let result=document.getElementById("result").innerHTML=" Total marks "+total+"<br/>"+" Average marks "+avg+"<br/>"+" Grade "+grade+"<br/>"+" Result "+r;
}