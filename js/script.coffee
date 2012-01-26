portfolios = ->
  v_denominator_offset = 20
  v_offset = 0
  $('.portfolio-block').each ->
    j_portfolio = $(this)
    v_height = parseInt(j_portfolio.css('height')) +  parseInt j_portfolio.css('padding-top')
    v_width = parseInt(j_portfolio.css('width')) + parseInt j_portfolio.css('padding-left')
    j_portfolio.mousemove (event) ->
      v_x = Math.round 100 * (event.pageX - this.offsetLeft)/(v_width + v_denominator_offset) - v_offset
      v_y = Math.round 100 * (event.pageY - this.offsetTop)/(v_height + v_denominator_offset) - v_offset
      $(this).css 'background-position', v_x + '% ' + v_y + '%'
links = ->
  o_links =
    'portfolio-1': "http://melissaesplin.com"
    'portfolio-2': "http://scorpionsurvival.com"
    'portfolio-3': "http://images.christopheresplin.com/vex.png"
    'portfolio-4': "http://images.christopheresplin.com/vex-2.png"
  $('.portfolio-block').click ->
    v_id = $(this).attr 'id'
    $(location).attr 'href', o_links[v_id]
    console.log v_id
blurbs = ->
  $('.blurb').hide()
  $('.portfolio-block').each ->
    v_id = $(this).attr 'id'
    $(this).mouseover ->
      v_blurb_id = $(this).attr('id') + '-blurb'
      $('.blurb:visible').not('#' + v_blurb_id).slideUp 500
      $('#' + v_blurb_id).slideDown 500
repair = (v_min_width ) ->
  v_width = $(window).width()
  if v_width < v_min_width
    $('body').css('font-size', 100 * v_width / v_min_width + '%')
$(document).ready ->
  portfolios()
  links()
  blurbs()
  repair(1760)
  $(window).resize ->
    repair(1760)