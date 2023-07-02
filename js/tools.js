function getRouteQuery() {
  var res = {}
  var query = location.search.substring(1)
  if (!query) return {}
  query.split('&').forEach(item => {
    var target = item.split('=')
    res[target[0]] = target[1]
  })
  return res
}
