let data = ()=>{
    let main = document.getElementById('main');
    let city = document.getElementById('city').value;
    let country = document.getElementById('country').value;
    let form = document.getElementById('form');
    



    axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=1`)
            .then(function (response) {
                data = response.data;
                console.log(data);
                
                document.getElementById('Fajar').innerHTML = "Timing:" +"  "+ data.data.timings.Fajr;
                document.getElementById('Zohar').innerHTML = "Timing:" +"  "+ data.data.timings.Dhuhr;
                document.getElementById('Asar').innerHTML = "Timing:" +"  "+ data.data.timings.Asr;
                document.getElementById('Maghrib').innerHTML = "Timing:" +"  "+ data.data.timings.Maghrib;
                document.getElementById('Esha').innerHTML = "Timing:" +"  "+ data.data.timings.Isha;
                main.style.display = 'flex';
                form.style.display = 'none';
                
            })

        }
