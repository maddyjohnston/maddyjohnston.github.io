$(document).on('click', '.preview', function (e) {
    let $target = $(e.target); 
    let src = $target.prop('src');
    let msg = $target.parent().find('.notes').text();
    open_modal(src, msg);
});

function open_modal(src, msg) {
    swal({
        imageUrl: src,
        width: '60%',
        padding: 0,
        showConfirmButton: false,
        showCloseButton: true,
        html: `<small>${msg}</small>`,
        imageAlt: msg,
    });
}

