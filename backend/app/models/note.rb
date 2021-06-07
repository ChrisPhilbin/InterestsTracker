class Note < ApplicationRecord
  belongs_to :employee
  validates_presence_of :contents, message: "The content of the note cannot be blank"
end
