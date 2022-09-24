class ApplicationController < ActionController::API
    include ActionController::Cookies

rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

before_action :authorize

    private
    
    def authorize
        @admin = Admin.find_by(id: session[:admin_id])
        render json: { errors: ["Unauthorized"] }, status: :unauthorized unless @admin
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end 
    
end
