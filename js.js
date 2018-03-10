$(document).ready(function(){

    // $("#shd").click(function(){
    //     $("#test1").toggleClass("shadow");
    //     $("#shd").toggleClass("btnc");
    // });


    // PURE JS CODE

    const shd = document.querySelector('#shd');
    const test1 = document.querySelector('#test1');

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
    shd.addEventListener('click', function(){
        
           shd.classList.toggle('btnc');
           test1.classList.toggle('shadow');
     
    });
    

    $("#tran").click(function(){
        $("#test1").toggleClass("transit");
        $("#tran").toggleClass("btnt");
    });

    $("#grad").click(function(){
        $(".mainSection").toggleClass("mainSectionG");
        $("#grad").toggleClass("btnc");
    });

});

