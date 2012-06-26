class ApplicationController < ActionController::Base

  	protect_from_forgery

  	before_filter :is_loggedin, :except => [:login, :authenticate, :logout]


  	#
  	# Index request
  	#
	def index
		@last_added = Song.added_last(20)
 	end


  protected

	  #
	  # Retrieve the current user
	  #
	  def current_user
	  	session[:user]
	  end


	  #
	  # determine if user is logged in
	  #
	  def is_loggedin 
	  	if not current_user.nil? 
	  		return true
	  	else
	  		redirect_to :action => :login, :controller => :authentication
	  		return false
	  	end
	  end

end
