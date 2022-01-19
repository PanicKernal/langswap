const control = document.getElementsByClassName('lang-control')[0];
const elements = document.querySelectorAll('[data-lang]'); //[data-lang='1']

if (getUnique(elements) > 2) {
    control.selectedIndex = control.querySelectorAll("[data-lang-control='1']")[0].index;
    const secondary = document.querySelectorAll("[data-lang]:not([data-lang='1'])");

    for (let element of secondary) {
        element.style.display = 'none';
    }
    
    control.addEventListener('change', changeLanguage);
}
else {
    const secondary = document.querySelectorAll("[data-lang='2']");

    for (let element of secondary) {
        element.style.display = 'none';
    }

    control.addEventListener('click', changeBinLanguage);
}

function changeLanguage(event) {
    const selected = event.target[this.selectedIndex].attributes['data-lang-control'].value;

    const invisible = document.querySelectorAll("[data-lang]:not([data-lang='" + selected + "'])");

    for (let element of invisible) {
        element.style.display = 'none';
    }

    const visible = document.querySelectorAll("[data-lang='" + selected + "']");
    
    for (let element of visible) {
        if (element.hasAttribute('data-lang-display')) {
            const attribute = element.attributes['data-lang-display'].value;
            element.style.display = attribute;
        }
        else {
            element.style.display = 'block';
        }
    }
}

function getUnique(arr) {
    const uniqueSet = new Set();

    for (var i = 0; i < arr.length; i++) {
        uniqueSet.add(arr[i].attributes['data-lang'].value);
    }

    return uniqueSet.size;
}

function changeBinLanguage() {
    const elements = document.querySelectorAll('[data-lang]');

    for (let element of elements) {
        if (element.hasAttribute('data-lang-display')) {
            const attribute = element.attributes['data-lang-display'].value;
            element.style.display = element.style.display === 'none' ? attribute : 'none';
        }
        else {
            element.style.display = element.style.display === 'none' ? 'block' : 'none';
        }
    }
}


