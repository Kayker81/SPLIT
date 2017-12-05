$(document).ready(function () {
    if (/Android|AppleWebKit|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.ring').find('a').attr('href', 'tel:+7 (863) 221 16 87')
    }
    $('.modal_fon').click(function () {
        if ($('.black_panel').is(":visible")) {
            if ($('.black_panel').is(":visible") && $('.serch_modal').is(":hidden") && $('#power_calcul').is(":hidden")) {
                $('.black_panel').hide(300);
                setTimeout(function () {
                    $('.modal_fon').fadeOut(500)
                }, 700)
            }
            if ($('.black_panel').is(":hidden") && $('.serch_modal').is(":visible")) {
                $('.serch_modal').hide(300);
                setTimeout(function () {
                    $('.modal_fon').fadeOut(500)
                }, 700)
            }
            if ($('.black_panel').is(":visible") && $('.serch_modal').is(':visible')) {
                $('.serch_modal').hide(500);
                return false
            }
            if ($('.black_panel').is(":visible") && $('#power_calcul').is(':visible')) {
                $('#power_calcul').hide(500);
                return false
            }
        }
        else {


            $(this).children('.modal').hide(500);
            setTimeout(function () {
                $('.modal_fon').fadeOut(500)
            }, 700)
        }

        return;
    })
    $('.modal').click(function (e) {
        e.stopPropagation();
    })
    $('.header_nav_sandwich').click(function () {
        $('.modal_fon').fadeIn(300);
        setTimeout(function () {
            $('.black_panel').slideDown(300);
            setTimeout(function () {
                if (!$("div").is(".mCSB_draggerContainer")) {
                    $(".black_panel").mCustomScrollbar({
                        scrollButtons: {
                            enable: true
                        },
                    })
                }
            }, 500);

        })
    })
    $('.black_panel_header_close').click(function () {
        $('.black_panel').slideUp(500);
        setTimeout(function () {
            $('.modal_fon').fadeOut(300);
            setTimeout(function () {

            }, 300)
        }, 500)
    })
    $('#brend_button').click(function () {
        if (!$(this).hasClass('open')) {
            $('#area,#price,#service,#multi,#question').hide(500);
            $('.open').removeClass('open');
            $(this).addClass('open')
            $('#brend').css({
                display: 'block',
                opacity: 0,
            })
            var top = $(this).offset().top + 26;
            var left = $(this).offset().left - $('.content').offset().left;
            $('#brend').css({
                left: left,
                top: top,
                display: 'none',
                opacity: 1,
            })
            $('#brend').show(500)
        }
        else {
            $(this).removeClass('open');
            $('#brend').hide(500)
        }
    })
    $('.all_mini').click(function () {
        if (!$(this).hasClass('open')) {
            $('#area,#price,#service,#multi,#question').hide(500);
            $('.open').removeClass('open');
            $(this).addClass('open')
            $('#brend').css({
                display: 'block',
                opacity: 0,
            })

            var top = 42
            var left = $(this).offset().left - $('.content').offset().left;
            var win_widtch = $(window).width();
            if (left > win_widtch / 2) {
                var left = 0
            }
            $('#brend').css({
                left: left,
                top: top,
                display: 'none',
                opacity: 1,
            })
            $('#brend').show(500)
        }
        else {
            $(this).removeClass('open');
            $('#brend').hide(500)
        }
    })
    $('#area_button').click(function () {
        if (!$(this).hasClass('open')) {
            $('#brend,#price,#service,#multi,#question').hide(500);
            $('.open').removeClass('open');
            $(this).addClass('open')
            $('#area').css({
                display: 'block',
                opacity: 0,
            })
            var top = $(this).offset().top + 26;
            var left = $(this).offset().left - $('.content').offset().left;
            $('#area').css({
                left: left,
                top: top,
                display: 'none',
                opacity: 1,
            })
            $('#area').show(500)
        }
        else {
            $(this).removeClass('open');
            $('#area').hide(500)
        }
    })
    $('#price_button').click(function () {
        if (!$(this).hasClass('open')) {
            $('#brend,#area,#service,#multi,#price,#question').hide(500);
            $('.open').removeClass('open');
            $(this).addClass('open')
            $('#price').css({
                display: 'block',
                opacity: 0,
            })
            var top = $(this).offset().top + 26;
            var left = $(this).offset().left - $('.content').offset().left;
            $('#price').css({
                left: left,
                top: top,
                display: 'none',
                opacity: 1,
            })
            $('#price').show(500)
        }
        else {
            $(this).removeClass('open');
            $('#price').hide(500)
        }
    })
    $('#multi_bottom').click(function () {
        if (!$(this).hasClass('open')) {
            $('#brend,#area,#service,#price,#question').hide(500);
            $('.open').removeClass('open');
            $(this).addClass('open')
            $('#multi').css({
                display: 'block',
                opacity: 0,
            })
            var width_button = $(this).outerWidth();
            var width_block = $('#multi').outerWidth();
            var height_button = $(this).height()
            var top = $(this).offset().top + height_button + 4;
            var left = $(this).offset().left + width_button - $('.content').offset().left - width_block;
            var widtch_win = $(window).width()
            if (widtch_win <= 1175) {
                var left = 'auto'
            }
            $('#multi').css({
                left: left,
                top: top,
                display: 'none',
                opacity: 1,
            })
            $('#multi').show(500)
        }
        else {
            $(this).removeClass('open');
            $('#multi').hide(500)
        }
    })
    $('#service_button').click(function () {
        if (!$(this).hasClass('open')) {
            $('#brend,#area,#multi,#price,#question').hide(500);
            $('.open').removeClass('open');
            $(this).addClass('open')
            $('#service').css({
                display: 'block',
                opacity: 0,
            })
            var width_button = $(this).outerWidth();
            var width_block = $('#service').outerWidth();
            var height_button = $(this).height()
            var top = $(this).offset().top + height_button + 4;
            var left = $(this).offset().left + width_button - $('.content').offset().left - width_block;
            $('#service').css({
                left: left,
                top: top,
                display: 'none',
                opacity: 1,
            })
            $('#service').show(500)
        }
        else {
            $(this).removeClass('open');
            $('#service').hide(500)
        }
    })
    $('#question_button').click(function () {
        if (!$(this).hasClass('open')) {
            $('#brend,#area,#multi,#price, #service').hide(500);
            $('.open').removeClass('open');
            $(this).addClass('open')
            $('#question').css({
                display: 'block',
                opacity: 0,
            })
            var width_button = $(this).outerWidth();
            var width_block = $('#question').outerWidth();
            var height_button = $(this).height()
            var top = $(this).offset().top + height_button + 4;
            var left = $(this).offset().left + width_button - $('.content').offset().left - width_block;
            var width_win = $(window).width();
            if (width_win <= 1170) {
                var left = 'auto'
            }
            $('#question').css({
                left: left,
                top: top,
                display: 'none',
                opacity: 1,
            })
            $('#question').show(500);
            $('.question_block_slider_wrap_slider_block').slick({});
        }
        else {
            $(this).removeClass('open');
            $('#question').hide(500)
        }
    })
    $('#brend,#area,#price,#multi,#service,#question').mouseleave(function () {
        $(this).hide(500);
        $('.button,.header__user_info_info_select_line_select').removeClass('open');
    })
    $('.price_block_nav').find('a').hover(
        function (e) {
            $('.price_block_img_block').find('.action').css('display','none')
            $('.price_block_nav').find('.activ').removeClass('activ');
            e.preventDefault();
            var id = $(this).attr('href');
            $('.price_block_nav').find('activ').removeClass('activ');
            $(this).addClass('activ')
            $('.price_block_img_block').find('.action')
            $(id).slideDown(800)


        },
        function () {
            var id = $(this).attr('href');
            $(id).hide(500);
            $('.price_block_img_block').find('.action').css({
                    display:'inline-block',
                    opacity:0
                }
            )
            setTimeout(function () {
                $('.price_block_img_block').find('.action').css('opacity',1)
            },500)
        }
    )
    $('.services_block_nav').find('li').hover(
        function (e) {
            $('.services_block_img_wrap').find('.action').css('display','none')
                $('.services_block_nav').find('.activ').removeClass('activ');
                e.preventDefault();
                var id = $(this).find('a').attr('href');
                $('.services_block_nav').find('activ').removeClass('activ');
                $(this).addClass('activ')


                $(id).slideDown(500)



        },
        function () {
            var id = $(this).find('a').attr('href');

                $(id).hide(500)
            $('.services_block_img_wrap').find('.action').css({
                display:'inline-block',
                opacity:0
            }
            )
            setTimeout(function () {
                $('.services_block_img_wrap').find('.action').css('opacity',1)
            },500)



        }
    )
    $('.header_nav_logo_line_logo').hover(
        function (e) {
            e.preventDefault();
            var left = $(this).offset().left - $('.content').offset().left + $(this).width();
            var top = $(this).offset().top - 23.5 + $(this).height() / 2;
            if (top < 0 || $('header').hasClass('header_mini')) {
                var top = 0;
            }
            $('.logo_modal').css({
                'display': 'block',
                'opacity': 0
            })
            $('.logo_modal').css({
                'left': left,
                'top': top
            })
            $('.logo_modal').css({
                'display': 'none',
                'opacity': 1
            })
            if ($('.logo_modal').is(":visible")) {
                return false
            }
            else {
                $('.logo_modal').show(500);
                return false
            }

        },
        function () {
            $('.logo_modal').hide(300);
        }
    )
    $('html').click(function () {
        $('.logo_modal').hide(500)
    })
    $('.slide').hover(
        function () {
            $(this).find('.slide__all_info').slideDown(500)
        },
        function () {
            $(this).find('.slide__all_info').slideUp(500)
        }
    )
    $('.slide__all_info_footer_check_block').click(function () {
        if ($(this).find('.check').hasClass('activ')) {
            $(this).find('.check').removeClass('activ')
            return false
        }
        else {
            $(this).find('.check').addClass('activ');
            return false
        }
    })
    $(window).scroll(function () {
        var s_top = $(window).scrollTop();
        var win_widtch = $(window).width()
        var cr_top = $('.section_crumbs').offset().top + $('.section_crumbs').height() + 50;
        if (s_top > cr_top && win_widtch > 770) {
            $('.header').removeClass('header')
            $('header').addClass('header_mini');
        }
        else {
            $('.header_mini').removeClass('header_mini')
            $('header').addClass('header');
            return
        }
    })
    $('.question_button').hover(
        function () {
            $(this).addClass('help_activ')
            var left_parent = $('#power_calcul').offset().left;
            var top_parent = $('#power_calcul').offset().top;
            var top_help = $(this).offset().top - top_parent + 28;
            var id = $(this).attr('data-id');
            $(id).css({
                display: 'block',
                opacity: 0
            })
            var height_help = $(id).height();
            var offset_bottom = $('#power_calcul').offset().top - $(window).scrollTop() + $('#power_calcul').height()
            if (top_help + $(id).height() > offset_bottom) {
                var test = $(this).offset().top;
                $(id).removeClass('help');
                $(id).addClass('top_help');
                var top_help = $(this).offset().top - top_parent + 28 - height_help - 70;
            }
            var left_blokc = $(id).offset().left - left_parent;
            var left_help = $('.help_activ').offset().left - left_parent + 7.5 - 18 - left_blokc;
            $(id).css({
                top: top_help
            })
            $(id).find('.arow_help').css({
                left: left_help
            })
            $(id).css({
                display: 'none',
                opacity: 1
            })
            $(id).slideDown(300)
            $(id).slideDown(300)
        },
        function () {
            $(this).removeClass('help_activ');
            var id = $(this).attr('data-id');
            $(id).slideUp(300);

        }
    )
    /**************************************CALCULATOR Мощьности*****************************************************************/
    $('.select').click(function () {
        if ($(this).find('.option').is(":hidden")) {
            $('.option').slideUp(400);
            $('.open').removeClass('open')
            $(this).find('.option').slideDown(400);
            $(this).addClass('open')
        }
        else {
            $(this).find('.option').slideUp(400);
            $(this).removeClass('open')
        }
    })
    $('.calcul_check').click(function () {
        if ($(this).find('.check').hasClass('activ')) {
            $(this).find('.check').removeClass('activ')

        }
        else {
            $(this).find('.check').addClass('activ');

        }

    })
    $('.option').find('a').click(function () {
        var val = $(this).find('i').html();
        $(this).parents('.select').find('input').val(val);
    })
    $('#power_block,.calcul_footer,.black_panel_header_kalkul').click(function () {
        var win_widtch = $(window).width();
        var win_height = $(window).height();
        $('.modal_fon,#power_calcul').css({
            display: 'block',
            opacity: 0,
        })
        var top = (win_height - $('#power_calcul').height()) / 2
        if (top < 0) {
            var top = 0;
        }
        var left = (win_widtch - $('#power_calcul').width()) / 2
        if (left < 0) {
            var left = 0
        }
        $('.modal_fon').css({
            opacity: 1,
            display: 'none',
        })
        $('#power_calcul').css({
            opacity: 1,
            display: 'none',
            left: left,
            top: top
        })
        $('.modal_fon').fadeIn(500);
        setTimeout(function () {
            $('#power_calcul').show(500)
        }, 700)

    })
    $('#close_power').click(function () {
        $('#power_calcul').hide(500);
        if ($('.black_panel').is(":visible")) {
            return false
        }
        else {
            setTimeout(function () {
                $('.modal_fon').fadeOut(500)
            }, 600)
        }
    })
    $('#cline_power').click(function () {
        var S = 20;
        var H = 'Средние'
        var I = 'Средняя'
        var P = 1
        var P_D = 0;
        var T = 0
        var K = 'Нормальная'
        $('#S').val(S);
        $('#H').val(H);
        $('#I').val(I);
        $('#T').val(T);
        $('#P').val(P);
        $('#P_d').val(P_D);
        $('#K').val(K);
        $('.power_calculator_coontent_form_more').find('.activ').removeClass('activ');
        $('#B').addClass('activ');
    })
    $('#submit1').click(function () {
        var S = parseInt($('#S').val());
        if (!S) {
            var S = 20
        }
        var H_array = {
            'Низкие': 2.3,
            'Средние': 2.65,
            'Высокие': 3.3
        };
        var I_array = {
            'Слабая': -15,
            'Средняя': 0,
            'Умеренная': -5,
            'Сильная': 27
        }
        var T_array = {
            '0': 0,
            '1-2': 1,
            '2-3': 2,
            '3-4': 3,
            '4-5': 4,
            'Более 5': 5
        }
        var K_array = {
            'Медленно': -25,
            'Нормальная': 5,
            'Ускоренное': 50,
            'Турбо': 120
        }
        var H_I = $.trim($('#H').val());
        var I_I = $.trim($('#I').val());
        var T_I = $.trim($('#T').val());
        var K_I = $.trim($('#K').val());
        var H = $.trim(H_array[H_I]);
        var I = I_array[I_I];
        var P = parseInt($('#P').val());
        var T = T_array[T_I];
        var P_d = parseInt($('#P_d').val());
        if (!P_d) {
            var P_d = 0
        }
        var K = K_array[K_I];

        if ($('#B').hasClass('activ')) {
            var B = 0.6;
        }
        else {
            var B = 0;
        }
        if ($('#Hei').hasClass('activ')) {
            var Hei = 0.44;
        }
        else {
            var Hei = 0;
        }
        if ($('#G').hasClass('activ')) {
            var G = 1.37;
        }
        else {
            var G = 1;
        }

        var power = ((((S * H / 30.54) + ((S * H / 30.54) / 100 * I) + (P * 0.21 + P_d / 1000) + (T * 0.16) + ((S * H / 30.54) / 100 * K) + B + ((S * H / 30.54) * Hei)) * G)).toFixed(2)
        $('#rez_block').addClass('active');
        $('.selected_block').addClass('selected_activ')
        $('#power').find('.namber').html(power);
        var d = '';
        var nam = ''
        var text = ''
        if (power < 2.2) {
            var d = '1.9-2.2'
            var nam = '7'
            var text = '(семёрки)'
        }
        if (power > 2.2 && power < 2.7) {
            var d = '2.2-2.7'
            var nam = '9'
            var text = '(девятки)'
        }
        if (power > 2.7 && power < 3.4) {
            var d = '2.7-3.4'
            var nam = '12'
            var text = '(двенадцатые)'
        }
        if (power > 3.4 && power < 5.8) {
            var d = '3.4-5.8'
            var nam = '18'
            var text = '(восемнадцатые)'
        }
        if (power > 5.8 && power < 6.9) {
            var d = '5.8-6.9'
            var nam = '24'
            var text = '(двадцатьчетвёртые)'
        }
        $('#dia').find('.namber').html(d);
        $('.power_block').find('.namber').html(nam);
        $('.power_block').find('.text').html(text)

    })
    /*****************************************************************************************************************/
    /**********************************Модальные окна заводы**********************************************************/
    $('.read_m').click(function () {
        var id = $(this).attr('href');
        var win_widtch = $(window).width();
        var win_height = $(window).height();
        $('.modal_fon').css({
            display: 'block',
            opacity: 0,
        })
        $(id).css({
            display: 'block',
            opacity: 0,
        })
        var top = (win_height - $(id).height()) / 2
        if (top < 0) {
            var top = 0;
        }
        var left = (win_widtch - $(id).width()) / 2
        if (left < 0) {
            var left = 0
        }
        $('.modal_fon').css({
            opacity: 1,
            display: 'none',
        })
        $(id).css({
            opacity: 1,
            display: 'none',
            left: left,
            top: top
        })
        $('.modal_fon').fadeIn(500);
        setTimeout(function () {
            $(id).show(500)
        }, 700)
    })
    $('.monufacture_close').click(function () {
        $(this).parents('.monufactur_bkock').hide(500);
        setTimeout(function () {
            $('.modal_fon').fadeOut(500)
        }, 700)
    })

    /*****************************************************************************************************************/
    /************************************PRODUCT*********************************************************************/
    $('.product').hover(
        function () {
            $(this).find('.product__all_info').slideDown(500)
        },
        function () {
            $(this).find('.product__all_info').slideUp(500)
        }
    )
    $('.product__all_info_footer_check_block').click(function () {
        if ($(this).find('.check').hasClass('activ')) {
            $(this).find('.check').removeClass('activ')
        }
        else {
            $(this).find('.check').addClass('activ');
        }
    })
    /****************************************************************************************************************/
    /*******************************************SERCH*******************************************************************/
    $('.header__user_info_info_serch_input,.black_panel_header_serch').click(function () {
        var win_widtch = $(window).width();
        var scroll_top = $(window).scrollTop();
        var top = $(this).offset().top - scroll_top;
        var left = $(this).offset().left;
        if (left > win_widtch / 2) {
            var right = 10;
            var left = 'auto';
        }
        else {
            var right = 'auto';
            var left = 20;
        }
        if ($('.modal_fon').is(":visible")) {
            $('.serch_modal').css({
                display: 'block',
                'opacity': 0
            })
            $('.serch_modal').css({
                display: 'none',
                'opacity': 1,
                'right': right,
                'left': left,
                'top': top
            })


            $('.serch_modal').show(500)

        }
        else {
            $('.modal_fon').css({
                display: 'block',
                'opacity': 0
            })
            $('.serch_modal').css({
                display: 'block',
                'opacity': 0
            })
            $('.serch_modal').css({
                display: 'none',
                'opacity': 1,
                'right': right,
                'left': left,
                'top': top
            })
            $('.modal_fon').css({
                display: 'none',
                'opacity': 1
            })
            $('.modal_fon').fadeIn(500);
            setTimeout(function () {
                $('.serch_modal').show(500);
            }, 500)
        }


    })
    $('#mini_serch').click(function () {
        var win_height = $(window).height();
        var win_widtch = $(window).width();
        $('.modal_fon').css({
            display: 'block',
            'opacity': 0,
        })
        $('.serch_modal').css('display', 'block');
        var height = $('.serch_modal').height();
        var widtch = $('.serch_modal').width();
        if (height >= win_height) {
            var top = 0
        }
        else {
            var top = (win_height - height) / 2
        }
        if (widtch >= win_widtch) {
            var left = 0
        }
        else {
            var left = (win_widtch - widtch) / 2
        }
        $('.serch_modal').css({
            left: left,
            top: top,
            display: 'none'
        });
        $('.modal_fon').css({
            display: 'none',
            'opacity': 1,
        })
        $('.modal_fon').fadeIn(500);
        setTimeout(function () {
            $('.serch_modal').show(500)
        }, 600)

    })
    $('.close_search').click(function () {
        if ($('.black_panel').is(":visible")) {
            $('.serch_modal').hide(300);
        }
        else {
            $('.modal_fon').fadeOut(500)
            setTimeout(function () {
                $('.serch_modal').hide(500);
            }, 800)
        }
    })


    /******************************************************************************************************************/
    /*********************************************Форма ввода номера телефона*******************************************/

    $('#tel_footer').focus(function () {
        $('.popup-left-corner').show(300);

    })
    $('#tel_footer').blur(function () {
        $('.popup-left-corner').hide(300);
    })
    $('#tel_footer').bind("change paste keyup", function () {

        var nambe = String(parseInt($(this).val().replace(/\D+/g, "")));
        var lenght = nambe.length;
        if (lenght == 11) {
            $('.submit').addClass('active');
        }
        else {
            $('.submit').removeClass('active');
        }
        return
    })
    /********************************************timer*****************************************************************/
    var width_win = $(window).width()
    var data = new Date();
    var h = data.getHours() * 60 * 60;
    var m = data.getMinutes() * 60;
    var s = data.getSeconds();
    var total_sec = h + m + s;
    var close_time = 19 * 60 * 60;
    var time = close_time - total_sec;
    if (time <= 0) {
        var open_time = 10 * 60 * 60;
        var time = open_time + (24 * 60 * 60 - total_sec);
        $('.footer_info__section_timer_wrap_zag,.mini_footer_timer_wrap_zag').html('До открытия осталось:')
    }
    if (width_win < 750) {
        $('#mini_timer').attr('data-timer', time)
        $("#mini_timer").TimeCircles({
            "animation": "smooth",
            "bg_width": 0.1,
            "fg_width": 0.1,
            "circle_bg_color": "#252525",
            "time": {
                "Days": {
                    "text": "Days",
                    "color": "#FFCC66",
                    "show": false
                },
                "Hours": {
                    "text": "Hours",
                    "color": "#eb631e",
                    "show": true
                },
                "Minutes": {
                    "text": "Minutes",
                    "color": "#2075d8",
                    "show": true
                },
                "Seconds": {
                    "text": "Seconds",
                    "color": "#71a712",
                    "show": true
                }
            }
        });

    }
    else {
        $('#DateCountdown').attr('data-timer', time)
        $("#DateCountdown").TimeCircles({
            "animation": "smooth",
            "bg_width": 0.1,
            "fg_width": 0.1,
            "circle_bg_color": "#252525",
            "time": {
                "Days": {
                    "text": "Days",
                    "color": "#FFCC66",
                    "show": false
                },
                "Hours": {
                    "text": "Hours",
                    "color": "#eb631e",
                    "show": true
                },
                "Minutes": {
                    "text": "Minutes",
                    "color": "#2075d8",
                    "show": true
                },
                "Seconds": {
                    "text": "Seconds",
                    "color": "#71a712",
                    "show": true
                }
            }
        });
    }


    /******************************************************************************************************************/
    /********************************************SHEMA*****************************************************************/
    $('#schem_time').click(function () {
        $('.modal_fon').fadeIn(500)
        setTimeout(function () {
            $('#schem_big').show(500);
        }, 600)
    })
    $('#schema,#schem_header').click(function () {
        $('.miniature_block').show(500)
    })
    $('.miniature_block').find('.close_mini').click(function () {
        $('.miniature_block').hide(500);

    })
    $('#may_nav_schem').find('a').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        $('.schem_big_block__schem_block_img_block').find('.action').slideUp(500)
        setTimeout(function () {

            $(id).slideDown(500);
            $(id).addClass('action')


        }, 600)


    })


    $('.balun_close').click(function (e) {
        myPlacemark.balloon.close();
    });
    $('.miniature_block').find('.img').click(function () {
        var id = $(this).attr('href');
        $('.modal_fon').fadeIn(500);
        setTimeout(function () {
            $(id).show(500);
            if (id === '#map_big') {
                setTimeout(function () {

                    ymaps.ready(function init() {
                        var myMap = new ymaps.Map('map', {
                            center: [47.24749835534764, 39.77342495767211],
                            zoom: 14,
                            controls: [],
                        });
                        myMap.controls.add('zoomControl');
                        myMap.controls.add('searchControl');
                        myMap.controls.add('routeEditor');
                        // Масштабирование с помощью колесика мышки
                        myMap.behaviors.enable('scrollZoom');
                        // изменение масштаба


                        var mark = new ymaps.Placemark([47.24749835534764, 39.77342495767211], {//создание маркера
                            iconContent: 'Метка',
                            balloonContent: 'г. Ростов-на-Дону, пр. Шолохова, д. 101'
                        }, {
                            preset: 'twirl#blueStretchyIcon',
                            // Опции.
                            // Необходимо указать данный тип макета.
                            iconLayout: 'default#image',
                            // Своё изображение иконки метки.
                            iconImageHref: 'img/map_m.png',
                            // Размеры метки.
                            iconImageSize: [20, 32],
                            // Смещение левого верхнего угла иконки относительно
                            // её "ножки" (точки привязки).
                            iconImageOffset: [-5, -25]
                        });


                        myMap.geoObjects.add(mark);//добавление маркера


                    })
                }, 500)
            }
        }, 500)
        $('.map_close').click(function () {
            $('.map_block').hide(500);
            setTimeout(function () {
                $('.modal_fon').fadeOut(500);
            }, 1000)
        })
        $('.scheme_close').click(function () {
            $('#schem_big').hide(500);
            setTimeout(function () {
                $('.modal_fon').fadeOut(500);
            }, 1000)
        })
    })
    /******************************************************************************************************************/
    /*******************************************ACTION****************************************************************/
    $("#tel_footer").mask("+7(999) 999 99 99");
    $('.section_product_wrap_slider_block').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1148,
                settings: {
                    slidesToShow: 3,
                    centerMode: true

                }
            },
            {
                breakpoint: 866,
                settings: {
                    slidesToShow: 2,
                    centerMode: true

                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    centerMode: true

                }
            }
        ]
    });
    /******************************************************************************************************************/
});