# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_14_111917) do

  create_table "employees", force: :cascade do |t|
    t.string "name"
    t.datetime "hire_date"
    t.datetime "last_interaction"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "headshot"
  end

  create_table "interests", force: :cascade do |t|
    t.string "name"
    t.integer "employee_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["employee_id"], name: "index_interests_on_employee_id"
  end

  create_table "pets", force: :cascade do |t|
    t.string "name"
    t.string "kind"
    t.text "notes"
    t.date "birthday"
    t.integer "employee_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["employee_id"], name: "index_pets_on_employee_id"
  end

  create_table "sports", force: :cascade do |t|
    t.string "teamname"
    t.string "city"
    t.integer "employee_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["employee_id"], name: "index_sports_on_employee_id"
  end

  add_foreign_key "interests", "employees"
  add_foreign_key "pets", "employees"
  add_foreign_key "sports", "employees"
end
