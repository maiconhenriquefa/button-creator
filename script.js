const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChange);

const handleStyle = {
    element: btn,
    backgroundColor(value) {
        this.element.style.backgroundColor=value;
    },
    height(value){
        this.element.style.height=`${value}px`;
        controles.height.previousElementSibling.innerHTML = 'Height' +`<span> ${value}px</span>`;
    },
    width(value){
        this.element.style.width=`${value}px`;
        controles.width.previousElementSibling.innerHTML = 'Width' +`<span> ${value}px</span>`;
    },
    texto(value){
        this.element.innerText=value;
    },
    color(value){
        this.element.style.color=value;
    },
    border(value){
        this.element.style.border=value;
    },
    borderRadius(value){
        this.element.style.borderRadius=`${value}px`;
        controles.borderRadius.previousElementSibling.innerHTML = 'Border-radius' +`<span> ${value}px</span>`;
    },
    fontFamily(value){
        this.element.style.fontFamily=value;
    },
    fontSize(value){
        this.element.style.fontSize=`${value}px`;
    }
}

function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    handleStyle[name](value);
    showCss();
    saveValues(name,value);
}

function saveValues(name,value) {
    localStorage[name] = value;
}

function setValues() {
    const properties = Object.keys(localStorage);
    properties.forEach(properties => {
        handleStyle[properties](localStorage[properties])
        controles.elements[properties].value = localStorage[properties];
    })
    showCss();
}

function showCss(){
    cssText.innerHTML = `<span>${btn.style.cssText.split('; ').join(';</span><span>')}`;
}