

















json.extract! color, :id, :name
  hexes = color.hexes
  json.hexes do
    if hexes
      hexes.each do |hex|
        json.set! hex.id do
          json.extract! hex, :color_id, :group_id, :code
        end
      end
    end
  end
