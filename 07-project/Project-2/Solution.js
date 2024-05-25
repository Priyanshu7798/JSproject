console.log("hi");

// We access value from Form Tag

const form = document.querySelector('form')
console.log(form);
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    // We access Height and Weight
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('.result')
    const guides=document.querySelector('.guide')

    if(height ==='' || height<0 || isNaN(height)){
        results.innerHTML(`Incorrect Height`)
    } else if (weight ==='' || weight<0 || isNaN(weight)){
        results.innerHTML(`Incorrect weight`)
    } else{
        const bmi=(weight / ((height*height)/10000)).toFixed(2);

        // show the result
        results.innerHTML=`<span>${bmi}</span>`

        //weight guide

        if(bmi<18.6){
            guides.innerHTML=`Under Weight ${bmi} < 18.6`
        }else if(18.6<=bmi && bmi < 24.9){
            guides.innerHTML=`Normal Range : 18.6 <= ${bmi} < 24.9`
        }else{
            guides.innerHTML=`Over Weight : ${bmi} > 24.9`
        }
    }

});