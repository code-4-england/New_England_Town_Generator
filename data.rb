require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

get '/' do
  erb :towns
end


def create_town
  prefix = ['Sand', 'Scuttle', 'Carver', 'Co','Hopkin','New','Old', 'Ply', 'Attle']
  suffix =['well','harbor','ville','wich','scusset','bridge','hasset', 'ton','town','mouth','bourough']
  n = "#{prefix.sample}#{suffix.sample}"
end
