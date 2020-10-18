export default {
    title: 'Campaigns|Social Proof',
  };
  
  export const defaultSocialProof = () => ({
    template: `
    <!-- Container wrapper -->
    <div class="container">

      <!-- Social Proof component root -->
      <div class="wes-social-proof">
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
            
          </div>
        </div>
      </div>

    </div>
    `,
  });
  