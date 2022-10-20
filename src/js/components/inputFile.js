let $inputFile = $('.form-control--file')

function handlerInputFile(e) {
    let $file= $(this),
        $inputText = $file.siblings('.form-control--input'),
        file = $file[0].files

    if(file.length) {
        $inputText.val(file[0].name)
    } else {
        $inputText.val('')
    }
}

function initInputFile() {
    $inputFile.on('change', handlerInputFile)
}

export {initInputFile}