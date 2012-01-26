(function() {
  var chris;

  chris = {
    timer: 0,
    portfolios: function() {
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
    },
    blurbs: function() {
      return $('.portfolio-block').each(function() {
        var v_id;
        v_id = $(this).attr('id');
        return $(this).mouseover(function() {
          var blurb, wrapper;
          blurb = this;
          clearTimeout(chris.timer);
          wrapper = function() {
            var v_blurb_id;
            v_blurb_id = $(blurb).attr('id') + '-blurb';
            $('.blurb:visible').not('#' + v_blurb_id).slideUp(500);
            return $('#' + v_blurb_id).slideDown(500);
          };
          return chris.timer = setTimeout(wrapper, 500);
        });
      });
    },
    repair: function(v_min_width) {
      var v_width;
      v_width = $(window).width();
      if (v_width < v_min_width) {
        return $('body').css('font-size', 100 * v_width / v_min_width + '%');
      }
    }
  };

  $(document).ready(function() {
    chris.portfolios();
    chris.blurbs();
    chris.repair(1760);
    return $(window).resize(function() {
      return chris.repair(1760);
    });
  });

}).call(this);
