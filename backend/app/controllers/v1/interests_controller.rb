class V1::InterestsController < ApplicationController

    #GET /employees/:employee_id/interests
    def index
        @interests = Interest.where(employee_id: params[:employee_id])
        render :json => @interests
    end

    #POST /employees/:employee_id/interests
    def create
        @interest = Interest.create!(interest_params)
        render :json => @interest
    end

    #GET /employees/:employee_id/interests/:interest_id
    def show
        @employee = Employee.find(params[:employee_id])
        @interests = @employee.interests
        render :json => @interests
    end

    #DELETE /employees/:employee_id/interests/:interest_id
    def destroy
        @employee = Employee.find(params[:employee_id])
        @interest = @employee.interests.find(params[:id])
        @interest.destroy
        render :json => @interest
    end

    private

    def interest_params
        params.permit(:name, :employee_id)
    end

end
