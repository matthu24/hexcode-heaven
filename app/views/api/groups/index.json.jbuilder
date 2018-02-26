@groups.each do |group|

  json.set! group.id do
    json.extract! group, :id, :name
    hexes = group.hexes
    json.hexes do
      if hexes
        hexes.each do |hex|
          json.set! hex.id do
            json.extract! hex, :color_id, :group_id, :code
          end
        end
      end
    end

  end
end
