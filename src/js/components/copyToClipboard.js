import tippy from "tippy.js";

tippy(
	'.js-copy-to-clipboard',
	{
		trigger: 'click',
		popperOptions: {
			strategy: 'fixed',
		},
	}
);

$('.js-copy-to-clipboard').click(function () {
    copyToClipboard($(this).attr('value'))
})


function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
