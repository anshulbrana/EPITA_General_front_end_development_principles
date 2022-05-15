const boxSquare = document.querySelector('#boxSquare')

boxSquare.addEventListener('click', function(e){
    console.log('Box is dissappeared')
    document.getElementById("boxSquare").style.display = "none"

    // document.getElementById("boxSquare").style.display = "no
    // $(this).css({
    //     left: Math.random() * ($('.box').width() - $(this).width()),
    //     top: Math.random() * ($('.box').height() - $(this).height())
    //   });

    const left = Math.floor(Math.random()*600)+1
    const top = Math.floor(Math.random()*600)+1
    boxSquare.style.left = left+"px";
    boxSquare.style.top = top+"px";

    setTimeout(function () {
        document.getElementById("boxSquare").style.display = "block"

        if (newState == -1) {
            boxSquare.style.left = left+"px";
    boxSquare.style.top = top+"px";
        }
    }, 5000);



    



})
