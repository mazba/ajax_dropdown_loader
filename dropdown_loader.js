/**
 * Created by Mazba Kamal on 12/29/2016.
 */
$(function(){
    var selectWrpId = 'dropdwon-loader';
    var windowWrpId = 'window-loader';
    var dropdownGifUrl = DropdownLoader.dropdownGifUrl || DropdownLoader.pluginUrl+'/img/1.gif';
    var windowGifUrl = DropdownLoader.dropdownGifUrl || DropdownLoader.pluginUrl+'/img/5.gif';
    //adding css to dom
    $('head').append('<link rel="stylesheet" href="'+DropdownLoader.pluginUrl+'/loader.css" type="text/css" />');
    //adding window loader to dom
    var windowLoaderImg = '<div id="'+windowWrpId+'"><img src="'+windowGifUrl+'"</div>';
    $(document.body).append(windowLoaderImg);
    jQuery(document).ajaxStart(function(e)
    {
        try {
            var $el = $(e.target.activeElement);
            if($el.is('select')){
                var img = '<div id="'+selectWrpId+'"><img src="'+dropdownGifUrl+'"</div>';
                $el.after(img);
                var $loaderWrp = $('#'+selectWrpId);
            }
            else{
                $('#'+windowWrpId).fadeIn(350);
            }

        } catch (ex) {
            console.log(ex);
        }
    });
    jQuery(document).ajaxComplete(function(e,xhr,options)
    {
        try {
            var $el = $(e.target.activeElement);
            if($el.is('select')){
                console.log($el.siblings(selectWrpId));
                $el.siblings('#'+selectWrpId).remove();
            }
            else{
                $('#'+windowWrpId).fadeOut(350);
            }

        } catch (ex) {
            console.log(ex);
        }
    });
});