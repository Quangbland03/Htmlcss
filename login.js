// validation form login
const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
// const inputPassword1 = document.querySelector(".input-login-password1");
const btnLogin = document.querySelector(".login__signInButton");

// validation form login

btnLogin.addEventListener("click", (e) => { //e là chức năng tham số cho sự kiện 
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "" ) { //e.prevnetDefault là phương thức được gọi trên đối tượng sự kiện để ngăn chặn gửi biểu mẫu và nốt lại trang
    alert("vui lòng không để trống");
  } 
  else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value)); //localstorage để lưu cặp giá trị và getitem để truy xuất dữ liệu và JSON.parse chuyển thành chuỗi và trả về đối tượng js
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      alert("Đăng Nhập Thành Công");
      window.location.href = "maufreeok.html";
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});