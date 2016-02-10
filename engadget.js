function _x(STR_XPATH) {
    var xresult = document.evaluate(STR_XPATH, document, null, XPathResult.ANY_TYPE, null);
    var xnodes = [];
    var xres;
    while (xres = xresult.iterateNext()) {
        xnodes.push(xres);
    }

    return xnodes;
}

$(_x('/html/body/div/div/div[2]/main/section')).siblings().hide();


$("[role='banner']").hide();

$('footer:last').hide();