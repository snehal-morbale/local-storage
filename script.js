
function handleSubmit(event) {
    event.preventDefault(); 
  
    // Get form values
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const username = document.getElementById("username").value;
  
   
    const user = {
      fullName,
      email,
      mobile,
      username
    };
  
    
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    
    users.push(user);
  
    // Store updated users array in local storage
    localStorage.setItem("users", JSON.stringify(users));
  
    // Clear form fields
    document.getElementById("registrationForm").reset();
  
  
    window.location.href = "dashboard.html";
  }
  
  
  document.getElementById("registrationForm").addEventListener("submit", handleSubmit);
  