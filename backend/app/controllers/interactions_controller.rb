class InteractionsController < ApplicationController

    require 'pry'

    #GET /employees/:employee_id/interactions
    def index
        @interactions = Employee.find(params[:employee_id]).interactions.take(10)
        render :json => @interactions
    end

    #POST /employees/:employee_id/interactions
    def create
        @interaction = Interaction.create!(interaction_parms)
        render :json => @interaction
    end

    #GET /employees/:employee_id/interactions/:interaction_id
    def show
        @employee = Employee.find(params[:employee_id])
        @interaction = @employee.interactions.find(params[:id])
        render :json => @interaction
    end

    #DELETE /employees/:employee_id/interactions/:interaction_id
    def destroy
        @interaction = Employee.find(params[:employee_id]).interactions.find(params[:id])
        @interaction.destroy
        render :json => @interaction
    end

    private

    def interaction_parms
        params.require(:interaction).permit(:kind, :notes, :employee_id)
    end

end