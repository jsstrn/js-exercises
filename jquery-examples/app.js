var homes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
]

$(document).ready(function () {
  console.log('Wow')
  // change button from red to green
  $('#add-home').removeClass('btn-danger').addClass('btn-success')
  // center heading to center
  $('h1').addClass('text-center')

  function addHomeToTable (home) {
    $address = $('<td>').text(home.address)
    $sf = $('<td>').text(home.sf)
    $bedrooms = $('<td>').text(home.bedrooms)
    $baths = $('<td>').text(home.baths)
    $price = $('<td>').text(home.price)
    $btn = $('<button>').addClass('btn btn-xs btn-danger').text('Remove')
    $button = $('<td>').append( $btn )
    $('<tr>').append([$address, $sf, $bedrooms, $baths, $price, $button]).appendTo($('tbody'))
  }

  homes.forEach(function (home) {
    addHomeToTable(home)
  })

  $('tbody tr').hover(function () {
    $(this).css('background-color', 'whitesmoke')
  }, function () {
    $(this).css('background-color', 'white')
  })

  $('button').on('click', function () {
    $(this).closest('tr').fadeOut(1000, function () {
      $(this).remove()
    })
  })

  $('form').submit(function (event) {
    event.preventDefault()
    var entries = $(this).serializeArray()
    var home = {
      address: entries[0].value,
      sf: entries[1].value,
      bedrooms: entries[2].value,
      baths: entries[3].value,
      price: '$' + entries[4].value
    }
    addHomeToTable(home)
  })

})
