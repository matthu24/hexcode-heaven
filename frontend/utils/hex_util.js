export const fetchHexes = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/hexes'
  })
}

export const fetchHex = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/hexes/${id}`
  })
}
