document.getElementById("subBtn").addEventListener("click", async () => {
  const fullName = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const mobileNumber = document.getElementById("phone").value;
  const comment = document.getElementById("textarea").value;

  const userData = {
    fullName: fullName,
    email: email,
    mobileNumber: mobileNumber,
    comment: comment,
  };
  console.log(userData, "xcvbnm,mnbvcxcvbghjkl");

  try {
    const response = await fetch("http://localhost:4000/user", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resData = await response.json();
    console.log(resData , "response Error");
    if (resData.status === 200) {
      document.getElementById("submitMessage").innerHTML = " Submited SuccesFully "
      setTimeout(() => {
        document.getElementById("fullname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("textarea").value = "";
        document.getElementById("submitMessage").style.display = "none";
      }, 2000);
    } else {
      console.log(resData, "xcvbnmljhOmjii");
      document.getElementById("errorMessage").innerText = resData.message;
      document.getElementById("errorMessage").style.display = "block";
      document.getElementById("errorMessage").style.color = "red";
      setTimeout(() => {
      document.getElementById("errorMessage").style.display = "none";

      }, 2000);
    }
  } catch (error) {
    console.log(error);
  }
});
