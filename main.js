// $(document).ready(function() {
//     var s = $(".creator-section");
//     var pos = s.position();
//     $(window).scroll(function() {
//         var windowpos = $(window).scrollTop();
//         if (windowpos >= pos.top) {
//             s.addClass("stick");
//         } else {
//             s.removeClass("stick");
//         }
//     });
// });

$(document).ready(function() {

  $('.latest-update').click(function (e) {
        e.preventDefault();
        $('a[href="' + $(this).attr('href') + '"]').tab('show');
    })
});
