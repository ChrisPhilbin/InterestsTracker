Rails.application.routes.draw do
  devise_for :users,
  controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations'
  }
  get '/member-data', to: 'members#show'
  
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
