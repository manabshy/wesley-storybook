export default {
  title: 'Campaigns|Social Proof (Full Width)',
};
  
export const base = () => ({
  template: `
    <div class="wes-social-proof">
      <div class="wes-social-proof__wrapper">
        <div class="wes-social-proof__header">
          <div class="wes-social-proof__header-content">
            <h2 class="wes-social-proof__title">What our customers say:</h2>
          </div>
        </div>
        <div class="wes-social-proof__testimonials">
          <div class="wes-social-proof__testimonials-content">

            <!-- Repeatable nested testimonial components -->
            <blockquote class="wes-social-proof__testimonial">
              <p class="wes-social-proof__quote">"The excellent service provided by Wesleyan recently was reflected in my e-mail to David who responded efficiently, courteously and promptly to my telephone call. It seems all too rare to get such a good personal customer service today, so I commend Wesleyan for having a such a customer- friendly accessible system."</p>
              <footer class="wes-social-proof__attribution">
                <cite class="wes-social-proof__citation">
                  <span class="wes-social-proof__author">Neville Harrison, Surrey, UK</span>
                  <span class="wes-social-proof__date">2018</span>    
                </cite>
              </footer>
            </blockquote>

            <blockquote class="wes-social-proof__testimonial">
              <p class="wes-social-proof__quote">"The excellent service provided by Wesleyan recently was reflected in my e-mail."</p>
              <footer class="wes-social-proof__attribution">
                <cite class="wes-social-proof__citation">
                  <span class="wes-social-proof__author">Somebody Else, Kent, UK</span>
                  <span class="wes-social-proof__date">2020</span>    
                </cite>
              </footer>
            </blockquote>

            <div class="wes-social-proof__controls">
              <div class="wes-social-proof__actions">
                <button type="button" class="wes-social-proof__action wes-social-proof__action--prev" aria-label="Previous testimonial">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none" fill-rule="evenodd">
                      <polyline stroke="#FEBD11" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="8 6 2 12 8 18"/>
                      <line x1="2" x2="22" y1="12" y2="12" stroke="#FEBD11" stroke-linecap="round" stroke-width="2"/>
                    </g>
                  </svg>
                </button>
                <button type="button" class="wes-social-proof__action wes-social-proof__action--next" aria-label="Next testimonial">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <polyline stroke="#FEBD11" stroke-linejoin="round" stroke-width="2" points="16 6 22 12 16 18"/>
                      <line x1="21" x2="2" y1="12" y2="12" stroke="#FEBD11" stroke-width="2"/>
                    </g>
                  </svg>
                </button>
              </div>
              <div class="wes-social-proof__counter">
                <span class="wes-social-proof__counter-current"></span>
                <span class="wes-social-proof__counter-divider"> / </span>
                <span class="wes-social-proof__counter-total"></span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>

    <!--
    <script>
      window.addEventListener('DOMContentLoaded', function () {
        (function ($) {
          var $el = $('.wes-social-proof__testimonials-content');

          if (!$el.hasClass('slick-initialized') && $el.find('blockquote').length > 1) {
            $el.on('init', function (event, slick) {
              $el.find('.wes-social-proof__counter .wes-social-proof__counter-current').text(slick.currentSlide + 1);
              $el.find('.wes-social-proof__counter .wes-social-proof__counter-total').text(slick.slideCount);
            });

            $el.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
              $el.find('.wes-social-proof__counter .wes-social-proof__counter-current').text(nextSlide + 1);
            });

            $el.slick({
              slide: 'blockquote',
              adaptiveHeight: false,
              arrows: true,
              focusOnSelect: true,
              draggable: false,
              fade: true,
              infinite: false,
              prevArrow: '.wes-social-proof__action--prev',
              nextArrow: '.wes-social-proof__action--next'
            });
          }
        })(jQuery);
      });
    </script>
    -->
  `,
});
