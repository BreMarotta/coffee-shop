class AnnouncementsController < ApplicationController 

    def create 
        new_announcement = Announcement.create!(announcement_params)
        render json: new_announcement, status: :created
    end

    def update

    end

    def delete
    
    end

    private
    
    def announcement_params
        params.require(:announcement).permit(:title, :msg, :active, :img)
    end

end