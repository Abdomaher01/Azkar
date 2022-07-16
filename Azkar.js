document.getElementById("myrange").addEventListener('change',function change_font_size(){
    var myrange=document.getElementById("myrange");
    var value=parseInt(myrange.value)
    if(value>90){
        var body=document.getElementById("body");
        body.style.fontSize = "xxx-large";
        document.getElementById("rangespan").style.fontSize = "x-large";
    }
    else if(value<90 && value>72){
        var body=document.getElementById("body");
        body.style.fontSize = "xx-large";
        document.getElementById("rangespan").style.fontSize = "x-large";
    }
    else if(value<72 && value>54){
        var body=document.getElementById("body");
        body.style.fontSize = "x-large";
    }
    else if(value<54 && value>36){
        var body=document.getElementById("body");
        body.style.fontSize = "larger";
        document.getElementById("rangespan").style.fontSize = "x-large";
    }
    else if(value<36 && value>16){
        var body=document.getElementById("body");
        body.style.fontSize = "large";
        document.getElementById("rangespan").style.fontSize = "x-large";
    }
    else{
        var body=document.getElementById("body");
        body.style.fontSize = "medium";
        document.getElementById("rangespan").style.fontSize = "x-large";
    }
})

var counter = 0;
function decrementdiv(sectionid){
    var stringlength=sectionid.length;
    if(stringlength==8){
        var buttonid=sectionid.slice(-1);
    }
    else{
        var steps=stringlength-8;
        steps++;
        var buttonid=sectionid.slice(-(steps),);
    }
    var button="button"+buttonid;
    var strvalue=document.getElementById(button).value;
    var value=parseInt(strvalue);
    if(value>0){
        value-=1;
        document.getElementById(button).value= value;
        if(value==0){
            counter++;
            if (counter==document.getElementById("checkempty").children.length-1){
                alert("بارك الله فيك")
        }
      }
    }
}
function refresh_element(value,buttonid){
    if (document.getElementById(buttonid).value==0){
        counter-=1
    }
    if(value=="ten"){
        document.getElementById(buttonid).value=11;
    }
    else if(value=="one"){
        document.getElementById(buttonid).value=2;
    }
    else if(value=="three"){
        document.getElementById(buttonid).value=4;
    }
    else if(value=="four"){
        document.getElementById(buttonid).value=5;
    }
    else if(value=="seven"){
        document.getElementById(buttonid).value=8;
    }
    else{
        document.getElementById(buttonid).value=101;
    }
}
document.getElementById('tahleel_times').addEventListener("change",function changevalue(){
    var select=document.getElementById("tahleel_times");
    var strvalue=select.options[select.selectedIndex].value;
    var value=parseInt(strvalue);
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        if(document.getElementById("button24").value==0){
            counter-=1;
        }
        document.getElementById("button24").value = value;
        if (value==100){
            document.getElementById("refresh_tahleel").setAttribute("onclick","javascript: refresh_element('hundred','button24')");
            document.getElementById("tahleel").innerHTML= "مئة مرة";
            document.getElementById("tahleel").className= "hundred";
        }
        else{
            document.getElementById("refresh_tahleel").setAttribute("onclick","javascript: refresh_element('ten','button24')");
            document.getElementById("tahleel").innerHTML= "عشر مرات";
            document.getElementById("tahleel").className= "ten";
        }
    }
    else{
        if(document.getElementById("button24").value==0){
            counter-=1;

        }
        document.getElementById("button24").value = value+1;
        if (value==100){
            document.getElementById("refresh_tahleel").setAttribute("onclick","javascript: refresh_element('hundred','button24')");
            document.getElementById("tahleel").innerHTML= "مئة مرة";
            document.getElementById("tahleel").className= "hundred";
        }
        else{
            document.getElementById("refresh_tahleel").setAttribute("onclick","javascript: refresh_element('ten','button24')");
            document.getElementById("tahleel").innerHTML= "عشر مرات";
            document.getElementById("tahleel").className= "ten";
        }
    }
})
document.getElementById('tasbeh_times').addEventListener("change",function changevalue(){
    var select=document.getElementById("tasbeh_times");
    var strvalue=select.options[select.selectedIndex].value;
    var value=parseInt(strvalue);
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        if(document.getElementById("button25").value==0){
            counter-=1;
        }
        document.getElementById("button25").value = value;
        if (value==100){
            document.getElementById("refresh_tasbeh").setAttribute("onclick","javascript: refresh_element('hundred','button25')");
            document.getElementById("tasbeh").innerHTML= "مئة مرة";
        document.getElementById("tasbeh").className= "hundred";
    }
    else{
        document.getElementById("refresh_tasbeh").setAttribute("onclick","javascript: refresh_element('ten','button25')");
        document.getElementById("tasbeh").innerHTML= "عشر مرات";
        document.getElementById("tasbeh").className= "ten";
    }
}
else{
    if(document.getElementById("button25").value==0){
            counter-=1;
        }
        document.getElementById("button25").value = value+1;    
        if (value==100){
            document.getElementById("refresh_tasbeh").setAttribute("onclick","javascript: refresh_element('hundred','button25')");
            document.getElementById("tasbeh").innerHTML= "مئة مرة";
            document.getElementById("tasbeh").className= "hundred";
        }
        else{
            document.getElementById("refresh_tasbeh").setAttribute("onclick","javascript: refresh_element('ten','button25')");
            document.getElementById("tasbeh").innerHTML= "عشر مرات";
            document.getElementById("tasbeh").className= "ten";
        }
    }

})
