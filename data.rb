require 'pry'
require 'sinatra'
require 'sinatra/reloader'

set :database, {adapter: 'postgresql',
                database: 'stories_db',
                host: 'localhost'}
prefix = ['Sand', 'Scuttle', 'Carver', 'Co','Hopkin','New','Old', 'Ply', 'Attle']
suffix =['well','harbor','ville','wich','scusset','bridge','hasset', 'ton','town','mouth','bourough']
my_towns = []
for n in 0..5
n = "#{prefix.sample}#{suffix.sample}"
my_towns << n
end
