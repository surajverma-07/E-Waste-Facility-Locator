// This is a simplified example, and you'll need to replace it with real data and map integration.
document.getElementById("locationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const city = document.getElementById("city").value;
    fetchNearestRecyclers(city);
});

function fetchNearestRecyclers(city) {
    // Simulated data (replace with real data from your backend)
    const recyclers = [
        { name: "M/s ADV Metal Combine Pvt. Ltd. , Shed No.- 25 , Borai Industrial Growth Centre , Rasmada , District - Durg(C.G.)" },
        { name: "M/s Star E-Processors , Village Baktara, P.O.-Godi , Tehsil-Arung , District- Raipur (C.G.) " },
        { name: "M/s Unique Eco Recycyle, Plot No. 26 , Industrial Area , Palda , Indore (M.P.)" },
        { name: "M/s Moonstar Enterproises Pvt. Ltd. ,Plot No. 24/A , 24/D , 24/A-1 , 21/D , 21/E , 21/E-1 , Sector -B , Sanwer Road , Industrial Area Indore(M.P.)"},
        { name: "M/s. Prometheus Recycling Private Limited, 786/4, 799/1, 800, Dilawar Ka pura, Susera, Tal: Gird Dist: Gwalior,(M.P)" }, 
        { name: "M/s. Sani Clean (P) Ltd., Plot No. 802/947,Tangiapada, Niala, Dist Khurda"},
        { name: "M/s. Varun infra Steel Pvt. Ltd. Plot No. 1991/3942, At/P.O. Brahmani Tarang, Vedvyas, Rourkela-769004, Dist:Sundargarh"},
        { name: "M/s. Jagannath E-Waste Recyclers, At-Pinchuli, P.O. Purushottampur, Dist-Ganjam "},
        { name: "M/s. P K Enterprises, Plot No.293/525, Khata No.127/4 At /P.O. Kalunga,Dist-Sundargarh"},
        { name: "M/s Mirtunjai Udyog(Dismantler), At-AA/2, Civil Township, Rourkela Distt- Sundargarh"},
        { name: "M/s. Cosmic Net, B-25, Saheed Nagar, Bhubaneswar, "},
        { name: "M/s Ecokart Technology Pvt. Ltd., At/PO/Mouza-Kuradhamala, Daleiput, Dist-Khordha, M-7008551392"},
    ];

    // Update the list of recyclers
    const recyclersList = document.getElementById("recyclers");
    recyclersList.innerHTML = "";
    recyclers.forEach(recycler => {
        const listItem = document.createElement("li");
        listItem.textContent = `${recycler.name} (${recycler.distance})`;
        recyclersList.appendChild(listItem);
    });

    // Simulated map (replace with a real map integration)
    const mapContainer = document.getElementById("map");
    mapContainer.innerHTML = `<p>Map showing recyclers near ${city} goes here.</p>`;
}
