$(function(){
    $('.tab-panels .tabs li').on('click', function() {
        var $panel = $(this).closest('.tab-panels');

        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');
        var showPanel = $(this).attr('rel');
        $panel.find('.panel.active').slideUp(300, showNext);

        function showNext() {
            $(this).removeClass('active');
            $('#'+showPanel).slideDown(300, function() {
                $(this).addClass('active');
            });
        }
    });
});