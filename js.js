$(document).ready(function(){

/* Login form for the techer */
$(".techer").click(function(){

$(".h").text("تسجيل دخول معلم");
$("#enter1").show()
$("#enter2").hide()

if($("form").css("top")=="-450px")
    $("form").animate({
        
        top:"180px"
    },1000)
else{
 
    $("form").css("top","-450px");
    $("form").animate({
        
        top:"180px"
    },1000)
}   
 
})
/* ----------------------------- */
/* Login form for the student */
$(".student").click(function(){

$(".h").text("تسجيل دخول طالب");   
$("#enter2").show()
$("#enter1").hide()

if($("form").css("top")=="-450px")
$("form").animate({
    
    top:"180px"
},1000)
else{

$("form").css("top","-450px");
$("form").animate({
    
    top:"180px"
},1000)
}  
 
})
/*---------------------------- */

names_techer=["محمد","أحمد"]
names_student=["صالح","خالد"]

$("#enter1").click(function(){

    names_techer.forEach(name=> {
        
    if($("#name").val()==name){
        alert(" مرحبا أستاذ "+name)
        window.open("teacherBoard.html")
    }
 
        });


     names_student.forEach(name=> {
        
    if($("#name").val()==name){
        alert("عفوا الرجاء الدخول من الصفحة المخصصة للطلاب")
    }
        }); 
})
$("#enter2").click(function(){
    
        names_student.forEach(name=> {
            
        if($("#name").val()==name){
            alert(" مرحبا  "+name)
            window.open("studentBoard.html")
            
            
        }    
            });
    
       names_techer.forEach(name=> {
            
        if($("#name").val()==name){
            alert("عفوا الرجاء الدخول من الصفحة المخصصة للمعلمين")
        }
            });
       
    })

/* -------------------------------------*/

/* This is for E-paper for the student */
$("#send").click(function(){

alert("تم إرسال الإجابة")
$(".container input").val("")

})

$("#delet").click(function(){

$(".container input").val("")
    
})

$("#ss").click(function(){

$(".boardsCloected input").val(result1);


})















})