
const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const inputPasswordRegister1 = document.querySelector(".input-signup-password1");

const btnRegister = document.querySelector(".signup__signInButton");



btnRegister.addEventListener("click", (e) => { // e là đối tượng sự kiện truyền vào addvenlistener và chứa các thông tin phần tử như click chuọt
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" || inputPasswordRegister.value === "" || inputPasswordRegister.value !== inputPasswordRegister1.value 
    
  ) {
    alert("Bạn đã để trống hoặc nhập mật khẩu lại sai");
  } else {
  
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "login.html";
  }
});
