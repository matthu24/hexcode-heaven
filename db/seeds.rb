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

c1 = Color.create!(name: 'Red')
c2 = Color.create!(name: 'Orange')
c3 = Color.create!(name: 'Yellow')
c4 = Color.create!(name: 'Green')
c5 = Color.create!(name: 'Blue')
c6 = Color.create!(name: 'Purple')
c7 = Color.create!(name: 'Gray')

h1 = Hex.create!(group_id: g1.id, color_id: c1.id, code: 'ffe6e6')
h2 = Hex.create!(group_id: g2.id, color_id: c1.id, code: 'ffcccc')
h3 = Hex.create!(group_id: g3.id, color_id: c1.id, code: 'ffb3b3')
h4 = Hex.create!(group_id: g4.id, color_id: c1.id, code: 'ff9999')
h5 = Hex.create!(group_id: g5.id, color_id: c1.id, code: 'ff8080')
h6 = Hex.create!(group_id: g6.id, color_id: c1.id, code: 'ff6666')
h7 = Hex.create!(group_id: g7.id, color_id: c1.id, code: 'ff4d4d')
h8 = Hex.create!(group_id: g1.id, color_id: c1.id, code: 'ff3333')
h9 = Hex.create!(group_id: g2.id, color_id: c1.id, code: 'ff1a1a')
h10 = Hex.create!(group_id: g3.id, color_id: c1.id, code: 'ff0000')
h11 = Hex.create!(group_id: g4.id, color_id: c1.id, code: 'e60000')
h12 = Hex.create!(group_id: g5.id, color_id: c1.id, code: 'cc0000')
h13 = Hex.create!(group_id: g6.id, color_id: c1.id, code: 'b30000')
h14 = Hex.create!(group_id: g7.id, color_id: c1.id, code: '990000')
h15 = Hex.create!(group_id: g1.id, color_id: c1.id, code: '800000')
h16 = Hex.create!(group_id: g2.id, color_id: c1.id, code: '660000')

h17 = Hex.create!(group_id: g1.id, color_id: c2.id, code: 'fff2e6')
h18 = Hex.create!(group_id: g2.id, color_id: c2.id, code: 'ffe6cc')
h19 = Hex.create!(group_id: g3.id, color_id: c2.id, code: 'ffd9b3')
h20 = Hex.create!(group_id: g4.id, color_id: c2.id, code: 'ffcc99')
h21 = Hex.create!(group_id: g5.id, color_id: c2.id, code: 'ffbf80')
h22 = Hex.create!(group_id: g6.id, color_id: c2.id, code: 'ffb366')
h23 = Hex.create!(group_id: g7.id, color_id: c2.id, code: 'ffa64d')
h24 = Hex.create!(group_id: g1.id, color_id: c2.id, code: 'ff9933')
h25 = Hex.create!(group_id: g2.id, color_id: c2.id, code: 'ff8c1a')
h26 = Hex.create!(group_id: g3.id, color_id: c2.id, code: 'ff8000')
h27 = Hex.create!(group_id: g4.id, color_id: c2.id, code: 'e67300')
h28 = Hex.create!(group_id: g5.id, color_id: c2.id, code: 'cc6600')
h29 = Hex.create!(group_id: g6.id, color_id: c2.id, code: 'b35900')
h30 = Hex.create!(group_id: g7.id, color_id: c2.id, code: '994d00')
h31 = Hex.create!(group_id: g1.id, color_id: c2.id, code: '804000')
h32 = Hex.create!(group_id: g2.id, color_id: c2.id, code: '663300')
