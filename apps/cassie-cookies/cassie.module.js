var wes = wes || {};

wes.cassieModule = (function () {
  function init() {
    wes.cassieDomModule.upgradePreBanner();
    wes.cassieDomModule.upgradeSettingsModal();

    _simulatePreBannerEvents();
    _monkeyPatchVisibilityFunctions();

    this.$cookieWarningModal = $('#wes-pre-banner');
    this.$cookieSettingsModal = $('#wes-cookie-popup');
  }

  function _simulatePreBannerEvents() {
    var preBannerObserver;

    var preBannerTarget = document.getElementById('pre-banner');

    var config = { attributes: true, childList: false, subtree: false };

    var callback = function(mutationsList) {
      if(mutationsList.length > 0) {
        if (mutationsList[0].attributeName === 'style' && mutationsList[0].target.getAttribute('style').indexOf('none') === -1) {
          $(document).trigger('cassie.pre-banner.shown');
        } else {
          $(document).trigger('cassie.pre-banner.hidden');
        }
      }
    };

    preBannerObserver = new MutationObserver(callback);
    preBannerObserver.observe(preBannerTarget, config);
  }

  function _monkeyPatchVisibilityFunctions() {
    patchFactory('hideVisibility', 'hidden');
    patchFactory('showVisibility', 'shown');

    function patchFactory(f, ev) {
      var _f = window[f];

      return window[f] = function (selector) {
        _f();

        var config = {'.cookie': 'pre-banner', '.popup': 'settings'};

        if (selector in config) {
          $(document).trigger('cassie.' + config[selector] + '.' + ev);
        }

        return document.querySelectorAll(selector);
      }
    }
  }
  
  function showCookieWarningModal() {
    var $modal = this.$cookieWarningModal.modal('show');

    $modal.on('shown.bs.modal', function(){
      document.body.classList.add('modal-open');
    });

    return $modal;
  }

  function hideCookieWarningModal() {
    return this.$cookieWarningModal.modal('hide');
  }

  function showCookieSettingsModal() {
    var popupEm = document.getElementsByClassName('popup')[0];
    popupEm.style.visibility = 'visible';
    popupEm.style.opacity = '1';

    this.$cookieWarningModal.modal('hide');

    var $modal = this.$cookieSettingsModal.modal('show');

    $modal.on('shown.bs.modal', function(){
      document.body.classList.add('modal-open');
    });

    return $modal;
  }

  function hideCookieSettingsModal() {
    return this.$cookieSettingsModal.modal('hide');
  }

  return {
    init: init,
    showCookieWarningModal: showCookieWarningModal,
    hideCookieWarningModal: hideCookieWarningModal,
    showCookieSettingsModal: showCookieSettingsModal,
    hideCookieSettingsModal: hideCookieSettingsModal,
  };
})();

