require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, {adapter: 'postgresql',
                database: 'stories_db',
                host: 'localhost'}

class Town < ActiveRecord::Base

end

get '/' do
  erb :towns
end

def create_town
  prefix = ['Sand', 'Scuttle', 'Carver', 'Co','Hopkin','New','Old', 'Ply', 'Attle']
  suffix =['well','harbor','ville','wich','scusset','bridge','hasset', 'ton','town','mouth','bourough']
  n = "#{prefix.sample}#{suffix.sample}"
end
