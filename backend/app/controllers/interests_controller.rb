class InterestsController < ApplicationController

    def index
        @interests = Interest.where(employee_id: params[:employee_id])
        render :json => @interests
    end

end