wes.cassieDomModule = (function () {
  var $body = $('body');

  function _createWesPreBanner() {
    return $('\
      <div class="cookie" id="pre-banner" style="display:none;">\
        <div class="modal" id="wes-pre-banner" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">\
          <div class="modal-dialog modal-dialog-centered">\
            <div class="modal-content">\
              <div class="modal-header" hidden>\
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\
                  <span class="sr-only">Close</span>\
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">\
                    <path fill="none" stroke="#B3B5B9" stroke-linecap="round" stroke-width="2" d="M4.83883476,4.83883476 L18.8492424,18.8492424 M18.7175144,4.83883476 L4.70710678,18.8492424" transform="translate(-3 -3)"/>\
                  </svg>\
                  </button>\
              </div>\
              <div class="modal-body wes-rich-text-campaign-scope wes-text-s"></div>\
              <div class="modal-footer wes-text-s"></div>\
            </div>\
          </div>\
        </div>\
      </div>\
    ');
  }

  function _enhanceManageConsent($preBanner) {
    return $preBanner
      .find('.View_all')
      .detach()
      .addClass('wes-link')
      .removeClass('View_all')
      .on('click', function () {
        wes.cassieModule.hideCookieWarningModal();
        $(document).trigger('cassie.settings.shown');
      });
    }

  function _enhanceAcceptAll($preBanner) {
    return $preBanner
      .find('.accept_all')
      .detach()
      .addClass('wes-button wes-button-cta wes-button-cta--orange-with-grey-hover modal-footer-action-primary');
    }

  function _grabBody($preBanner) {
    var open = /{{/gi;
    var close = /}}/gi;

    var makeshiftMarkdown = $preBanner
      .find('#pre-banner-text')
      .detach()
      .text()
      .replace(open, '<')
      .replace(close, '>');
    
    return $(makeshiftMarkdown);
  }

  function _createWesSettingsModal() {
    return $('\
      <div class="popup">\
        <div class="modal" id="wes-cookie-popup" tabindex="-1" role="dialog">\
          <div class="modal-dialog modal-dialog-centered">\
            <div class="modal-content">\
              <div class="modal-header">\
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\
                  <span class="sr-only">Close</span>\
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">\
                    <path fill="none" stroke="#B3B5B9" stroke-linecap="round" stroke-width="2" d="M4.83883476,4.83883476 L18.8492424,18.8492424 M18.7175144,4.83883476 L4.70710678,18.8492424" transform="translate(-3 -3)"/>\
                  </svg>\
                  </button>\
              </div>\
              <div class="modal-body">\
                <div class="wes-cassie">\
                </div>\
              </div>\
              <div class="modal-footer"></div>\
            </div>\
          </div>\
        </div>\
      </div>\
    ');
  }

  function _enhanceSavePreferences($popup) {
    return $popup
      .find('#save_preference')
      .detach()
      .addClass('wes-button wes-button-cta wes-button-cta--orange-with-grey-hover modal-footer-action-primary');
    }

  function _enhanceCheckbox($bodyContent) {
    var cbAddons = '\
      <div class="wes-checkbox-frame"></div>\
      <div class="wes-checkbox-background">\
        <svg viewBox="0 0 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="wes-checkbox-checkmark">\
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
            <g transform="translate(-101.000000, -149.000000)" fill="#ffffff">\
              <g transform="translate(0.000000, 72.000000)">\
                <g transform="translate(97.000000, 72.000000)">\
                  <path d="M6.95084897,9.47966533 L5.01075876,7.41619317 C4.77953371,7.17026313 4.40464384,7.17026313 4.17341879,7.41619317 C3.94219374,7.6621232 3.94219374,8.06085457 4.17341879,8.3067846 L6.53217898,10.8155525 C6.76340403,11.0614825 7.13829391,11.0614825 7.36951896,10.8155525 L11.8265812,6.07503896 C12.0578063,5.82910892 12.0578063,5.43037756 11.8265812,5.18444752 C11.5953562,4.93851749 11.2204663,4.93851749 10.9892412,5.18444752 L6.95084897,9.47966533 Z" id="Path-2"></path>\
                </g>\
              </g>\
            </g>\
          </g>\
        </svg>\
      </div>';

    $bodyContent
      .detach()
      .find('h3')
        .addClass('wes-text-s wes-text-bold')
        .css({'margin-bottom': '0'})
        .end()
      .find('p')
        .addClass('wes-text-s')
        .end()
      .children('h3, p')
        .wrapAll('<div class="wrap-it-up">')
        .end()
      .find('.main-wraper')
        .attr('hidden', 'true')
        .end();

    var switchContents = $bodyContent.find('.switch').children();

    $bodyContent
      .find('.switch')
        .replaceWith('<label class="switch">')
        .end()
      .find('.switch')
        .append('<span hidden>Update cookie preference</span>')
        .append(switchContents)
        .end()
      .find('input')
        .addClass('wes-checkbox-input cdk-visually-hidden')
        .after(cbAddons)
        .end();
      
      return $bodyContent;
    }

  function _grabHeader($popup) {
    return $popup
      .find('#header-content')
      .detach()
      .find('#acceptAllDiv')
      .detach()
      .end()
      .addClass('wes-rich-text-campaign-scope wes-text-s')
      .removeAttr('id');
    }

  function _grabFooter($popup) {
    return $popup
      .find('#footer-content')
      .detach()
      .addClass('wes-rich-text-campaign-scope wes-text-s')
      .removeAttr('id');
    }

  function upgradePreBanner() {
    var $cassiePreBanner = $('#pre-banner');
    var $cookieModalWrapper = _createWesPreBanner();

    $cookieModalWrapper
      .find('.modal-body')
      .append(_grabBody($cassiePreBanner))
      .end()
      .find('.modal-footer')
      .append(
        _enhanceManageConsent($cassiePreBanner),
        _enhanceAcceptAll($cassiePreBanner)
      )
      .end()
      .appendTo($body);

      $cassiePreBanner.detach();
  }

  function upgradeSettingsModal() {
    var $cassiePopup = $('#cookie-widget .popup');
    var $cassieOverlay = $('#cookie-widget .overlay');

    var $cookieSettingsModalWrapper = _createWesSettingsModal();

    var $cassiePopupClone = $cassiePopup.clone();

    $cookieSettingsModalWrapper
      .find('.modal-footer')
      .append(_enhanceSavePreferences($cassiePopup))
      .end()
      .find('.modal-body')
      .prepend(_grabHeader($cassiePopup))
      .append(_grabFooter($cassiePopup))
      .find('.wes-cassie')
      .append(
        $cassiePopupClone.find('#header-content').detach().attr('hidden', 'true'),
        $cassiePopupClone.find('.body_content').map(function(i, el) { return _enhanceCheckbox($(el)) }).get()
      )
      .end()
      .end()
      .appendTo($('body'));

    $cassieOverlay.detach();
    $cassiePopup.detach();
  }

  return {
    upgradePreBanner: upgradePreBanner,
    upgradeSettingsModal: upgradeSettingsModal
  };
})();
