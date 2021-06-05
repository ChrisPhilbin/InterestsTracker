class EmployeesController < ApplicationController

    before_action :authenticate_user!

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
        render :json => @employee
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

    def dashboard
        @todays_birthdays            = Employee.todays_birthdays
        @upcoming_birthdays          = Employee.upcoming_birthdays
        @upcoming_work_anniversaries = Employee.upcoming_work_anniversaries
        @overdue_alerts              = Employee.overdue_alerts
        render :json => { overdue_alerts: @overdue_alerts, todays_birthdays: @todays_birthdays, upcoming_birthdays: @upcoming_birthdays, upcoming_work_anniversaries: @upcoming_work_anniversaries }
    end

    private

    def employee_params
        params.require(:employee).permit(:name, :hire_date, :last_interaction, :headshot, :birthday)
    end

end
