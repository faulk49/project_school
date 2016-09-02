class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :authenticate_user!

  def current_user
    if devise_controller?
      @current_user = super
    else
      @current_user ||= super || GuestUser.new
    end
  end

  protected

  def after_sign_out_path
    root_path
  end
end
