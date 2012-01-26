(function() {
  var blurbs, links, portfolios, repair;
  portfolios = function() {
    var v_denominator_offset, v_offset;
    v_denominator_offset = 20;
    v_offset = 0;
    return $('.portfolio-block').each(function() {
      var j_portfolio, v_height, v_width;
      j_portfolio = $(this);
      v_height = parseInt(j_portfolio.css('height')) + parseInt(j_portfolio.css('padding-top'));
      v_width = parseInt(j_portfolio.css('width')) + parseInt(j_portfolio.css('padding-left'));
      return j_portfolio.mousemove(function(event) {
        var v_x, v_y;
        v_x = Math.round(100 * (event.pageX - this.offsetLeft) / (v_width + v_denominator_offset) - v_offset);
        v_y = Math.round(100 * (event.pageY - this.offsetTop) / (v_height + v_denominator_offset) - v_offset);
        return $(this).css('background-position', v_x + '% ' + v_y + '%');
      });
    });
  };
  links = function() {
    var o_links;
    o_links = {
      'portfolio-1': "http://melissaesplin.com",
      'portfolio-2': "http://scorpionsurvival.com",
      'portfolio-3': "http://images.christopheresplin.com/vex.png",
      'portfolio-4': "http://images.christopheresplin.com/vex-2.png"
    };
    return $('.portfolio-block').click(function() {
      var v_id;
      v_id = $(this).attr('id');
      $(location).attr('href', o_links[v_id]);
      return console.log(v_id);
    });
  };
  blurbs = function() {
    $('.blurb').hide();
    return $('.portfolio-block').each(function() {
      var v_id;
      v_id = $(this).attr('id');
      return $(this).mouseover(function() {
        var v_blurb_id;
        v_blurb_id = $(this).attr('id') + '-blurb';
        $('.blurb:visible').not('#' + v_blurb_id).slideUp(500);
        return $('#' + v_blurb_id).slideDown(500);
      });
    });
  };
  repair = function(v_min_width) {
    var v_width;
    v_width = $(window).width();
    if (v_width < v_min_width) {
      return $('body').css('font-size', 100 * v_width / v_min_width + '%');
    }
  };
  $(document).ready(function() {
    portfolios();
    links();
    blurbs();
    repair(1760);
    return $(window).resize(function() {
      return repair(1760);
    });
  });
}).call(this);
