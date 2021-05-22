class InteractionsController < ApplicationController

    #GET /employees/:employee_id/interactions
    def index
        @interactions = Employee.find(params[:id].interactions)
        render :json => @interactions
    end

    #POST /employees/:employee_id/interactions
    def create
        @interaction = Interaction.create!(interaction_parms)
        render :json => @interaction
    end

    def destroy
        @interst = Employee.find(params[:employee_id]).interests.find(params[:id])
        @interest.destroy
        render :json => @interest
    end

    private

    def interaction_parms
        params.require(:interaction).permit(:type, :notes, :employee_id)
