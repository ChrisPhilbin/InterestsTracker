class Employee < ApplicationRecord

    require 'pry'
    require 'hash_dot'

    has_many :interests, :dependent => :delete_all
    has_many :pets,      :dependent => :delete_all
    has_many :sports,    :dependent => :delete_all
    has_many :notes,     :dependent => :delete_all

    mount_uploader :headshot, HeadshotUploader

    def newsfeed

    end

    def self.todays_birthdays
        #return array of employee objects whos birthday it is today based on MM/DD
        Employee.where("strftime('%m%d', birthday) = ?", Date.today.strftime('%m%d'))
    end
    
    def self.upcoming_birthdays
        #return array of employee objects who have an upcoming birthday within the next 14 days
        Employee.where(birthday: 0.days.ago .. 14.days.from_now)
    end

    def self.upcoming_work_anniversaries
        Employee.where(hire_date: 20.days.ago .. 14.days.from_now)
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
