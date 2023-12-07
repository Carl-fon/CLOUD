
// For the Donor info form
const button = document.getElementById('btn1');
const form = document.getElementById('form');
let donors  =[];
let strdnrs = localStorage.getItem("DonorData");
let dnrs = JSON.parse(strdnrs);
donors.concat(dnrs);

form.addEventListener('submit', function(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let gender = document.getElementById('gender').value;
    let tel = document.getElementById('tel').value;
    let address = document.getElementById('address').value;
    let group = document.getElementById('group').value;
    let dob = document.getElementById('dob').value;
    let ld = document.getElementById('ld').value;

    let donor = {
        name,
        gender,
        tel,
        address,
        group,
        dob,
        ld
    };

    console.log(donor);

    donors.push(donor);
    let strDonors = JSON.stringify(donors);
    localStorage.setItem("DonorData", strDonors);
    console.log(donors);

    alert('Donor has been succesfully added!!!');
    form.reset();

});


console.log("Donors", donors);

function name(e) {
    e.preventDefault();

}

// For the requests
    let reqs=[];
    const requests = document.getElementById('requests');
    const reqBtn = document.getElementById('createReq');
    const ctSec = document.getElementById('ctSec');
    const noReq = document.getElementById('noReq');

    // Getting requests from local storage 
        strReqs = localStorage.getItem("Requests");
        reqs = JSON.parse(strReqs);
        console.log('Requests', reqs);
        if(reqs==null){
            noReq.removeAttribute("hidden");
        }else{
            for (let i = 0; i < reqs.length; i++) {
                requests.innerHTML += `<li>${reqs[i]} blood is needed!</li>`;
            }
        };

    reqBtn.addEventListener('click', function(e){
        ctSec.innerHTML+=`
                        <hr>
                        <div>
                            <form id="reqForm" action="submit" class="d-flex justify-content-between m-2 card">
                                <input id=bgReq type="text" name="BG" id="BG" class="border-0 rounded-5 bg-dark bg-opacity-10 px-3 p-2" placeholder="Request blood group and rhesus" required>
                                <button type="submit" class="btn btn-dark w-auto" style="background: red;">submit request</button>
                            </form>
                        </div>
                        <hr>
        `;
        const reqForm = document.getElementById('reqForm');

        reqForm.addEventListener('submit', function(e){
            e.preventDefault();
            let bgReq = document.getElementById('bgReq').value;
            // let reqs=[];
            reqs.push(bgReq);
            // reqs.concat(rqs);
            strReqs = JSON.stringify(reqs);
            localStorage.setItem("Requests", strReqs);

            alert('Request submitted!!!  Please refresh page to see changes');
            ctSec.innerHTML=``;
        });
    });

// For donor appointments
    let apps = [];
    const appointments = document.getElementById('appointments');
    const noApp = document.getElementById('noApp');

    // Getting appointments from local storage 
        let strApps = localStorage.getItem("Appointments");
        apps = JSON.parse(strApps);
        console.log('Appointments:', apps);
        if(apps==null){
            noApp.removeAttribute("hidden");
        }else{
            for (let i = 0; i < apps.length; i++) {
                appointments.innerHTML += `<li>${apps[i].appName} is booked to donate ${apps[i].appBG} blood on ${apps[i].appDate} </li>`;
            }
        };




