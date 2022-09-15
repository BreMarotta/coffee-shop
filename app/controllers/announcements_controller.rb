class AnnouncementsController < ApplicationController 

    def create 
    
    end

    def update

    end

    def delete
    
    end

    private
    
    def announcement_params
        params.require(:announcement).permit()
    end

end