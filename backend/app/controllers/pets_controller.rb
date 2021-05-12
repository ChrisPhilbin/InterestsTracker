class PetsController < ApplicationController

    #GET /employees/:employee_id/pets
    def index
        @pets = Pet.where(employee_id: params[:employee_id])
        render :json => @pets
    end

    #POST /employees/:employee_id/pets
    def create
        @pet = Pet.create!(pet_params)
        render :json => @pet
    end

    #GET /employees/:employee_id/pets/:pet_id
    def show
        @employee = Employee.find(params[:employee_id])
        @pet = @employee.pet.find(params[:id])
        render :json => @pet
    end

    #DELETE /employees/:employee_id/pets/:pet_id
    def destroy
        @employee = Employee.find(params[:employee_id])
        @pet = @employee.interests.find(params[:id])
        @pet.destroy
        render :json => @pet
    end

    private

    def pet_params
        params.permit(:name, :kind, :birthday, :notes, :employee_id)
    end

end
