$(function () {
    $('article img').each(function () {
        var src = $(this).attr('src');
        $(this).wrap('<a href="' + src + '" target="_blank"></a>');
    });
    $('article > :header').each(function () {
        if ($(this).prop('tagName') == 'H1') {
            $('nav.toc > ul').append(
                $('<a>')
                    .attr('class', 'list-group-item list-group-item-action text-dark font-weight-light font-weight-bolder')
                    .text($(this).text())
                    .attr('href', '#' + $(this).attr('id'))
            );
        } else if ($(this).prop('tagName') == 'H2') {
            $('nav.toc > ul').append(
                $('<a>')
                    .attr('class', 'list-group-item list-group-item-action text-dark font-weight-light')
                    .text($(this).text())
                    .attr('href', '#' + $(this).attr('id'))
            );
        } else if ($(this).prop('tagName') == 'H3') {
            $('nav.toc > ul').append(
                $('<a>')
                    .attr('class', 'list-group-item list-group-item-action text-dark font-weight-light pl-5')
                    .text($(this).text())
                    .attr('href', '#' + $(this).attr('id'))
            );
        }
    });
    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    });
});
