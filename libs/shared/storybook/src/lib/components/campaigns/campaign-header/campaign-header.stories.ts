import * as jquery from 'jquery';
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';
import mdx from './campaign.mdx';
global = { ...global, ...{ $: jquery, jQuery: jquery, bootstrap: bootstrap } };

export default {
  title: 'Campaigns/Header',
  parameters: {
    knobs: {
      escapeHTML: false,
    },
    docs: {
      iframeHeight: 500,
      page: mdx,
    },
  },
};

export const header = () => ({
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
              <a href="#" aria-label="wesleyan logo" class="wes-logo">
                <span class="sr-only">Wesleyan</span>
              </a>
            </div>
            <div class="mr-auto"></div>
            <!-- start mobile to large masthead //-->
            <div class="d-flex d-xl-none flex-wrap" role="group">
              <span class="menu-item" role="listitem">
              <a class="d-flex flex-column align-items-center wes-font-icon-user" href="#">Login</a>
              </span>
              <span class="menu-item" role="listitem">
              <a class="d-flex flex-column align-items-center wes-font-icon-search" data-toggle="collapse" href="#searchPanel" role="button" aria-expanded="false" aria-controls="searchPanel">Search</a>
              </span>
              <span class="menu-item" role="listitem">
              <a class="d-flex flex-column align-items-center wes-font-icon-menu"  data-toggle="collapse" href="#primaryNav" role="button" aria-expanded="false" aria-controls="primaryNav">Menu</a>
              </span>
            </div>
            <!-- end mobile to large masthead //-->

            <!-- start extra-large masthead //-->
            <div class="d-none d-xl-flex flex-wrap" role="group">
              <span class="menu-item" role="listitem">
                <a class="d-flex flex-row align-items-center wes-font-icon-user" href="#">Book an appointment</a>
              </span>
              <span class="menu-item" role="listitem">
                <a class="d-flex flex-row align-items-center wes-font-icon-user" href="#">Contact us</a>
              </span>
              <span class="menu-item" role="listitem">
                <a class="d-flex flex-row align-items-center wes-font-icon-chat" href="#">Live chat</a>
              </span>
              <span class="menu-item" role="listitem">
                <a class="d-flex flex-row align-items-center wes-font-icon-search" data-toggle="collapse" href="#searchPanel" role="button" aria-expanded="false" aria-controls="searchPanel">Search</a>
              </span>
            </div>
            <!-- end extra-large masthead //-->
          </div>
        </div>
      </div>
      <!-- end masthead//-->

      <!-- start primaryNav //-->
      <div class="collapse primary-nav position-relative" id="primaryNav">
        <div class="underlay position-absolute"></div>
        <div class="position-absolute w-100 wes-bg-solid-white mega-menu-shadow">
          <div class="container primary-nav-container">
            
            <ul class="d-flex flex-column flex-xl-row align-items-stretch align-items-xl-center mega-menu">
              <li>
                <a href="#"><span class="mega-menu-item">Financial advice</span></a>
              </li>
              <li>
                <a href="#"><span class="mega-menu-item">Save & Invest</span></a>
              </li>
              <li>
                <a href="#"><span class="mega-menu-item">Retire</span></a>
              </li>
              <li>
                <a href="#"><span class="mega-menu-item">Protect</span></a>
              </li>
              <li>
                <a href="#"><span class="mega-menu-item">Mortgage</span></a>
              </li>
              <li>
                <a href="#"><span class="mega-menu-item">Insure</span></a>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    <!-- end primaryNav //-->

      <!-- start searchPanel //-->
      <div class="collapse search-panel position-relative" id="searchPanel">
        <div class="underlay position-absolute"></div>
        <div class="position-absolute w-100 wes-bg-solid-white">
          <div class="container pt-2 pb-2">
            <div class="col-sm-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
                <form class="d-flex flex-row align-items-center search-form">
                <input type="search" class="mr-auto" aria-label="Search" placeholder="How can we help you today?" />
                <button type="submit"><span class="wes-font-icon">&#xe90e;</span></button>
                </form>
            </div>
          </div>
        </div>
      </div>
    <!-- end searchPanel //-->
    
    </nav>
  </header>
  <main>
    stuff after
  </main>
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

header.decorators = [
  (storyFunc) => {
    const story = storyFunc();

    setTimeout(() => {
      const $ = global['$'];
      var primarynav = $('#primaryNav');
      var searchpanel = $('#searchPanel');
      primarynav.on('show.bs.collapse', function () {
        searchpanel.collapse('hide');
      });
      searchpanel.on('show.bs.collapse', function () {
        primarynav.collapse('hide');
      });
    });

    return {
      ...story,
    };
  },
];
