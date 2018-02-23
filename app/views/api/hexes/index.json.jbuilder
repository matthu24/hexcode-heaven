















@hexes.each do |hex|
  json.set! hex.id do
    json.extract! hex, :id, :group_id, :color_id, :code
  end
end
