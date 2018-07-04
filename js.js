$(document).ready(function(){

    // $("#shd").click(function(){
    //     $("#test1").toggleClass("shadow");
    //     $("#shd").toggleClass("btnc");
    // });


    // PURE JS CODE

    const shadowB = document.querySelector('#shadowButton');
    const testT = document.querySelector('#testT');

    // VERSION 1 - LONG ONE
    // shd.addEventListener('click', function(){
    //     if(shd.classList.contains('btnc')){
    //        shd.classList.remove('btnc');
    //        test1.classList.remove('shadow');
    //     }
    //     else{
    //        shd.classList.add('btnc');
    //        test1.classList.add('shadow');
    //     }
    // });

    // VERSION 2 - SHORT ONE
    shadowB.addEventListener('click', function(){
        
           shadowB.classList.toggle('btnc');
           testT.classList.toggle('shadow');
     
    });
    
    // $("#tran").click(function(){
    //     $("#test1").toggleClass("transit");
    //     $("#tran").toggleClass("btnt");
    //     $('#test1').toggleClass('test1l');
    // });

    const transformB = document.querySelector('#transformButton');

    transformB.addEventListener('click', function(){

        if(transformB.classList.contains('btnt')){
            testT.classList.remove('test1l');
            testT.classList.add('test1r');
            transformB.classList.remove('btnt');

            setTimeout(function(){
                testT.classList.remove('test1r');
            },3000)
        }
        else{
            testT.classList.remove('test1r');
            testT.classList.add('test1l');
            transformB.classList.add('btnt');
            
            setTimeout(function(){
                testT.classList.remove('test1l');
            },3000)
        }

    });


    const gradientB = document.querySelector('#gradientButton');
    const main = document.querySelector('#main');

    gradientB.addEventListener('click', function(){

        gradientB.classList.toggle('btnc');
        main.classList.toggle('mainSectionG');

    })

    // $("#gradientB").click(function(){
    //     $(".mainSection").toggleClass("mainSectionG");
    //     $("#gradientB").toggleClass("btnc");
    //     //setTimeout(() => current.classList.remove('fade-in'), 500);
    // });


    //after clicking infinite and transform, when removing infinite testText is going up and down
    const infiniteB = document.querySelector("#infiniteButton");

    var changer;
    infiniteB.addEventListener("click", function(){

        // XXXXXXXXXXXXXXXXXXXXX CSS version don't working well, after first using infinite
        // if(infiniteB.classList.contains('btnc')){
        //     testT.classList.remove('test1infinite');
        //     infiniteB.classList.remove('btnc');
        // }
        // else{
        //     testT.classList.add('test1infinite');
        //     infiniteB.classList.add('btnc');
        // }

        // infiniteB.classList.toggle('btnc');
        // testT.classList.toggle('test1infinite');
        
        if(infiniteB.classList.contains('btnc')){
            clearInterval(changer);
            infiniteB.classList.remove('btnc');
            testT.style.color = "#530853";
        }
        else{
            changer = setInterval(colorChange, 1000);
            infiniteB.classList.add('btnc');
            colors = ["black", "green", "blue", "pink"];
        }

    })
    let colors;
    let i = 0;
    function colorChange(){
        if(i===colors.length){
            i=0;
        }
        testT.style.color = colors[i];
        i++;
    }
});

