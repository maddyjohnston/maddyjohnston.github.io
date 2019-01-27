$(document).on('click', '.preview', function (e) {
    let $target = $(e.target); 
    let src = $target.prop('src');
    open_modal(src);
});

function open_modal(src) {
    swal({
        imageUrl: src,
        customClass: 'zoomed',
        padding: 0,
        showConfirmButton: false,
        showCloseButton: true,
    });
}
