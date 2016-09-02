class DashboardController < ApplicationController

  def index
    @dashboard = Dashboard.new
    #-NOTE weather, date, time
  end

end
