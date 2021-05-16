Rails.application.routes.draw do
  get '/employees/:employee_id/newsfeed', to: 'employees#newsfeed'

  resources :employees do
    resources :interests
    resources :pets
    resources :sports
    resources :notes
  end
end
