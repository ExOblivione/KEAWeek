/**
 * @file
 * Script for storing selection of VBO view in cookie
 * 
 */

(function ($) {
 
 if (typeof ($.cookie) == "undefined" ) { 
   return false; 
 }
 
  /* Initiallize cookie on first load */	
  var cookieExists = $.cookie('kk_scs_selected');
  
  if ( typeof( cookieExists ) == "undefined" ){
    $.cookie('kk_scs_selected', '', { path:'/' } );
  }

  var loc = window.location;
  if( loc.pathname.indexOf("admin/workbench/simplenews") >=0 ) {
      $.cookie('kk_scs_selected','', { path:'/' });
  }
  
  Drupal.behaviors.kkSCSExtra = {    
    attach: function(context) {

     // Add code for newslatter creation     
     $('#edit-actionscs-views-create-newsletter-action:not(.processed)').each(function(){
       
       if( Drupal.settings.kk_scs_extra.clear_button_name ){
         jQuery('#edit-actionscs-views-create-newsletter-action').after('<input class="form-submit" type="submit" value="'+Drupal.settings.kk_scs_extra.clear_button_name+'" onclick="javascript:jQuery.cookie(\'kk_scs_selected\',\'\',{ path:\'/\' });window.location.reload(true);return false;">');
       }
       
       $(this).click(function(){
        var currentSelection = $.cookie('kk_scs_selected');
        if( !currentSelection && Drupal.settings.kk_scs_extra.newsletter_create_url ){
         window.location.replace(Drupal.settings.kk_scs_extra.newsletter_create_url);
         return false;
        }
       });
       $(this).addClass('processed');
     });


     $('#views-form-kk-newsletter-creation-page .form-type-checkbox input:not(.processed)').each(function(i){
        if ( i ){
	    	var element = $(this);
                var currentSelection = $.cookie('kk_scs_selected');
                var currentNid = $(this).attr("value");
                if ( currentSelection && currentSelection.search(currentNid+';') != -1  ){
                  $(this).attr("checked", true);
                }else{
                  $(this).attr("checked", false);
                }
	        element.click(function(){
	            var cookieVal = $.cookie('kk_scs_selected');
	            var nid = $(this).attr("value");
	            if ( typeof( cookieVal ) == "undefined" || !cookieVal ){
                      cookieVal = ' ';
                    }

	            if ($(this).attr("checked")){
	                // Remove the nid from the cookie
	            	cookieVal = cookieVal.replace(nid+';', '');
	                // Add it
	                cookieVal +=  nid + ';'; 
	            } else {
	            	// Remove the nid from the cookie
	            	cookieVal = cookieVal.replace(nid+';', '');	                
	            }
	            $.cookie('kk_scs_selected', cookieVal,  { path:'/' }  );
	        });
        }
        $(this).addClass('processed');
      });    
  }}
})(jQuery);
;
