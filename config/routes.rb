Rails.application.routes.draw do
  root to: "drinks#index"
  resources :drinks
  resources :coffees, only: [:index, :show] do 
    resources :drinks, only: [:create, :index]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
