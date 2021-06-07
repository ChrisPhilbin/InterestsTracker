class Pet < ApplicationRecord
  belongs_to :employee
  validates_presence_of, :name, message: "The pet name cannot be blank"
  validates_presence_of, :kind, message: "The kind of pet needs to be provided"
  
end
