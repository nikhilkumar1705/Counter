const count = document.querySelector('.count')
const neg = document.querySelector('.neg');
const pos = document.querySelector('.pos');
const changeby = document.querySelector('.changeby');
const Reset = document.querySelector('.Reset');

pos.addEventListener('click', (e) => {
   
    const countvalue = parseInt(count.innerText);
    const changebyvalue = parseInt(changeby.value);
    count.innerText= countvalue + changebyvalue;

});


neg.addEventListener('click', (e) => {
    const countvalue = parseInt(count.innerText);
    const changebyvalue = parseInt(changeby.value);
    count.innerText = countvalue - changebyvalue;
    
});
Reset.addEventListener('click',(e)=>{
    count.innerText=0;
})
