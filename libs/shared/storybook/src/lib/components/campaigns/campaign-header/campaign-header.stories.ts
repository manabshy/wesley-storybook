export default {
  title: 'Campaigns/Header',
};

export const base = () => ({
  template: `
  <header>
    <nav class="wes-header">
      <!-- topnavbar//-->
      <div class="wes-bg-solid-grey-900 topnavbar">
        <div class="container">
          <div class="d-flex flex-row">
            <div class="d-flex" role="tablist">
              <a href="#" role="tab" data-text="Personal">Personal</a>
              <a href="#" role="tab" data-text="Business">Business</a>
            </div>  
            <div class="mr-auto"></div>
            <div class="d-none d-xl-flex" role="list">
              <a href="#" role="listitem" data-text="Members area">Members area</a>
              <a href="#" role="listitem" data-text="Fund prices">Fund prices</a>
              <a href="#" role="listitem" data-text="Make a claim">Make a claim</a>
              <a href="#" role="listitem" class="login" data-text="Login">Login</a>
            </div>
          </div>
        </div>
      </div>
      <!-- end topnavbar//-->

      <!-- masthead//-->
      <div class="wes-bg-solid-white masthead">
        <div class="container">
          <div class="d-flex flex-row align-items-center" role="list">
            <div class="d-flex">
              <a href="#" aria-label="wesleyan logo" class="wes-logo"></a>
            </div>
            <div class="mr-auto"></div>
            <div class="d-flex d-xl-none flex-wrap" role="group">
              <span class="menu-item" role="listitem">
              <a class="d-flex flex-column align-items-center wes-font-icon-user" href="#">Login</a>
              </span>
              <span class="menu-item" role="listitem">
              <a class="d-flex flex-column align-items-center wes-font-icon-search" href="#">Search</a>
              </span>
              <span class="menu-item" role="listitem">
              <a class="d-flex flex-column align-items-center wes-font-icon-menu" href="#">Menu</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- end masthead//-->
    </nav>
  </header>
    <!--
    <script>
        window.addEventListener('DOMContentLoaded', function (event) {
            (function ($) {
              stickybits('.wes-campaign-header', {
                  useStickyClasses: true,
                  parentClass: 'js-stickybit-parent has-wes-campaign-header'
              });
            })(jQuery);
        });
    </script>
    -->
  `,
});
