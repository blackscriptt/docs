var typed = new Typed(".auto", {
    strings: ["Welcome", "Hos Geldin"],
    typeSpeed: 250,
    backSpeed: 150,
    loop: true
});

let copyLink = null;
function linkCopy(link) {
    copyLink = link;
    if(copyLink == null) { copyLink = "hata oluştu :(" }
    navigator.clipboard.writeText(copyLink);
}

$(document).ready(function() {
    // copy success - [START]
    $('.howToAddCode .copy').click( () => {
        Swal.fire({
            icon: 'success',
            title: 'Kopyalandı',
            text: copyLink,
        }) 
    });
    // copy success - [END^]
})