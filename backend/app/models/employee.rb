class Employee < ApplicationRecord
    has_many :interests
    has_many :pets
end
