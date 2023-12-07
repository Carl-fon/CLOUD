 // Getting appointments from local storage 
    let apps=[];
    const noApp = document.getElementById('noApp');
    const appointments = document.getElementById('appointments');

    let strApps = localStorage.getItem("Appointments");
    apps = JSON.parse(strApps);
    console.log('Appointments:', apps);
    if(apps==null){
        noApp.removeAttribute("hidden");
    }else{
        for (let i = 0; i < apps.length; i++) {
            appointments.innerHTML += `<li>${apps[i].appName} has booked to donate ${apps[i].appBG} blood on ${apps[i].appDate}. </li>`;
        }
    };

 // Adding appoinments
    const appBtn = document.getElementById('appBtn');
    const addApps = document.getElementById('addApps');

    appBtn.addEventListener('click', function(e){
        addApps.innerHTML=`
                            <form id="appForm" action="submit">
                                <div class="d-flex" >
                                    <input type="text" id="appName" placeholder="Enter name" class="m-1 px-3 border-0 bg-light bg-opacity-75 rounded-5 w-75" required>
                                    <input type="text" id="appBG" placeholder="Blood" class="m-1 px-3 border-0 bg-light bg-opacity-75 rounded-5 w-25" required>
                                </div>
                                <input type="date" name="appDate" id="appDate" placeholder="Date of appointment" class="m-1 px-3 border-0 bg-light bg-opacity-75 text-center rounded-5" required>
                                <br>
                                <br>
                                <button type="submit" class="btn btn-rounded" style="background: red; color: white;">Submit</button>
                            </form>
        `;
        const appForm = document.getElementById('appForm');

        appForm.addEventListener('submit', function(e){
            e.preventDefault();

            const appName = document.getElementById('appName').value;
            const appDate = document.getElementById('appDate').value;
            const appBG = document.getElementById('appBG').value;
    
            let appData = {
                appName,
                appDate,
                appBG
            };

            let apps=[];
            apps.push(appData);
            console.log("Apps", apps);

            strApps = JSON.stringify(apps);
            localStorage.setItem("Appointments", strApps);

            alert('Appointment booked!!! Please refresh page to see changes');
            addApps.innerHTML="";
        });
        

    });

