$(document).ready(function() {
    $('#loading .loading__first').animate({ opacity: '1' })
    .delay(7000)
    .animate({ opacity: '0' },
    function () {
    $('#loading').animate({ opacity: '1' })
        .delay(1500)
        .animate({ opacity: '0' }, function() { $(this).css({ display: 'none' }) });
    });
})
