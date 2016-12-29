/**
 * Created by Mazba Kamal on 12/29/2016.
 */
$(function(){
    var selectWrpId = 'dropdwon-loader';
    var windowWrpId = 'window-loader';
    jQuery(document).ajaxStart(function(e)
    {
        try {
            var $el = $(e.target.activeElement);
            var img = '<div id="'+selectWrpId+'"><img src="'+DropdownLoader.pluginUrl+'/1.gif"</div>';
            if($el.is('select')){
                $el.after(img);
                var $loaderWrp = $('#'+selectWrpId);
                $loaderWrp.find('img').css({width:'28px',padding:'3px'});
            }
            else{
                $(document.body)
            }

        } catch (ex) {
            console.log(ex);
        }
    });
    jQuery(document).ajaxComplete(function(e,xhr,options)
    {
        try {
            var $el = $(e.target.activeElement);
            console.log($el.siblings(selectWrpId));
            $el.siblings('#'+selectWrpId).remove();

        } catch (ex) {
            console.log(ex);
        }
    });
});