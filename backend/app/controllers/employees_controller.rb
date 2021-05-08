class EmployeesController < ApplicationController

    #GET /employees
    def index
        @employees = Employee.all
        render :json => @employees
    end

    #POST /employees
    def create
        @employee = Employee.create!(employee_params)
        json_response(@employee)
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
    end


    private

    def employee_params
        params.permit(:name, :hire_date, :last_interaction)
    end

end
