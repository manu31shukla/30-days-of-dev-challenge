generated_button = document.querySelector("#generated-button");
button_lables = document.querySelector("#btn-label");
font_size = document.querySelector("#f-size");
font_color = document.querySelector("#f-color");
padding_top = document.querySelector("#top");
padding_right = document.querySelector("#right");
padding_bottom = document.querySelector("#bottom");
padding_left = document.querySelector("#left");
background_color = document.querySelector("#bgcolor");
border_color = document.querySelector("#bordercolor");
border_width = document.querySelector("#border-width");
border_radius = document.querySelector("#border-radius");
generate_code = document.querySelector("#generate-code");

defaultButton();

function defaultButton() {
    generated_button.value = button_lables.value;
    generated_button.style.fontSize = font_size.value + 'px';
    generated_button.style.color = '#' + this.jscolor;
    generated_button.style.paddingTop = padding_top.value + 'px';
    generated_button.style.paddingRight = padding_right.value + 'px';
    generated_button.style.paddingBottom = padding_bottom.value + 'px';
    generated_button.style.paddingLeft = padding_left.value + 'px';
    generated_button.style.backgroundColor = '#' + this.jscolor;
    generated_button.style.borderColor = '#' + this.jscolor;
    generated_button.style.borderStyle = 'solid';
    generated_button.style.borderWidth = border_width.value + 'px';
    generated_button.style.borderRadius = border_radius.value + 'px';
}

// Add the event related to all the inputs 

button_lables.oninput = function() {
    generated_button.value = button_lables.value;
};
font_size.oninput = function() {
    generated_button.style.fontSize = font_size.value + 'px';
};
font_color.addEventListener('change', function(e) {
    generated_button.style.color = '#' + this.jscolor;
});
padding_top.oninput = function() {
    generated_button.style.paddingTop = padding_top.value + 'px';
};
padding_right.oninput = function() {
    generated_button.style.paddingRight = padding_right.value + 'px';
};
padding_bottom.oninput = function() {
    generated_button.style.paddingBottom = padding_bottom.value + 'px';
};
padding_left.oninput = function() {
    generated_button.style.paddingLeft = padding_left.value + 'px';
};
background_color.addEventListener('change', function(e) {
    generated_button.style.backgroundColor = '#' + this.jscolor;
});
border_color.addEventListener('change', function(e) {
    generated_button.style.borderColor = '#' + this.jscolor;
});
border_width.oninput = function() {
    generated_button.style.borderStyle = 'solid';
    generated_button.style.borderWidth = border_width.value + 'px';
};
border_radius.oninput = function() {
    generated_button.style.borderRadius = border_radius.value + 'px';
};


html_code = document.querySelector("#html-code");
css_code = document.querySelector("#css-code");

generate_code.onclick = function() {

    let generated_button_str = generated_button.outerHTML;
    
    let styleAttr = generated_button_str.slice(generated_button_str.indexOf('style') - 1, generated_button_str.indexOf('>'));
    generated_button_str = generated_button_str.replace(styleAttr, "");
    html_code.innerText = generated_button_str;
   
    css_code.innerText = `#${generated_button.id} { ${generated_button.style.cssText} }`;
};