$('head').append($('<link>', {
    rel: 'stylesheet',
    type: 'text/css',
    href: 'https://raw.githack.com/GameModerator/PortableJSPad/master/main.css',
    load: function() {
        $.getScript('https://code.jquery.com/ui/1.12.1/jquery-ui.js').then(function() {
            $('body').append($('<div>', {
                id: 'PortableJSPad',
                css: {
                    position: 'fixed'
                },
                append: [$('<div>', {
                    css: {
                        width: '100%',
                        height: 'fit-content',
                        'margin-bottom': '5px'
                    },
                    append: [$('<span>', {
                        css: {
                            'font-size': '18px'
                        },
                        text: 'PortableJSPad'
                    }), $('<div>', {
                        append: [$('<div>', {
                            class: 'PortableJSPad-closeButton',
                            append: [$('<span>', {
                                text: '✖'
                            })],
                            click: function() {
                                $('#PortableJSPad').hide();
                            }
                        }), $('<div>', {
                            id: 'PortableJSPad-Minimize',
                            text: '-',
                            click: function() {
                                if ($('#PortableJSPad').hasClass('PortableJSPad-Minimized')) {
                                    $('.PJSP-minimize, #PortableJSPad .ui-resizable-se').show();
                                    $('#PortableJSPad').animate({
                                        'left': '37.5%',
                                        'top': '35%'
                                    }).css({
                                        'bottom': 'initial',
                                        'height': 'fit-content',
                                    }).resizable('enable').removeClass('PortableJSPad-Minimized');
                                    $(this).text('-');
                                    $('#PortableJSPad-Preview').hide();
                                } else {
                                    $('.PJSP-minimize, #PortableJSPad .ui-resizable-se').hide();
                                    $('#PortableJSPad').animate({
                                        'bottom': '0',
                                        'left': '0',
                                        'width': '170px'
                                    }).css({
                                        'top': 'initial',
                                        'height': '',
                                    }).resizable('disable').addClass('PortableJSPad-Minimized');
                                    $(this).text('+');
                                }
                            }
                        })],
                    })]
                }), $('<textarea>', {
                    'placeholder': 'Write something!',
                    id: 'PortableJSPad-Textarea',
                    class: 'PJSP-minimize'
                }).keydown(function(e) {
                    if (e.metaKey && e.keyCode === 13) {
                        eval($(e.target).val());
                    }
                }).keyup(function() {
                    localStorage.setItem('PortableJSPad', $(this).val());
                    $('#PortableJSPad-previewContent').text($(this).val());
                }), $('<div>', {
                    id: 'PortableJSPad-Preview',
                    append: [$('<div>', {
                        id: 'PortableJSPad-previewContent'
                    })],
                    css: {
                        display: 'none'
                    }
                })]
            }).draggable({
                containment: 'window',
                scroll: false
            }).resizable({
                alsoResize: 'PortableJSPad-Textarea',
                handles: 'se',
            }));

            $('<div id="left-rail-but-its-on-the-right-side-wtf"><div id="Init-PortableJSPad"><div id="pjsp">JS</div></div></div>').appendTo('body').mouseenter(function() {
                $('#Init-PortableJSPad').show('slide', {
                    direction: 'right'
                }, 200)
                setTimeout(function() {
                    $('#Init-PortableJSPad').hide('slide', {
                        direction: 'right'
                    }, 200);
                }, 2000);
            });

            $('#Init-PortableJSPad').click(function() {
                if ($('#PortableJSPad').css('display') !== 'none') {
                    $('#PortableJSPad').fadeOut()
                } else {
                    $('#PortableJSPad').fadeIn()
                }
            });
            $('#Init-PortableJSPad').click(function() {
                $('#PortableJSPad').show();
            });

            if ($('#PortableJSPad-Textarea').val() === '') {
                $('#PortableJSPad-Textarea').val(localStorage.PortableJSPad);
                $('#PortableJSPad-previewContent').text(localStorage.PortableJSPad);
            }

            $(document).on('mouseover', '.PortableJSPad-Minimized', function() {
                $('#PortableJSPad-Preview').show();
            }).on('mouseleave', '.PortableJSPad-Minimized', function() {
                $('#PortableJSPad-Preview').hide();
            });
        });
    }
}));
