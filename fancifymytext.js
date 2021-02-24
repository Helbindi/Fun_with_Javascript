window.onload = function() {
    var buttonElement = document.getElementById("bigger");
    var textAreaElement = document.getElementById("Fancify");
    var fancyRadio = document.querySelectorAll('input[type=radio][name="optradio"][id=fancyradio]');
    var boringRadio = document.querySelectorAll('input[type=radio][name="optradio"][id=boringradio]');
    var mooButtonElement = document.getElementById("moo");

    if (buttonElement) {
        buttonElement.addEventListener('click', biggerFunction);
    }

    if (mooButtonElement) {
        mooButtonElement.addEventListener('click', mooFunction);
    }

    if (fancyRadio) {
        fancyRadio.forEach(radio => radio.addEventListener('change', () => textAreaElement.style.fontWeight = "bold"));
        fancyRadio.forEach(radio => radio.addEventListener('change', () => textAreaElement.style.color = "blue"));
        fancyRadio.forEach(radio => radio.addEventListener('change', () => textAreaElement.style.textDecorationLine = "underline"));

    }

    if (boringRadio) {
        boringRadio.forEach(radio => radio.addEventListener('change', () => textAreaElement.style.font = "initial"));
        boringRadio.forEach(radio => radio.addEventListener('change', () => textAreaElement.style.color = "black"));
        boringRadio.forEach(radio => radio.addEventListener('change', () => textAreaElement.style.textDecorationLine = "none"));
    }

    function alertFunction() {
        alert("Hello World!") 
    }

    function biggerFunction() {
        textAreaElement.style.font = "Bold 4em Times New Roman, serif";
    }

    function mooFunction() {
        var str = textAreaElement.value
        parts = str.split(".");
        str = parts.join(". -Moo");
        textAreaElement.value = str

        textAreaElement.value = textAreaElement.value.toUpperCase();
    }
}