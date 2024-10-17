const inputmonth = document.getElementById('currentId').value;
const inputyear = document.getElementById('nextFieldId').value;

const yearnow=new Date().getFullyear()%100;
const monthnow= new Date().getMonth()+1;

if(inputyear<yearnow){
    document.getElementById('year_error').textContent=`The year field must be ${yearnow} or more`;
    document.getElementById('year_error').style.display='block';
}
else if(inputyear==yearnow){
    if(inputmonth<monthnow){
        document.getElementById('month_error').textContent=`The month field must be ${monthnow} or more`;
        document.getElementById('month_error').style.display='block';
    }
    else{
        document.getElementById('month_error').style.display='none';
    }
}
else{
    document.getElementById('year_error').style.display='none';
}
