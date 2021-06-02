Rails.application.routes.draw do

  get '/', to: 'static#home'
  get '/employees/:employee_id/newsfeed', to: 'employees#newsfeed'
  get '/employees/dashboard',             to: 'employees#dashboard'

  resources :employees do
    resources :interactions
    resources :interests
    resources :pets
    resources :sports
    resources :notes
  end
end
