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
        }
        else{
            testT.classList.add('test1l');
            transformB.classList.add('btnt');
            testT.classList.remove('test1r');
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

    infiniteB.addEventListener("click", function(){

        if(infiniteB.classList.contains('btnc')){
            testT.classList.remove('test1infinite');
            infiniteB.classList.remove('btnc');
        }
        else{
            testT.classList.add('test1infinite');
            infiniteB.classList.add('btnc');
        }

        // infiniteB.classList.toggle('btnc');
        // testT.classList.toggle('test1infinite');

    })

});

