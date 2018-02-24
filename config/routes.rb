Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do










    resources :colors, only: [:create,:show,:index]
    resources :hexes, only: [:create,:show,:index]
    resources :groups, only: [:create,:show,:index]

  end
end
