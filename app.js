if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    alert("ALLOW LOCATION ACCESS!");
}
function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    

axios.get(`http://api.aladhan.com/v1/timings/1398332113?latitude=${latitude}&longitude=${longitude}&method=2`)
        .then(function (response) {
            data = response.data;
            console.log(data);
            
            document.getElementById('Fajar').innerHTML = "Timing:" +" "+ data.data.timings.Fajr;
            document.getElementById('Zohar').innerHTML = "Timing:" +" "+ data.data.timings.Dhuhr;
            document.getElementById('Asar').innerHTML = "Timing:" +" "+ data.data.timings.Asr;
            document.getElementById('Maghrib').innerHTML = "Timing:" +" "+ data.data.timings.Maghrib;
            document.getElementById('Esha').innerHTML = "Timing:" +" "+ data.data.timings.Isha;
        })
    }