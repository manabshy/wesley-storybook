export default {
    title: 'Campaigns|Video Carousel',
  };
  
  export const defaultVideoCarousel = () => ({
    template: `
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
            
          </div>
        </div>
      </div>

    </div>
    `,
  });
  