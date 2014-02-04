/*
* jQuery Play.fm widget
* By: Federico Giust
* Version 1.0
* 
* Copyright 2014 Federico Giust
*/

(function ($) {

    $.fn.extend({

        playfmWidget: function(options) {
            
            var apiKey = 'c0c8d0f3a1406dc996bf:399d9aed30';
            var settings = $.extend({
                // These are the defaults.
                artistName : "",
                showPic: true,
                orderBy: "chrono"
            }, options );
            
            return this.each(function(){
                element = $(this).attr('id');
				//console.log('http://api.play.fm/artist/search/' + apiKey + '/name/' + settings.artistName.replace(' ', '+'));	
				$.support.cors = true;
				
				jQuery.ajax({

				  type: 'GET',
				  url: 'http://api.play.fm/artist/search/' + apiKey + '/name/' + settings.artistName.replace(' ', '+'),
				  dataType: 'xml',
				  success: buildWidget

				});//end getJSON function


				function buildWidget(xml){
					var widgetTemplate ='<!---------- PLAY.FM WIDGET START ----------><div style="margin-left:auto; margin-right:auto;min-width:220px;"> <object width="100%" height="150px"><param name="allowscriptaccess" value="always" wmode="transparent"></param><param name="FlashVars" VALUE="url=http%3A%2F%2Fwww.play.fm%2Frecordings%2Fflash%2F01%2Fartist%2F[artistId]%2ForderBy%2F[orderBy]&type=large&showpic=' + settings.showPic + '&widgetGenerator=http://www.play.fm/widgets&op=true"></param><embed src="http://www.play.fm/flash/playfmWidget.swf?url=http%3A%2F%2Fwww.play.fm%2Frecordings%2Fflash%2F01%2Fartist%2F[artistId]%2ForderBy%2F[orderBy]&type=large&showpic=' + settings.showPic + '&widgetGenerator=http://www.play.fm/widgets&op=true" flashVars="url=http%3A%2F%2Fwww.play.fm%2Frecordings%2Fflash%2F01%2Fartist%2F[artistId]%2ForderBy%2F[orderBy]&type=large&showpic=' + settings.showPic + '&widgetGenerator=http://www.play.fm/widgets&op=true" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="false" wmode="transparent" width="100%" height="150px"></embed></object></div><!---------- PLAY.FM WIDGET END ---------->';
				   	var artistId = $(xml).find("artist").attr("id");

				   	widgetTemplate = widgetTemplate.replace('[artistId]', artistId).replace('[artistId]', artistId).replace('[artistId]', artistId);


				   	jQuery('#' + element).append(widgetTemplate);
				}
            });
		}
	});

})(jQuery);