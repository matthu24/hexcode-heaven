export const fetchColors = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/colors'
  })
}

export const fetchColor = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/colors/${id}`
  })
}
