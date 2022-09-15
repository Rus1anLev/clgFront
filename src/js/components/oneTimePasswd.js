import Inputmask from "inputmask";



function inputInsideOtpInput(el) {
    if (el.value.length > 1){
        el.value = el.value[el.value.length - 1];
    }
    try {
        if(el.value == null || el.value == ""){
            foucusOnInput(el.previousElementSibling);
        }else {
            foucusOnInput(el.nextElementSibling);
        }
    }catch (e) {
        console.log(e);
    }
}

function foucusOnInput(ele){
    ele.focus().select();
    let val = ele.value;
    ele.value = "";
    // ele.value = val;
    setTimeout(()=>{
        ele.value = val;
    })
}

function init() {

    var selectors = document.querySelectorAll(".block_callback__form-input input[name=PHONE]");
    var im = new Inputmask("+7 (999) 999-99-99");
    var firstPhoneInput = document.querySelector(".block_callback__form-input input[name=PHONE]");
    firstPhoneInput.focus()
    selectors.forEach(x => {
        im.mask(x);
    })

	if ($('.sms-code').length > 0) {
		$('.sms-code input').on('input', function() {
			inputInsideOtpInput(this)

		});
		foucusOnInput($('.sms-code input').first())
	}

}


export default {
	init
};
