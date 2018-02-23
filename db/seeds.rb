# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




Color.destroy_all
Group.destroy_all
Hex.destroy_all

g1 = Group.create!(name: '1')
g2 = Group.create!(name: '2')
g3 = Group.create!(name: '3')
g4 = Group.create!(name: '4')
g5 = Group.create!(name: '5')
g6 = Group.create!(name: '6')
g7 = Group.create!(name: '7')

c1 = Color.create!(name: 'red')
c2 = Color.create!(name: 'orange')
c3 = Color.create!(name: 'yellow')
c4 = Color.create!(name: 'green')
c5 = Color.create!(name: 'blue')
c6 = Color.create!(name: 'purple')
c7 = Color.create!(name: 'gray')

h1 = Hex.create!(group_id: g1.id, color_id: c1.id, code: 'ffe6e6')
h2 = Hex.create!(group_id: g2.id, color_id: c1.id, code: 'ffcccc')
h2 = Hex.create!(group_id: g3.id, color_id: c1.id, code: 'ffb3b3')
h2 = Hex.create!(group_id: g4.id, color_id: c1.id, code: 'ff9999')
h2 = Hex.create!(group_id: g5.id, color_id: c1.id, code: 'ff8080')
h2 = Hex.create!(group_id: g6.id, color_id: c1.id, code: 'ff6666')
h2 = Hex.create!(group_id: g7.id, color_id: c1.id, code: 'ff4d4d')
h2 = Hex.create!(group_id: g1.id, color_id: c1.id, code: 'ff3333')
h2 = Hex.create!(group_id: g2.id, color_id: c1.id, code: 'ff1a1a')
h2 = Hex.create!(group_id: g3.id, color_id: c1.id, code: 'ff0000')
h2 = Hex.create!(group_id: g4.id, color_id: c1.id, code: 'e60000')
h2 = Hex.create!(group_id: g5.id, color_id: c1.id, code: 'cc0000')
h2 = Hex.create!(group_id: g6.id, color_id: c1.id, code: 'b30000')
h2 = Hex.create!(group_id: g7.id, color_id: c1.id, code: '990000')
h2 = Hex.create!(group_id: g1.id, color_id: c1.id, code: '800000')
h2 = Hex.create!(group_id: g2.id, color_id: c1.id, code: '660000')
