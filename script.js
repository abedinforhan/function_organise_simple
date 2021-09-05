
document.getElementById('btn1').addEventListener("click", function(){
    const text=getInput("input1")
    setInnerText("gf1-text" , text)
  })

document.getElementById('btn2').addEventListener("click", function(){
     const text=getInput("input2")
     setInnerText("gf2-text" , text)
})

   document.getElementById('btn3').addEventListener("click", function(){
        const text= getInput('input3')
        setInnerText("gf3-text", text)
   
})
   
   

function getInput(inputID){
    const inputBox= document.getElementById(inputID)
    const inputBoxValue=inputBox.value;
   return inputBoxValue;
}

function  setInnerText(elementID, text){
    document.getElementById(elementID).innerText = text;
}













// document.getElementById('bd').addEventListener('click', function(){

//     const container= document.getElementById('bd-container')


//     const array=[" love Bangladesh"," love Bangladesh"," love Bangladesh"," love Bangladesh"," love Bangladesh"," love Bangladesh"," love Bangladesh"," love Bangladesh"," love Bangladesh"]

//     // array.forEach( x=> {
//     //     const p= document.createElement('p')
//     //     p.innerText=`${x}`
   
//     //    container.appendChild(p)
//     // }
//     // )


//      for(i=0;i<=8;i++){
//        const p= document.createElement('p')
//         p.innerText=` This is meal-${i+1} ${array[i]}`
//        container.appendChild(p)
//      }
    
// })



