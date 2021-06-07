class Employee < ApplicationRecord

    require 'pry'
    require 'hash_dot'

    has_many :interests,   :dependent => :delete_all
    has_many :pets,        :dependent => :delete_all
    has_many :sports,      :dependent => :delete_all
    has_many :notes,       :dependent => :delete_all
    has_many :interactions, :dependent => :delete_all

    # validates_presence_of :name, message: "Employee name cannot be blank"
    # validates_presence_of :hire_date, message: "Employee hire date cannot be blank"
    # validates_presence_of :last_interaction, message: "Employee last interaction date cannot be blank"

    mount_uploader :headshot, HeadshotUploader

    def self.todays_birthdays
        #return array of employee objects whos birthday it is today based on MM/DD
        Employee.where("strftime('%m%d', birthday) = ?", Date.today.strftime('%m%d'))
    end
    
    def self.upcoming_birthdays
        upcoming_birthdays = []
        Employee.all.each do |employee|
            if employee.birthday
                mmdd = employee.birthday.strftime('%m%d').to_i
                if mmdd <= 14.days.from_now.strftime('%m%d').to_i
                    upcoming_birthdays << employee
                end
            end
        end
        upcoming_birthdays
    end

    def self.upcoming_work_anniversaries
        upcoming_work_anniversaries = []
        Employee.all.each do |employee|
            if employee.hire_date
                mmdd = employee.hire_date.strftime('%m%d').to_i
                if mmdd <= 14.days.from_now.strftime('%m%d').to_i
                    upcoming_work_anniversaries << employee
                end
            end
        end
        upcoming_work_anniversaries
    end

    def self.overdue_alerts
        overdue_alerts = []
        Employee.all.each do |employee|
            if employee.last_interaction.strftime('%m%d').to_i < 4.days.ago.strftime('%m%d').to_i
                overdue_alerts << employee
            end
        end
        overdue_alerts
    end

    def self.update_all_employee_interests(interests, pets, teams)
        combinedArr = []

        interests.each do |interest|
            combinedArr << interest.name
        end

        pets.each do |pet|
            combinedArr << pet.kind
        end

        teams.each do |team|
            combinedArr << team.city + ' ' + team.teamname
        end

        if combinedArr.empty?
            return {}
        end

        news = []

        combinedArr.each do |i|
			url = "http://newsapi.org/v2/everything?"\
	      	"q=#{i}&"\
	      	"from=#{Time.now.strftime("%Y-%m-%d")}&"\
	      	"sortBy=popularity&"\
	      	"pageSize=1&"\
	      	"apiKey=#{ENV['API_KEY']}"

			req = URI.open(url)

			# response_body = req.read
			response_body = JSON.parse(req.read)

            data = response_body.to_dot

            news << data.articles

		end

        return news.flatten!

    end

end
