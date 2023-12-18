const imgCont =  document.querySelector('.img-container');

const btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{
   addNewImage()
})

function addNewImage(){
    for(let i=1;i<=30;i++){
        const newImage = document.createElement('img');
        const random = Math.floor(Math.random()*1000);
        newImage.src = `https://picsum.photos/300?random${random}`;
    
        imgCont.appendChild(newImage)
    }
   

}
