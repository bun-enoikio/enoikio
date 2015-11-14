Rails.application.routes.draw do
  get 'test'  => 'test#index'

  get 'register'  => 'register#index'
  

  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      scope 'registration' do
        post 'signin' => 'registration#signin' 
      end
    end
  end

end
