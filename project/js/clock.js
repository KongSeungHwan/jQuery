$(function(){
    setInterval(function(){
        let da = new Date();
        let time = 
        $("#clock");
        $('#clock').append(da.getHours+":"+da.getHours+":"+da.getSeconds);
    })
})