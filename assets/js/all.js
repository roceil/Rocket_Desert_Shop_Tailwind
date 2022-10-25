"use strict";

function sendEmail() {
  Email.send({
    SecureToken: "133e86dc-6baa-4ffd-b064-74a4c06d379f",
    To: mailAddress,
    From: "a0978006326@gmail.com",
    Subject: "感謝您訂閱我們的甜點",
    Body: "希望我們甜死人不償命的東西會讓您開心一整天"
  }).then(alert("\u4FE1\u4EF6\u5DF2\u5BC4\u51FA\uFF0C\u8ACB\u6AA2\u67E5\u4FE1\u7BB1"));
}

var mailBtn = document.querySelector(".emailBtn");
var mailSub = document.querySelector(".emailSub");
var mailAddress = "";
mailBtn.addEventListener("click", function (e) {
  mailAddress = mailSub.value;
  sendEmail();
  mailSub.value = "";
});
//# sourceMappingURL=all.js.map
