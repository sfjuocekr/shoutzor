(function($, undefined) {

	/**
	 * Widget for player status
	 */
	$.widget("shoutzor.playerStatus", {

		/**
		 * Default options
		 */
		options : {
		},

		/**
		 * Initialize
		 */
		_create : function() {
			var $this = this;

			$this.element = $(this.element);

			$this.name = $this.element.find(".name");
			$this.length = $this.element.find(".length");

			setInterval(function() {
				$.get(
					"/now_playing", { "tstamp" : new Date().getTime() },
					function(result) {
						$this._renderItem(result);
					},
					"json"
				);
			}, 1000);

			$this._renderItem($this.element.data("status"));
		},

		/**
		 * Render the item
		 */
		_renderItem : function(status) {
			var $this = this;

			$this.name.text(status.song.title + " by " + status.song.artist);
			$this.length.text(
				status.formatted.playtime + " / " + 
				status.formatted.track_length
			);
		},


	});

})(jQuery);