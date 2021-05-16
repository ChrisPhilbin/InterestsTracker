class EmployeesController < ApplicationController

    require 'pry'

    #GET /employees
    def index
        @employees = Employee.all
        render :json => @employees
    end

    #POST /employees
    def create
        @employee = Employee.create!(employee_params)
        binding.pry
        render :json => @employee
    end

    #GET /employees/:employee_id
    def show
        @employee = Employee.find(params[:id])
        render :json => @employee
    end

    #PUT /employees/:employee_id
    def update
        @employee = Employee.find(params[:id])
        @employee.update(employee_params)
    end

    #DELETE /employees/:employee_id
    def destroy
        @employee = Employee.find(params[:id])
        @employee.destroy
        render :json => @employee
    end

    #GET /employees/:employee_id/newsfeed
    def newsfeed 
        @employee = Employee.find(params[:employee_id])
        @news = Employee.update_all_employee_interests(@employee.interests, @employee.pets, @employee.sports)
        render :json => @news
    end

    private

    def employee_params
        params.require(:employee).permit(:name, :hire_date, :last_interaction, :headshot)
    end

end
