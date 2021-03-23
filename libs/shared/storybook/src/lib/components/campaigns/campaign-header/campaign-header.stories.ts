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
  <a class="sr-only sr-only-focusable skip-to-content" href="#content">
    <div class="container">
      <span class="skiplink-text">Skip to main content</span>
    </div>
  </a>
  <header>
    <nav class="wes-header">
      <!-- topnavbar//-->
      <div class="wes-bg-solid-grey-900 topnavbar">
        <div class="container">
          <div class="d-flex flex-row">
            <div class="d-flex">
              <a href="#" data-text="Personal">Personal</a>
              <a href="#" data-text="Business">Business</a>
            </div>  
            <div class="mr-auto"></div>
            <div class="d-none d-xl-flex">
              <a href="#" data-text="Members area">Members area</a>
              <a href="#" data-text="Fund prices">Fund prices</a>
              <a href="#" data-text="Make a claim">Make a claim</a>
              <a href="#" class="login" data-text="Login">Login</a>
            </div>
          </div>
        </div>
      </div>
      <!-- end topnavbar//-->

      <!-- masthead//-->
      <div class="wes-bg-solid-white masthead">
        <div class="container">
          <div class="d-flex flex-row align-items-center">
            <div class="d-flex">
              <a href="#" aria-label="wesleyan logo" class="wes-logo">
                <span class="sr-only">Wesleyan</span>
              </a>
            </div>
            <div class="mr-auto"></div>
            <!-- start mobile to large masthead //-->
            <div class="d-flex d-xl-none flex-wrap">
              <span class="menu-item">
              <a class="d-flex flex-column align-items-center wes-font-icon-user" href="#">Login</a>
              </span>
              <span class="menu-item">
              <a class="d-flex flex-column align-items-center wes-font-icon-search" data-toggle="collapse" href="#searchPanel" role="button" aria-expanded="false" aria-controls="searchPanel">Search</a>
              </span>
              <span class="menu-item">
              <a class="d-flex flex-column align-items-center wes-font-icon-menu"  data-toggle="collapse" href="#primaryNav" role="button" aria-expanded="false" aria-controls="primaryNav">Menu</a>
              </span>
            </div>
            <!-- end mobile to large masthead //-->

            <!-- start extra-large masthead //-->
            <div class="d-none d-xl-flex flex-wrap">
              <span class="menu-item">
                <a class="d-flex flex-row align-items-center wes-font-icon-user" href="#">Book an appointment</a>
              </span>
              <span class="menu-item">
                <a class="d-flex flex-row align-items-center wes-font-icon-user" href="#">Contact us</a>
              </span>
              <span class="menu-item">
                <a class="d-flex flex-row align-items-center wes-font-icon-chat" onclick="window.open(this.href,'Chat','width=484,height=361');return false;" href="#">Live chat</a>
              </span>
              <span class="menu-item">
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
        <div class="underlay position-absolute d-xl-none"></div>
        <div class="position-absolute w-100 wes-bg-solid-white mega-menu-shadow">
          <div class="container-xl primary-nav-container">
            
            <ul class="d-flex flex-column flex-xl-row align-items-stretch align-items-xl-center mega-menu">
              <li class="d-flex flex-column">
                <span class="mega-menu-item">
                  <a data-toggle="collapse" href="#financialAdviceMengaMenu" class="container" role="button" aria-expanded="false" aria-controls="financialAdviceMengaMenu">
                    Financial advice
                  </a>
                  <span class="overlay"></span>
                </span>
                <div class="collapse mega-menu-container" id="financialAdviceMengaMenu">
                  <div class="container d-flex flex-column flex-xl-row">
                  <div class="d-flex flex-column mega-menu-body"> 
                    <span class="mega-menu-item-label">
                      Achieving your goals
                    </span>
                  </div>
                  </div>
                </div>
              </li>
              <li class="d-flex flex-column">
                <span class="mega-menu-item">
                  <a data-toggle="collapse" href="#saveAndInvestMegaMenu" class="container" role="button" aria-expanded="false" aria-controls="saveAndInvestMegaMenu">Save & Invest</a>
                  <span class="overlay"></span>
                </span>
                <div class="collapse mega-menu-container" id="saveAndInvestMegaMenu">
                  <div class="container d-flex flex-column flex-xl-row">
                  <div class="d-flex flex-column mega-menu-body"> 
                    <span class="mega-menu-item-label">
                      Achieving your goals
                    </span>
                  </div>
                  </div>
                </div>
              </li>
              <li class="d-flex flex-column">
                <span class="mega-menu-item">
                  <a data-toggle="collapse" href="#retireMegaMenu" class="container" role="button" aria-expanded="false" aria-controls="retireMegaMenu">Retire</a>
                  <span class="overlay"></span>
                </span>
                <div class="collapse mega-menu-container" id="retireMegaMenu">
                  <div class="container d-flex flex-column flex-xl-row">
                  <div class="d-flex flex-column mega-menu-body"> 
                    <span class="mega-menu-item-label">
                      Achieving your goals
                    </span>
                  </div>
                  </div>
                </div>
              </li>
              <li class="d-flex flex-column">
                <span class="mega-menu-item">
                  <a data-toggle="collapse" href="#protectMegaMenu" class="container" role="button" aria-expanded="false" aria-controls="protectMegaMenu">Protect</a>
                  <span class="overlay"></span>
                </span>
                <div class="collapse mega-menu-container" id="protectMegaMenu">
                  <div class="container d-flex flex-column flex-xl-row">
                  <div class="d-flex flex-column mega-menu-body"> 
                    <span class="mega-menu-item-label">
                      Achieving your goals
                    </span>
                  </div>
                  </div>
                </div>
              </li>
              <li class="d-flex flex-column">
                <span class="mega-menu-item">
                  <a data-toggle="collapse" href="#mortgageMegaMenu" class="container" role="button" aria-expanded="false" aria-controls="mortgageMegaMenu">Mortgage</a>
                  <span class="overlay"></span>
                </span>
                <div class="collapse mega-menu-container" id="mortgageMegaMenu">
                  <div class="container d-flex flex-column flex-xl-row">
                    <div class="d-flex flex-column mega-menu-body"> 
                      <span class="mega-menu-item-label">
                        Borrowing Goals
                      </span>
                      <span class="mega-menu-body-item">
                        <a href="#">Buying your first home</a>
                      </span>
                      <span class="mega-menu-body-item">
                        <a href="#">Remortgaging</a>
                      </span>
                      <span class="mega-menu-body-item">
                        <a href="#">Investing in property</a>
                      </span>
                      <span class="mega-menu-body-item">
                        <a href="#">Refurbishing your home</a>
                      </span>
                      <span class="mega-menu-body-item">
                        <a href="#">Paying off your mortgage</a>
                      </span>
                    </div>
                    <div class="d-flex flex-column mega-menu-body"> 
                      <span class="mega-menu-item-label">
                        Mortgages
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="d-flex flex-column">
                <span class="mega-menu-item">
                  <a data-toggle="collapse" href="#insureMegaMenu" class="container" role="button" aria-expanded="false" aria-controls="insureMegaMenu">Insure</a>
                  <span class="overlay"></span>
                </span>
                <div class="collapse mega-menu-container" id="insureMegaMenu">
                  <div class="container d-flex flex-column flex-xl-row">
                  <div class="d-flex flex-column mega-menu-body"> 
                    <span class="mega-menu-item-label">
                      Achieving your goals
                    </span>
                  </div>
                  </div>
                </div>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    <!-- end primaryNav //-->

      <!-- start searchPanel //-->
      <div class="collapse search-panel position-relative" id="searchPanel" role="search">
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
      var megamenucontainers = $('.mega-menu-container');
      function hidePanel(panel) {
        if (panel.hasClass('show')) {
          panel.collapse('hide');
        }
      }
      function hideAllMegaMenu() {
        for (const element of megamenucontainers) {
          hidePanel($(element));
        }
      }
      function hideOpenMegaMenus(id) {
        for (let index = 0; index < megamenucontainers.length; index++) {
          var megamenucontainer = $(megamenucontainers[index]);
          if (megamenucontainer.attr('id') !== id) {
            hidePanel(megamenucontainer);
          }
        }
      }
      megamenucontainers.each(function () {
        $(this).on('show.bs.collapse', function () {
          var elementid = $(this).attr('id');
          hideOpenMegaMenus(elementid);
        });
      });
      primarynav.on('show.bs.collapse', function () {
        hidePanel(searchpanel);
        hideAllMegaMenu();
      });
      searchpanel.on('show.bs.collapse', function () {
        hidePanel(primarynav);
        hideAllMegaMenu();
      });
    });

    return {
      ...story,
    };
  },
];
