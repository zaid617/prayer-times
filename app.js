let data = ()=>{
    let main = document.getElementById('main');
    let city = document.getElementById('city').value;
    let country = document.getElementById('country').value;
    let form = document.getElementById('form');
    let Fajar = document.getElementById('Fajar')
    let Zohar = document.getElementById('Zohar')
    let Asar = document.getElementById('Asar')
    let Maghrib = document.getElementById('Maghrib')
    let Esha = document.getElementById('Esha')
    let Fajarbox = document.getElementById('Fajarbox')
    let Zoharbox = document.getElementById('Zoharbox')
    let Asarbox = document.getElementById('Asarbox')
    let Maghribbox = document.getElementById('Maghribbox')
    let Eshabox = document.getElementById('Eshabox')
    
    axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=1`)
            .then(function (response) {
                data = response.data;

               
                    Fajar.innerHTML = "Timing:" +"  "+ data.data.timings.Fajr;
                    Zohar.innerHTML = "Timing:" +"  "+ data.data.timings.Dhuhr;
                    Asar.innerHTML = "Timing:" +"  "+ data.data.timings.Asr;
                    Maghrib.innerHTML = "Timing:" +"  "+ data.data.timings.Maghrib;
                    Esha.innerHTML = "Timing:" +"  "+ data.data.timings.Isha;
               
                
                main.style.display = 'flex';
                form.style.display = 'none';
                
            })

        }
let change = ()=>{
    form.style.display = 'flex';
    main.style.display = 'none';
}