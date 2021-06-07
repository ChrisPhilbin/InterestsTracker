class Interest < ApplicationRecord
  belongs_to :employee
  validates_presence_of :name, message: "An interest must have a name"
end
