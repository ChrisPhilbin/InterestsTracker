class SportsController < ApplicationController

    #GET /employees/:employee_id/sports
    def index
        @sports = Sport.where(employee_id: params[:employee_id])
        render :json => @sports
    end

    #POST /employees/:employee_id/sports
    def create
        @sport = Sport.create!(sport_params)
        render :json => @sport
    end

    #GET /employees/:employee_id/sports/:sport_id
    def show
        @sport = Sport.find(params[:sport_id])
        render :json => @sport
    end

    #DELETE /employees/:employee_id/sports/:sport_id
    def destroy
        @sport = Sport.find(params[:id])
        @sport.destroy
        render :json => @sport
    end

    private

    def sport_params
        params.permit(:teamname, :city, :employee_id)
    end

end
