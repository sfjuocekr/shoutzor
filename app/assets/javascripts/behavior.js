(function($, undefined) {

	if ($("body").hasClass("searchpage")) {

		$("#songlist").songList();
		$("#status").playerStatus();

		$("#comingup").comingUp({ 
			container : "#comingUpContainer"
		});

		$("#effect").visualBase({
			plugins : [

				new Plugins.Fuel({}),
				new Plugins.TextScroller({
					instructions : [
						// introduction text
						{
							text : "welcome to _\nCLASS '12!",
							effects : [ 
								['up'], ['wait', {delay: 3000}], ['hide']
							]
						},

						// where to upload to
						{
							text : "upload files to _\n\\\\shoutzor.com",
							effects : [ 
								['up'], ['wait', {delay: 1500}], ['hide']
							]
						},

						{
							type : 'pattern',
							pattern : [],
							effects : [ ['pulsate'] ]
						},

						// when: at end of song
						// show: coming up next
						{
							when : function() { return false; /* at end of current song */ },
							text : function() { return 'coming up next: NextSong'; },
							effects : [ ['left'] ]
						}
					]
				})
			]
		});
		
		$("#searchbox").search({
			onSearch : function(item, q) {
				$("#songlist").data("songList").retrieveItems(item, q);
			}
		});

	}

	// login page
	if ($("body").hasClass("loginpage")) {

		// fullscreen resize
		$(window).resize(function() {
			$("body").css("height", $(window).innerHeight());
		});

		// set innerheight
		$("body").css("height", $(window).innerHeight());
		$("#effect").attr("width", $(window).innerWidth());
		$("#effect").attr("height", 240);


		var blue = function(x) {
				return {
					r : 0.1,
					g : 0.4,
					b : 0.9
				};			
		}

		var red = function(x) {
			if (x > 100) {
				return {
					r : 0.9,
					g : 0.9,
					b : 0.0
				};
			}
			else if (x > 50) {
				return {
					r : 0.9,
					g : 0.45 ,
					b : 0.0
				};
			}
			else {
				return {
					r : 0.9,
					g : 0,
					b : 0
				};
			}				
		};

		$("#effect").visualBase({
			width : 404,
			height : 250,
			blockSize : 8,
			maxWidth: 100,
			maxHeight: 30,
			tint : blue,
			transparent: true,
			plugins : [ new Plugins.Fuel({}) ]
		});		

			
	}

})(jQuery);

