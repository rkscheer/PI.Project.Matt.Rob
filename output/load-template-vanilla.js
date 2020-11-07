function getTemplate(template, selector) {
    fetch(template)
    .then(function(response) {
        return response.text();
    })
    .then(function(body) {
        document.querySelector(selector).innerHTML = body;
    });
}

window.addEventListener('DOMContentLoaded', function(e) {
    try {
        getTemplate('./template-script.html','#script');
        getTemplate('./nav-menu.html','#nav-menu');
        // getTemplate('./templates/speaker-list.html','aside');
        // getTemplate('./templates/footer.html','footer');
    } catch (error) {
        console.log("Can't find either template or selector");
    }

});