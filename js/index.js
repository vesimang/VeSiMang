$('#password').on('input', onPasswordInput);

function onPasswordInput(e){

  var	$input = $(this),
      value = this.value,
      $rulesItems = $input.closest('.field').find('.check-pass').find('li'),
      rules = {
          "có ký tự viết thường" : /[a-z]/,
          "có ký tự viết hoa" : /[A-Z]/,
          "có một số"  : /[0-9]/,
          "có ký tự đặc biệt"   : /[!@#$%^&*]/,
          "có ít nhất 8 ký tự"    : /.{8,}/
      };
  this.classList.toggle('hasValue', this.value);
  $rulesItems.each((i, elm) => {

    var valid,
        ruleName = elm.innerText.toLowerCase();
    if( rules[ruleName] ){
      valid = new RegExp(rules[ruleName]).test(value);
      elm.classList.toggle('pass', valid);
    }
  });
}
var password = document.getElementById('password');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');
var check_sc = 0;
var list_ck = [];
var len_val = 0;
var list_key_dw = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var list_key_up = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var list_num = [0,1,2,3,4,5,6,7,8,9];
var list_char = ['!','@','#','$','%','^','&','*','[',']']
var strength = {
		0: "Muốn mất tài khoản hay gì? ☹",
		1: "Còn rất là tệ luôn ☹",
		2: "Vẫn còn yếu ☹",
		3: "Tốt, nhưng hãy nâng cấp nó thêm tý nào ☺",
		4: "Tuyệt vời, hãy dùng nó ☻"
}
function check_key_up(key_){
	if(list_ck.includes("up")){
		return false
	}else {
		for (var i of list_key_up){
			if(key_ == i){
				check_sc += 1;
				list_ck.push('up');
				return 1;
			}
		}
	}

};
function check_key_dw(key_){
	if(list_ck.includes("dw")){
		return false
	}else {
		for (var i of list_key_dw){
			if(key_ == i){
				check_sc += 1;
				list_ck.push('dw');
				return true;
			}
		}
	}
};
function check_num(key_){
	if(list_ck.includes("num")){
		return false
	}else {
		for (var i of list_num){
			if(key_ == i){
				check_sc += 1;
				list_ck.push('num');
				return true;
			}
		}
	}
};
function check_char(key_){
	if(list_ck.includes("char")){
		return false
	}else {
		for (var i of list_char){
			if(key_ == i){
				check_sc += 1;
				list_ck.push('char');
				return true;
			}
		}
	}
};
password.addEventListener('input', function()
{
    var val = password.value;
    var result = zxcvbn(val);
    meter.value = result.score;
    console.log(result);
    if(val !== "") {
			if (val.length > len_val) {
				len_val = val.length;
				for(var k of val){
					check_key_up(k);
					check_key_dw(k);
					check_num(k);
					check_char(k);
				}
				switch(check_sc) {
				  case 0:
				    text.innerHTML = "Đánh giá: " + "<strong>" + strength[check_sc] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span";
				    break;
				  case 1:
				    text.innerHTML = "Đánh giá: " + "<strong>" + strength[check_sc] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span";
				    break;
					case 2:
				    text.innerHTML = "Đánh giá: " + "<strong>" + strength[check_sc] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span";
				    break;
					case 3:
				    text.innerHTML = "Đánh giá: " + "<strong>" + strength[check_sc] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span";
				    break;
				  default:
						if(val.length >= 8){
              if(result.feedback.warning == "Đây là một mật khẩu thường được sử dụng."){
                text.innerHTML = "Đánh giá: " + "<strong>" + strength[0] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span";
              }else{
                text.innerHTML = "Đánh giá: " + "<strong>" + strength[4] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span";
              }

						}
				}
			}else{
				list_ck = [];
				check_sc = 0;
				for(var k of val){
					check_key_up(k);
					check_key_dw(k);
					check_num(k);
					check_char(k);
				}
				switch(check_sc) {
				  case 0:
				    text.innerHTML = "Đánh giá: " + "<strong>" + strength[check_sc] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span";
				    break;
				  case 1:
				    text.innerHTML = "Đánh giá: " + "<strong>" + strength[check_sc] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span";
				    break;
					case 2:
				    text.innerHTML = "Đánh giá: " + "<strong>" + strength[check_sc] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span";
				    break;
					case 3:
				    text.innerHTML = "Đánh giá: " + "<strong>" + strength[check_sc] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span";
				    break;
				  default:
						if(val.length > 7){
							text.innerHTML = "Đánh giá: " + "<strong>" + strength[4] + "</strong>";
						}
				}
			}
    }
    else {
        text.innerHTML = "";
    }
});
