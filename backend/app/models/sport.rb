class Sport < ApplicationRecord
    belongs_to :employee
    validates_presence_of :teamname, "You must enter the name of the team"
    validates_presence_of :city, "The city name cannot be blank"
end
