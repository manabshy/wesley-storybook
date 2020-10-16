export default {
    title: 'Campaigns|Content Container',
  };
  
  export const base = () => ({
    template: `
      <!-- Container wrapper -->
      <div class="container">
  
        <!-- Content Container component root -->
        <div class="wes-content-container">
          <div class="wes-content-container__body">
            <div class="wes-content-container__body-content">
              <div class="wes-content-container__frame">
                <div class="wes-content-container__frame-content">
                  <div class="wes-content-container__main">
                    <!-- Field: Rich Text-->
                    <h3>Key features:</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dolor ac nisi sollicitudin feugiat. Integer vestibulum lectus vel lectus aliquet, vel suscipit turpis feugiat. Phasellus sagittis, elit eu congue finibus, arcu erat venenatis ligula, nec ullamcorper sapien dui et tortor. Curabitur eget magna id dui aliquam sagittis. Duis augue lectus, laoreet imperdiet hendrerit nec, tempus nec lorem. Proin est leo, venenatis quis urna vitae, consectetur luctus quam. Proin eget vulputate neque. Fusce aliquet condimentum sapien, non fringilla dui dictum ac. Ut interdum lectus nisl, vitae tincidunt ex aliquam id. Sed vel urna nec tortor aliquet eleifend. Mauris nec nibh elit. Nunc cursus eleifend leo sed ullamcorper. Vivamus sit amet massa nisi. Morbi pharetra molestie risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    `,
  });

  export const withImage = () => ({
    template: `
      <!-- Container wrapper -->
      <div class="container">
  
        <!-- Content Container component root -->
        <div class="wes-content-container wes-content-container--with-image">
          <div class="wes-content-container__header">
            <div class="wes-content-container__bg" style="background-image: url(http://new.wesleyanplatform.dev.local/-/media/project/wesleyan/website/manwithglassesjpg.jpg)"></div>
          </div>
          <div class="wes-content-container__body">
            <div class="wes-content-container__body-content">
              <div class="wes-content-container__frame">
                <div class="wes-content-container__frame-content">
                  <div class="wes-content-container__main">
                    <!-- Field: Rich Text-->  
                    <h3>Key features:</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dolor ac nisi sollicitudin feugiat. Integer vestibulum lectus vel lectus aliquet, vel suscipit turpis feugiat. Phasellus sagittis, elit eu congue finibus, arcu erat venenatis ligula, nec ullamcorper sapien dui et tortor. Curabitur eget magna id dui aliquam sagittis. Duis augue lectus, laoreet imperdiet hendrerit nec, tempus nec lorem. Proin est leo, venenatis quis urna vitae, consectetur luctus quam. Proin eget vulputate neque. Fusce aliquet condimentum sapien, non fringilla dui dictum ac. Ut interdum lectus nisl, vitae tincidunt ex aliquam id. Sed vel urna nec tortor aliquet eleifend. Mauris nec nibh elit. Nunc cursus eleifend leo sed ullamcorper. Vivamus sit amet massa nisi. Morbi pharetra molestie risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    `,
  });

  export const withHeader = () => ({
    template: `
      <!-- Container wrapper -->
      <div class="container">
  
        <!-- Content Container component root -->
        <div class="wes-content-container wes-content-container--with-header">
          <div class="wes-content-container__header">
            <div class="wes-content-container__header-content">
              <h2 class="wes-content-container__title">Insurance as unique as your home</h2>
              <div class="wes-content-container__message">
                <p>When you own a high-value home, a standard insurance policy doesn't quite come up to scratch. That's why we work with a hand-picked panel of premium UK insurers to bring you the bespoke cover you need.</p>
              </div>
            </div>
          </div>
          <div class="wes-content-container__body">
            <div class="wes-content-container__body-content">
              <div class="wes-content-container__frame">
                <div class="wes-content-container__frame-content">
                  <div class="wes-content-container__main">
                    <!-- Field: Rich Text-->
                    <h3>Key features:</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dolor ac nisi sollicitudin feugiat. Integer vestibulum lectus vel lectus aliquet, vel suscipit turpis feugiat. Phasellus sagittis, elit eu congue finibus, arcu erat venenatis ligula, nec ullamcorper sapien dui et tortor. Curabitur eget magna id dui aliquam sagittis. Duis augue lectus, laoreet imperdiet hendrerit nec, tempus nec lorem. Proin est leo, venenatis quis urna vitae, consectetur luctus quam. Proin eget vulputate neque. Fusce aliquet condimentum sapien, non fringilla dui dictum ac. Ut interdum lectus nisl, vitae tincidunt ex aliquam id. Sed vel urna nec tortor aliquet eleifend. Mauris nec nibh elit. Nunc cursus eleifend leo sed ullamcorper. Vivamus sit amet massa nisi. Morbi pharetra molestie risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    `,
  });
  