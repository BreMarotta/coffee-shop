class ImagesController < ApplicationController 

    skip_before_action :authorize, only: :index

    def index
        render json: Image.all, status: :ok
    end

    def create 
        new_image = Image.create!(image_params)
        render json: new_image, status: :created
    end

    def update

    end

    def delete
    
    end

    private
    
    def image_params
        params.require(:image).permit(:title, :img, :active)
    end

end