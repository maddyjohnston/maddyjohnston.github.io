$(document).on('click', '.preview', function (e) {
    let $target = $(e.target); 
    let src = $target.prop('src');
    let msg = $target.parent().find('.notes').text();
    open_modal(src, msg);
});

function open_modal(src, msg) {
    swal({
        imageUrl: src,
        customClass: 'col-sm-12 col-md-11 col-xl-10',
        padding: 0,
        showConfirmButton: false,
        showCloseButton: true,
        html: `<p class="notes">${msg}</p>`,
        imageAlt: msg,
    });
}

