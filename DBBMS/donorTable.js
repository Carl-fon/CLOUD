
const table = document.getElementById("dnrTbl");
let strDonors = localStorage.getItem("DonorData");
let donors = JSON.parse(strDonors);
donors.forEach((donor, index) => {
    table.innerHTML += `
        <div class="row border-2 border-dark m-2">
            <div class="col-1 px-2 py-1">${index+1}</div>
            <div class="col-3 px-2 py-1">${donor.name}</div>
            <div class="col-1 px-2 py-1">${donor.gender}</div>
            <div class="col-1 px-2 py-1">${donor.group}</div>
            <div class="col-2 px-2 py-1">${donor.tel}</div>
            <div class="col-2 px-2 py-1">${donor.address}</div>
            <div class="col-1 px-2 py-1">${donor.dob}</div>
            <div class="col-1 px-2 py-1">${donor.ld}</div>
        </div>  
    `;
});