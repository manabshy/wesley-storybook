export default {
    title: 'Campaigns|Video Carousel',
  };
  
  export const defaultVideoCarousel = () => ({
    template: `
    <!-- Wesleyan Container wrapper -->
    <div class="wes-container" style="overflow-x:hidden">
      <!-- Container wrapper -->
      <div class="container">

        <!-- Video Carousel component root -->
        <div class="wes-video-carousel">
          <div class="wes-video-carousel__header"></div>
          <div class="wes-video-carousel__testimonials">
            <div class="wes-video-carousel__testimonials-content">

              <!-- Repeatable nested video carousel components -->
              <div class="wes-video-carousel__testimonial">
                <blockquote class="wes-video-carousel__testimonial-content">
                  <p class="wes-video-carousel__quote">"I thought I knew about retirement planning. It was amazing what I didn’t know."</p>
                  <footer class="wes-video-carousel__attribution">
                    <cite class="wes-video-carousel__citation">
                      <span class="wes-video-carousel__author">Dr Shiv Pabary, MBE</span>    
                    </cite>
                  </footer>
                </blockquote>
                <div class="wes-video-carousel__video">
                  <div class="wes-video-carousel__video-frame">
                    <iframe src="https://video.wesleyan.co.uk/v.ihtml/player.html?token=244588c11a6b9731d586512913ee3293&amp;source=embed&amp;photo%5fid=64659215" style="width:100%; height:100%; position: absolute; top: 0; left: 0;" frameborder="0" border="0" scrolling="no" mozallowfullscreen="1" webkitallowfullscreen="1" allowfullscreen="1" allow="autoplay; fullscreen"></iframe>
                  </div>
                </div>
              </div>

              <div class="wes-video-carousel__testimonial">
                <blockquote class="wes-video-carousel__testimonial-content">
                  <p class="wes-video-carousel__quote">"I thought I knew about retirement planning. It was amazing what I didn’t know."</p>
                  <footer class="wes-video-carousel__attribution">
                    <cite class="wes-video-carousel__citation">
                      <span class="wes-video-carousel__author">Dr Shiv Pabary, MBE</span>    
                    </cite>
                  </footer>
                </blockquote>
                <div class="wes-video-carousel__video">
                  <div class="wes-video-carousel__video-frame">
                    <iframe src="https://video.wesleyan.co.uk/v.ihtml/player.html?token=244588c11a6b9731d586512913ee3293&amp;source=embed&amp;photo%5fid=64659215" style="width:100%; height:100%; position: absolute; top: 0; left: 0;" frameborder="0" border="0" scrolling="no" mozallowfullscreen="1" webkitallowfullscreen="1" allowfullscreen="1" allow="autoplay; fullscreen"></iframe>
                  </div>
                </div>
              </div>

              <div class="wes-video-carousel__controls">
                <div class="wes-video-carousel__actions">
                  <button type="button" class="wes-video-carousel__action wes-video-carousel__action--prev" aria-label="Previous testimonial">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <g fill="none" fill-rule="evenodd">
                        <polyline stroke="#FEBD11" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="8 6 2 12 8 18"/>
                        <line x1="2" x2="22" y1="12" y2="12" stroke="#FEBD11" stroke-linecap="round" stroke-width="2"/>
                      </g>
                    </svg>
                  </button>
                  <button type="button" class="wes-video-carousel__action wes-video-carousel__action--next" aria-label="Next testimonial">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <g fill="none" fill-rule="evenodd" stroke-linecap="round">
                        <polyline stroke="#FEBD11" stroke-linejoin="round" stroke-width="2" points="16 6 22 12 16 18"/>
                        <line x1="21" x2="2" y1="12" y2="12" stroke="#FEBD11" stroke-width="2"/>
                      </g>
                    </svg>
                  </button>
                </div>
                <div class="wes-video-carousel__counter">
                  <span class="wes-video-carousel__counter-current"></span>
                  <span class="wes-video-carousel__counter-divider"> / </span>
                  <span class="wes-video-carousel__counter-total"></span>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </div>


    <!--
    <script>
      window.addEventListener('DOMContentLoaded', function (event) {
        (function ($) {
          var $el = $('.wes-video-carousel__testimonials-content');

          if (!$el.hasClass('slick-initialized') && $el.find('.wes-video-carousel__testimonial').length > 1) {
            $el.on('init', function (event, slick) {
              $el.find('.wes-video-carousel__counter .wes-video-carousel__counter-current').text(slick.currentSlide + 1);
              $el.find('.wes-video-carousel__counter .wes-video-carousel__counter-total').text(slick.slideCount);
            });

            $el.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
              $el.find('.wes-video-carousel__counter .wes-video-carousel__counter-current').text(nextSlide + 1);
            });

            $el.slick({
              slide: '.wes-video-carousel__testimonial',
              adaptiveHeight: false,
              arrows: true,
              focusOnSelect: true,
              draggable: false,
              fade: true,
              infinite: false,
              prevArrow: '.wes-video-carousel__action--prev',
              nextArrow: '.wes-video-carousel__action--next'
            });
          }
        })(jQuery);
      });
    </script>
    -->
    `,
  });
  