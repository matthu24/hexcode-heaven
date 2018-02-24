export const fetchGroups = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/groups'
  })
}

export const fetchGroup = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/groups/${id}`
  })
}
