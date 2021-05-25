class InteractionsController < ApplicationController

    require 'pry'

    #GET /employees/:employee_id/interactions
    def index
        binding.pry
        @interactions = Employee.find(params[:employee_id]).interactions
        render :json => @interactions
    end

    #POST /employees/:employee_id/interactions
    def create
        @interaction = Interaction.create!(interaction_parms)
        render :json => @interaction
    end

    #DELETE /employees/:employee_id/interactions/:interaction_id
    def destroy
        @interst = Employee.find(params[:employee_id]).interests.find(params[:id])
        @interest.destroy
        render :json => @interest
    end

    private

    def interaction_parms
        params.require(:interaction).permit(:type, :notes, :employee_id)
    end

end