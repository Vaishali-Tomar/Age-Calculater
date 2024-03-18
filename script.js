{
document.getElementById('btn').addEventListener('click', function() {
    var inputDate = document.querySelector('.dateInut').value;

    var birthDate = new Date(inputDate);
    var currentDate = new Date();

    var difference = currentDate - birthDate;

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var day = Math.floor(days/365)+1;
    var months = Math.floor(days / 30.44); 
    var years = Math.floor(months / 12);

    months = months % 12;

    if(years>0 || day>0 || months>0){
        document.getElementById('yearUpdate').textContent = years;
        document.getElementById('monthUpdate').textContent = months;
        document.getElementById('dayUpdate').textContent = day;
    }else{
        alert("Not Born Yet");
    }
});
}