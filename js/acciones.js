// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	audio=window.plugins.LowLatencyAudio;
	audio.preloadFX('B1', 'audio/C.mp3', function(){}, function(msg){alert("Error "+msg);});
	audio.preloadFX('B2', 'audio/D.mp3', function(){}, function(msg){alert("Error "+msg);});
	audio.preloadFX('B3', 'audio/E.mp3', function(){}, function(msg){alert("Error "+msg);});
	audio.preloadFX('B4', 'audio/F.mp3', function(){}, function(msg){alert("Error "+msg);});
	$('#btnjugar').on('click',function(){
		var pantalla = $.mobile.getScreenHeight();
		var encabezado = $('.ui-header').outerHeight(); 
		var pie = $('.ui-footer').outerHeight();
		var contenido = $('.ui-content').outerHeight();
		var alto = ((pantalla - encabezado - pie)/2);
		$('.cuadro').height( alto);
		$('.cuadro').on('mousedown', function (){
			$(this).addClass('pulsado');
			
		});
		
});//btnjugar.click
//}); 
});


