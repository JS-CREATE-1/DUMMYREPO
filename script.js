/* ===== FAKE DATA ===== */

const users = [
  {role:"Customer"}, {role:"Customer"}, {role:"Customer"},
  {role:"Freelancer"}, {role:"Freelancer"}, {role:"Freelancer"},
  {role:"Admin"}
];

const freelancers = [
  {name:"Anita", category:"Web Dev", plan:"Gold", rating:4.6, jobs:52},
  {name:"Karthik", category:"Electrician", plan:"Silver", rating:4.1, jobs:31},
  {name:"Ramesh", category:"Design", plan:"Platinum", rating:4.8, jobs:120},
  {name:"Sneha", category:"Content", plan:"Gold", rating:4.3, jobs:64}
];

const jobs = [
  {id:"J001", status:"Completed", price:12000, category:"Web Dev"},
  {id:"J002", status:"Completed", price:2500, category:"Electrician"},
  {id:"J003", status:"Cancelled", price:4000, category:"Content"},
  {id:"J004", status:"Completed", price:8000, category:"Design"},
  {id:"J005", status:"In Progress", price:15000, category:"Marketing"}
];

const payments = [
  {amount:12000, commission:1200},
  {amount:2500, commission:250},
  {amount:8000, commission:800}
];

/* ===== KPIs ===== */
document.getElementById("totalUsers").textContent = users.length;
document.getElementById("activeFreelancers").textContent = freelancers.length;
document.getElementById("jobsCompleted").textContent =
  jobs.filter(j=>j.status==="Completed").length;
document.getElementById("totalRevenue").textContent =
  payments.reduce((a,b)=>a+b.amount,0);

/* ===== CHARTS ===== */

// USERS
new Chart(userChart,{
  type:"pie",
  data:{
    labels:["Customers","Freelancers","Admins"],
    datasets:[{
      data:[
        users.filter(u=>u.role==="Customer").length,
        users.filter(u=>u.role==="Freelancer").length,
        users.filter(u=>u.role==="Admin").length
      ],
      backgroundColor:["#22c55e","#6366f1","#facc15"]
    }]
  }
});

// JOBS
new Chart(jobChart,{
  type:"doughnut",
  data:{
    labels:["Completed","In Progress","Cancelled"],
    datasets:[{
      data:[
        jobs.filter(j=>j.status==="Completed").length,
        jobs.filter(j=>j.status==="In Progress").length,
        jobs.filter(j=>j.status==="Cancelled").length
      ],
      backgroundColor:["#22c55e","#38bdf8","#ef4444"]
    }]
  }
});

// REVENUE
new Chart(revenueChart,{
  type:"bar",
  data:{
    labels:["GMV","Commission"],
    datasets:[{
      data:[
        payments.reduce((a,b)=>a+b.amount,0),
        payments.reduce((a,b)=>a+b.commission,0)
      ],
      backgroundColor:["#6366f1","#22c55e"]
    }]
  }
});

/* ===== TABLES ===== */

freelancers.forEach(f=>{
  freelancerTable.innerHTML+=`
    <tr>
      <td>${f.name}</td>
      <td>${f.category}</td>
      <td>${f.plan}</td>
      <td>${f.rating}</td>
      <td>${f.jobs}</td>
    </tr>`;
});

jobs.forEach(j=>{
  jobTable.innerHTML+=`
    <tr>
      <td>${j.id}</td>
      <td>${j.category}</td>
      <td>${j.status}</td>
      <td>₹${j.price}</td>
    </tr>`;
});
