class SessionsController < ApplicationController

    # skip_before_action :authorize, only: :create

    #login
    def create 
        admin = Admin.find_by(username: params[:username])
        if admin&.authenticate(params[:password])
            session[:admin_id] = admin.id
            render json: admin
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end   
    end

    #logout
    def destroy
        session.clear
    end
end
