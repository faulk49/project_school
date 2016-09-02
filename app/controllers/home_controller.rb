class HomeController < ApplicationController

  def index
    return if !current_user
    redirect_to dashboard_path
  end
end
