const form = document.getElementById("loginForm");
const feedback = document.getElementById("feedback");
const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("togglePassword");

togglePasswordButton.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  togglePasswordButton.textContent = isHidden ? "隐藏" : "显示";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const username = String(formData.get("username") || "").trim();
  const password = String(formData.get("password") || "").trim();

  feedback.className = "feedback";

  if (!username || !password) {
    feedback.textContent = "请输入完整的账号和密码。";
    feedback.classList.add("error");
    return;
  }

  feedback.textContent = `登录请求已提交，欢迎你，${username}。这是一个前端演示页，未接入真实认证。`;
  feedback.classList.add("success");
});
