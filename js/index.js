var strength = {
		0: "Muốn mất tài khoản hay gì? ☹",
		1: "Còn rất là tệ luôn ☹",
		2: "Vẫn còn yếu ☹",
		3: "Tốt, nhưng hãy nâng cấp nó thêm tý nào ☺",
		4: "Tuyệt vời, hãy dùng nó ☻"
}

var password = document.getElementById('password');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');

password.addEventListener('input', function()
{
    var val = password.value;
    var result = zxcvbn(val);
	
    meter.value = result.score;
   
    if(val !== "") {
        text.innerHTML = "Đánh giá: " + "<strong>" + strength[result.score] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span"; 
    }
    else {
        text.innerHTML = "";
    }
});