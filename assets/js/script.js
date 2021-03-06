$(function () {
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
    $('div.highlighter-rouge').each(function (index) {
        var generatedId = 'codeBlock' + index;
        var languageClass = $(this).attr('class').split(' ')[0];
        var language = 
            languageClass == 'language-sh' ? 'Shell' :
            languageClass == 'language-js' ? 'JavaScript' :
            languageClass == 'language-json' ? 'JSON' :
            languageClass == 'language-xml' ? 'XML' :
            languageClass == 'language-sql' ? 'SQL' :
            languageClass == 'language-csharp' ? 'C#' : 
            languageClass == 'language-powershell' ? 'PowerShell' : 
            'Code';
        $(this).find('div.highlight').attr('id', generatedId);
        var header = $('<div/>', {
            class: 'code-header mt-3 mb-0 bg-light d-flex justify-content-between border',
        }).append(
            $('<span/>', {
                class: 'mx-2 text-muted text-capitalize font-weight-light',
                html: language
            })
        ).append(
            $('<button/>', {
                class: 'm-0 btn btn-code btn-sm btn-light codeBtn rounded-0 border-left text-muted font-weight-light',
                'data-clipboard-target': '#' + generatedId,
                type: 'button'
            }).append(
                $('<i/>', {
                    class: 'fa fa-files-o mr-2',
                    'aria-hidden': 'true'
                })
            ).append(
                'Copy'
            )
        );
        header.prependTo($(this));
        $(this).addClass('mt-0');
    });
    new ClipboardJS('.btn-code');
});
