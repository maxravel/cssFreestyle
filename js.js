/*function shadow(){
    //document.getElementById("test1").style.color="black";
    document.getElementById("test1").className = "shadow";
    //document.getElementById('test1').classList.add('shadow');
};
*/

$(document).ready(function(){
    $("#shd").click(function(){
        $("#test1").toggleClass("shadow");
        $("#shd").toggleClass("btnc");
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