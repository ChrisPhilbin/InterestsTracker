class Users::SessionsController < Devise::SessionsController
    respond_to :json
    require 'pry'
  
    private
  
    def respond_with(resource, _opts = {})
      if resource.id == nil && resource.email == ""
        render json: { message: 'You are not logged in.' }, status: :unauthorized
      else
        render json: { message: 'You are logged in.' }, status: :ok
      end
    end
  
    def respond_to_on_destroy
      log_out_success && return if current_user
  
      log_out_failure
    end
  
    def log_out_success
      render json: { message: "You are logged out." }, status: :ok
    end
  
    def log_out_failure
      render json: { message: "Hmm nothing happened."}, status: :unauthorized
    end
  end