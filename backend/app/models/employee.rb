class Employee < ApplicationRecord
    has_many :interests
    has_many :pets
    has_many :sports
    has_many :notes

    mount_uploader :headshot, HeadshotUploader

    def newsfeed

    end

    def self.todays_birthdays
        #return array of employee objects whos birthday it is today based on MM/DD
        Employee.where("strftime('%m%d', date) = ?", Date.today.strftime('%m%d'))
    end
    
    def self.upcoming_birthdays
        #return array of employee objects who have an upcoming birthday within the next 14 days
        Employee.where(date: 0.days.ago .. 14.days.from_now)
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
	      	"pageSize=3&"\
	      	"apiKey=#{ENV['API_KEY']}"

			req = open(url)

			# response_body = req.read
			response_body = JSON.parse(req.read)

			news << response_body

		end

    end

end
