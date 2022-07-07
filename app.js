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

                Fajarbox.addEventListener("mouseover",function show() {
                    Fajar.innerHTML = "Timing:" +"  "+ data.data.timings.Fajr;
                })
                Zoharbox.addEventListener("mouseover",function show() {
                    Zohar.innerHTML = "Timing:" +"  "+ data.data.timings.Dhuhr;
                })
                Asarbox.addEventListener("mouseover",function show() {
                    Asar.innerHTML = "Timing:" +"  "+ data.data.timings.Asr;
                })
                Maghribbox.addEventListener("mouseover",function show() {
                    Maghrib.innerHTML = "Timing:" +"  "+ data.data.timings.Maghrib;
                })
                Eshabox.addEventListener("mouseover",function show() {
                    Esha.innerHTML = "Timing:" +"  "+ data.data.timings.Isha;
                })
                
                Fajarbox.addEventListener("mouseout",function show() {
                    Fajar.innerHTML = " - - : - -";
                })
                Zoharbox.addEventListener("mouseout",function show() {
                    Zohar.innerHTML = "- - : - -";
                })
                Asarbox.addEventListener("mouseout",function show() {
                    Asar.innerHTML = "- - : - -";
                })
                Maghribbox.addEventListener("mouseout",function show() {
                    Maghrib.innerHTML = "- - : - -";
                })
                Eshabox.addEventListener("mouseout",function show() {
                    Esha.innerHTML = "- - : - -";
                })
                
                
                main.style.display = 'flex';
                form.style.display = 'none';
                
            })

        }
let change = ()=>{
    form.style.display = 'flex';
    main.style.display = 'none';
}