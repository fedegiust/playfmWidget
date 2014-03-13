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
                type: "artist", // options: artist, club, festival, label, profile, event, style, radioshow, latest, recording
                searchItem : "", // value of the search item
                flexible: true, // false for fixed size
                widthPixels: "", // this options is used when fixed size is enabled
                picture: true,
                sortedBy: "date" // additional options: popularity
            }, options );
            
            return this.each(function(){
                var element = $(this).attr('id');
				
                if( settings.type == 'artist' ){
                	url = 'http://api.play.fm/artist/search/' + apiKey + '/name/' + settings.searchItem.replace(' ', '+');
                }else if( settings.type == 'club' ){

                }else if( settings.type == 'festival' ){
                	
                }else if( settings.type == 'label' ){

                }else if( settings.type == 'profile' ){

                }else if( settings.type == 'event' ){

                }else if( settings.type == 'style' ){

                }else if( settings.type == 'radioshow' ){

                }else if( settings.type == 'latest' ){

                }else if( settings.type == 'recording' ){

                }
                
                $.support.cors = true;

				jQuery.ajax({

				  	type: 'GET',
				  	url: url,
			    	beforeSend: function(xhr) {
    					xhr.setRequestHeader("Origin", "https://app.example.com");
					},
					dataType: 'xml',
					success: buildWidget

				});//end getJSON function


				function buildWidget(xml){
					var widgetTemplate = '<!---------- PLAY.FM WIDGET START ---------->';
					widgetTemplate += '<div style="margin-left:auto; margin-right:auto;min-width:220px;">';
					widgetTemplate += '<object width="100%" height="150px"><param name="allowscriptaccess" value="always" wmode="transparent"></param>';
					widgetTemplate += '<param name="FlashVars" VALUE="url=http%3A%2F%2Fwww.play.fm%2Frecordings%2Fflash%2F01%2Fartist%2F[artistId]%2ForderBy%2Fchrono&type=large&showpic=true&widgetGenerator=http://www.play.fm/widgets&op=true"></param>';
					widgetTemplate += '<embed src="http://www.play.fm/flash/playfmWidget.swf?url=http%3A%2F%2Fwww.play.fm%2Frecordings%2Fflash%2F01%2Fartist%2F[artistId]%2ForderBy%2Fchrono&type=large&showpic=true&widgetGenerator=http://www.play.fm/widgets&op=true" flashVars="url=http%3A%2F%2Fwww.play.fm%2Frecordings%2Fflash%2F01%2Fartist%2F[artistId]%2ForderBy%2Fchrono&type=large&showpic=true&widgetGenerator=http://www.play.fm/widgets&op=true" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="false" wmode="transparent" width="100%" height="150px"></embed>';
					widgetTemplate += '</object>';
					widgetTemplate += '</div>';
					widgetTemplate += '<!---------- PLAY.FM WIDGET END ---------->';
				   	var artistId = $(xml).find("artist").attr("id");

				   widgetTemplate = widgetTemplate.replace('[artistId]', artistId).replace('[artistId]', artistId).replace('[artistId]', artistId);

				   jQuery('#' + element).append(widgetTemplate);
				}
            });
		}
	});

})(jQuery);