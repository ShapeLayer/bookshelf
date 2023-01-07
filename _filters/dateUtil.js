const getYear = (year) => {
  return new Date(year).getFullYear()
}

module.exports = {
  getYear: getYear
}