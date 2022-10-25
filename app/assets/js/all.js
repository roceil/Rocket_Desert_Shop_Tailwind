function sendEmail() {
  Email.send({
    SecureToken: "133e86dc-6baa-4ffd-b064-74a4c06d379f",
    To: mailAddress,
    From: "a0978006326@gmail.com",
    Subject: "感謝您訂閱我們的甜點",
    Body: "希望我們甜死人不償命的東西會讓您開心一整天"
  }).then(
    alert(`信件已寄出，請檢查信箱`)
  );
}
const mailBtn = document.querySelector(`.emailBtn`)
const mailSub = document.querySelector(`.emailSub`)
let mailAddress = ``


mailBtn.addEventListener("click", function (e) {
  mailAddress = mailSub.value
  sendEmail()
  mailSub.value = ``
})