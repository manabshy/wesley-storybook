export default {
  title: 'Sitecore Pages|Financial Consultant Page',
};

export const fromSharedLink = () => ({
  template: `
    <!-- Container wrapper -->
<div class="wes-bg-solid-grey-50x ">
<div class="wes-your-fc-background pt-4 pt-md-7 pt-lg-8">
  <div class="container">

    <div class="row">
      <div class="col-lg-4">
        <div class="wes-your-fc pt-lg-8">
            <div class="wes-your-fc-profile row">
                <div class="col-md-7 offset-md-1 col-lg-12 offset-lg-0">
                    <p class="wes-your-fc-profile__intro">Your Wesleyan Financial Services Consultant is</p>
                    <h1 class="wes-your-fc-profile__name">David Llewelyn-Smith</h1>
                </div>
                <div class="col-md-3 col-lg-12">
                    <div class="wes-your-fc-profile__image " style=" background-image: url('data:image/png;base64,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')">
                    </div>
                </div>
            </div>

            <div class="wes-your-fc-details ">

                <div class="wes-your-fc-details__telephone">
                    <div class="wes-your-fc-details__icon">
                    <!-- For sitecore using media link
                    <img src="icon.svg" alt="Kiwi standing on oval">
                    -->
                    <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="🎨-UI-Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Your_FC_Page_320" transform="translate(-136.000000, -572.000000)">
                                <g id="FC_Block" transform="translate(20.000000, 92.000000)">
                                    <g id="FC_Details" transform="translate(0.000000, 248.000000)">
                                        <g id="FC_Telephone" transform="translate(28.000000, 232.000000)">
                                            <g id="Icons/Pictogram/Map-Pin" transform="translate(88.000000, 0.000000)">
                                                <circle id="Oval" stroke="#202020" cx="24" cy="24" r="23.5"></circle>
                                                <path d="M34.7802997,30.0047901 C35.3398158,30.3245346 36.1391245,30.8840876 35.9792628,32.0031934 C35.2201549,34.3691419 33.0284856,35.9807694 30.5439632,36 C26.9470738,36 22.5508756,33.2022354 18.7141936,29.2853649 C14.8775115,25.3684944 12,21.0519433 12,17.4548174 C12.0192293,14.9701317 13.6307509,12.7783183 15.9965438,12.0191604 C17.1155761,11.8592881 17.5951613,12.7385856 17.9948157,13.2182024 L20.7124655,17.3748812 C21.2954747,18.2385154 21.0825561,19.4096448 20.2328802,20.0127736 C19.0339171,20.9720072 17.9148848,21.2917517 22.311083,25.688239 C26.7072812,30.0847262 27.0270047,28.9656204 27.9861752,27.7665784 C28.5892644,26.9168467 29.7603167,26.7039141 30.6238941,27.2869616 L34.7802997,30.0047901 Z" id="Path" stroke="#FEBD11" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    </div>
                    <div class="wes-your-fc-details__label">Call <a href="tel:08002949174">0800 294 9174</a> to arrange an appointment.</div>

                </div>
            </div>

            <div class="wes-your-fc-bio">
                <h2 class="wes-your-fc-bio__title">About your Financial Consultant</h2>
                <div class="wes-your-fc-bio__text">
                <p>As a specialist in financial planning, your Financial Consultant can advise you on all your options throughout your career and beyond.
                </p>
                <p>You can get advice tailored to your profession and lifestyle, to help you reach your long-term life goals. You can get guidance and support on savings and investments, pensions and retirement, mortgages, personal income protection, inheritance tax planning, and more.
                </p>
                </div>

                <p><a href="/find-your-fc" class="wes-link wes-link--over-background wes-text-s wes-text-semi-bold">Search for another Financial Consultant</a></p>
            </div>
        </div>
      </div>
      <div class="col-lg-7 offset-lg-1">
      <!-- FC Form -->
      </div>
    </div>
  </div>
</div>
</div>
  `,
});

export const fromJourneyOtherProfession = () => ({
  template: `
      <!-- Container wrapper -->
  <div class="wes-bg-solid-grey-50x">
  <div class="wes-your-fc-background pt-4 pt-md-7 pt-lg-8">
    <div class="container">

      <div class="row">
        <div class="col-lg-4">
          <div class="wes-your-fc">
              <div class="wes-your-fc-profile row">
                  <div class="col-md-7 offset-md-1 col-lg-12 offset-lg-0">
                      <p class="wes-your-fc-profile__intro">Your Wesleyan Financial Services Consultant is</p>
                      <h1 class="wes-your-fc-profile__name">David Llewelyn-Smith</h1>
                  </div>
                  <div class="col-md-3 col-lg-12">
                      <div class="wes-your-fc-profile__image " style=" background-image: url('data:image/png;base64,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')">
                      </div>
                  </div>
              </div>

              <div class="wes-your-fc-details ">
                  <div class="wes-your-fc-details__location">
                      <div class="wes-your-fc-details__icon"><svg width="32px" height="48px" viewBox="0 0 32 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="🎨-UI-Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                          <g id="Your_FC_Page_1366" transform="translate(-381.000000, -480.000000)">
                              <g id="FC_Block" transform="translate(97.000000, 204.000000)">
                                  <g id="FC_Details" transform="translate(0.000000, 244.000000)">
                                      <g id="FC_Location_Item" transform="translate(224.000000, 32.000000)">
                                          <g id="Group" transform="translate(52.000000, 0.000000)">
                                              <g id="location-pin" transform="translate(8.000000, 1.000000)">
                                                  <path d="M31.321057,15.2082094 C31.321057,23.4532054 18.3210569,38.2800003 16,38.2800003 C13.678943,38.2800003 0.678943028,23.4227811 0.678943028,15.2082094 C0.678943028,6.96358711 7.53841401,0.28000031 16,0.28000031 C24.461586,0.28000031 31.321057,6.96358711 31.321057,15.2082094 L31.321057,15.2082094 Z" id="Path" stroke="#1E2630"></path>
                                                  <circle id="Oval" stroke="#FCBC31" cx="16" cy="14.97" r="5.67"></circle>
                                                  <path d="M7.08,33.66 C3.3,34.87 0.83,36.84 0.83,39.06 C0.83,42.75 7.62,45.75 16,45.75 C24.38,45.75 31.17,42.75 31.17,39.06 C31.17,36.84 28.7,34.87 24.92,33.66" id="Path" stroke="#FCBC31"></path>
                                              </g>
                                          </g>
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </svg></div>
                      <div class="wes-your-fc-details__label">Is in your area</div>
                      <div class="wes-your-fc-details__title">B1</div>
                  </div>
                  <div class="wes-your-fc-details__telephone">
                      <div class="wes-your-fc-details__icon">
                      <!-- For sitecore using media link
                      <img src="icon.svg" alt="Kiwi standing on oval">
                      -->
                      <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g id="🎨-UI-Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="Your_FC_Page_320" transform="translate(-136.000000, -572.000000)">
                                  <g id="FC_Block" transform="translate(20.000000, 92.000000)">
                                      <g id="FC_Details" transform="translate(0.000000, 248.000000)">
                                          <g id="FC_Telephone" transform="translate(28.000000, 232.000000)">
                                              <g id="Icons/Pictogram/Map-Pin" transform="translate(88.000000, 0.000000)">
                                                  <circle id="Oval" stroke="#202020" cx="24" cy="24" r="23.5"></circle>
                                                  <path d="M34.7802997,30.0047901 C35.3398158,30.3245346 36.1391245,30.8840876 35.9792628,32.0031934 C35.2201549,34.3691419 33.0284856,35.9807694 30.5439632,36 C26.9470738,36 22.5508756,33.2022354 18.7141936,29.2853649 C14.8775115,25.3684944 12,21.0519433 12,17.4548174 C12.0192293,14.9701317 13.6307509,12.7783183 15.9965438,12.0191604 C17.1155761,11.8592881 17.5951613,12.7385856 17.9948157,13.2182024 L20.7124655,17.3748812 C21.2954747,18.2385154 21.0825561,19.4096448 20.2328802,20.0127736 C19.0339171,20.9720072 17.9148848,21.2917517 22.311083,25.688239 C26.7072812,30.0847262 27.0270047,28.9656204 27.9861752,27.7665784 C28.5892644,26.9168467 29.7603167,26.7039141 30.6238941,27.2869616 L34.7802997,30.0047901 Z" id="Path" stroke="#FEBD11" stroke-linecap="round" stroke-linejoin="round"></path>
                                              </g>
                                          </g>
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </svg>
                      </div>
                      <div class="wes-your-fc-details__label">Call <a href="tel:08002949174">0800 294 9174</a> to arrange an appointment.</div>

                  </div>
              </div>

              <div class="wes-your-fc-bio">

              </div>
          </div>
        </div>
        <div class="col-lg-7 offset-lg-1">
        <!-- FC Form -->
        </div>
      </div>
    </div>
  </div>
</div>
    `,
});

export const fromJourneyWithProfession = () => ({
  template: `
      <!-- Container wrapper -->
  <div class="wes-bg-solid-grey-50x">
  <div class="wes-your-fc-background pt-4 pt-md-7 pt-lg-8">
    <div class="container">

      <div class="row">
        <div class="col-lg-4">
          <div class="wes-your-fc">
              <div class="wes-your-fc-profile row">
                  <div class="col-md-7 offset-md-1 col-lg-12 offset-lg-0">
                      <p class="wes-your-fc-profile__intro">Your Wesleyan Financial Services Consultant is</p>
                      <h1 class="wes-your-fc-profile__name">David Llewelyn-Smith</h1>
                  </div>
                  <div class="col-md-3 col-lg-12">
                      <div class="wes-your-fc-profile__image " style=" background-image: url('data:image/png;base64,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')">
                      </div>
                  </div>
              </div>

              <div class="wes-your-fc-details ">
                  <div class="wes-your-fc-details__profession">
                      <div class="wes-your-fc-details__icon">
                      <!-- For sitecore using media link
                      <img src="icon.svg" alt="Kiwi standing on oval">
                      -->
                      <svg width="46px" height="42px" viewBox="0 0 46 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g id="🎨-UI-Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="NC_Profession-Selector_1366" transform="translate(-396.000000, -447.000000)">
                                  <g id="Profession-cards" transform="translate(197.000000, 372.000000)">
                                      <g id="Btn" transform="translate(102.000000, 48.000000)">
                                          <g id="Group" transform="translate(96.000000, 24.000000)">
                                              <path d="M34.7608696,3.5 C29.9483722,3.5 25.8122443,6.48911734 24,10.7667949 C22.1877557,6.48911734 18.0516278,3.5 13.2391304,3.5 C6.75578772,3.5 1.5,8.92500213 1.5,15.6170814 C1.5,15.8071739 1.5,16.4743948 1.5,16.6268382 C1.5,24.761643 16.1722423,41.5761092 24,44.5 C31.8277577,41.5761092 46.5,24.761643 46.5,16.6268382 C46.5,14.5 46.5,15.8071739 46.5,15.6170814 C46.5,8.92500213 41.2442123,3.5 34.7608696,3.5 Z" id="heart" stroke="#1E2630" stroke-linecap="round" stroke-linejoin="round"></path>
                                              <path d="M11.3633752,9 L11.3633752,12.8638975 C11.3633752,13.1400399 11.1395176,13.3638975 10.8633752,13.3638975 L7,13.3638975 L7,15.6361025 L10.8633752,15.6361025 C11.1395176,15.6361025 11.3633752,15.8599601 11.3633752,16.1361025 L11.3633752,20 L13.6366248,20 L13.6366248,16.1361025 C13.6366248,15.8599601 13.8604824,15.6361025 14.1366248,15.6361025 L18,15.6361025 L18,13.3638975 L14.1366248,13.3638975 C13.8604824,13.3638975 13.6366248,13.1400399 13.6366248,12.8638975 L13.6366248,9 L11.3633752,9 Z M10.3633752,8.5 C10.3633752,8.22385763 10.5872328,8 10.8633752,8 L14.1366248,8 C14.4127672,8 14.6366248,8.22385763 14.6366248,8.5 L14.6366248,12.3638975 L18.5,12.3638975 C18.7761424,12.3638975 19,12.5877552 19,12.8638975 L19,16.1361025 C19,16.4122448 18.7761424,16.6361025 18.5,16.6361025 L14.6366248,16.6361025 L14.6366248,20.5 C14.6366248,20.7761424 14.4127672,21 14.1366248,21 L10.8633752,21 C10.5872328,21 10.3633752,20.7761424 10.3633752,20.5 L10.3633752,16.6361025 L6.5,16.6361025 C6.22385763,16.6361025 6,16.4122448 6,16.1361025 L6,12.8638975 C6,12.5877552 6.22385763,12.3638975 6.5,12.3638975 L10.3633752,12.3638975 L10.3633752,8.5 Z" id="plus" fill="#FEBD11" fill-rule="nonzero"></path>
                                          </g>
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </svg>
                      </div>
                      <div class="wes-your-fc-details__label">Dedicated field</div>
                      <div class="wes-your-fc-details__title">Hospital</div>
                  </div>
                  <div class="wes-your-fc-details__location">
                      <div class="wes-your-fc-details__icon"><svg width="32px" height="48px" viewBox="0 0 32 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="🎨-UI-Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                          <g id="Your_FC_Page_1366" transform="translate(-381.000000, -480.000000)">
                              <g id="FC_Block" transform="translate(97.000000, 204.000000)">
                                  <g id="FC_Details" transform="translate(0.000000, 244.000000)">
                                      <g id="FC_Location_Item" transform="translate(224.000000, 32.000000)">
                                          <g id="Group" transform="translate(52.000000, 0.000000)">
                                              <g id="location-pin" transform="translate(8.000000, 1.000000)">
                                                  <path d="M31.321057,15.2082094 C31.321057,23.4532054 18.3210569,38.2800003 16,38.2800003 C13.678943,38.2800003 0.678943028,23.4227811 0.678943028,15.2082094 C0.678943028,6.96358711 7.53841401,0.28000031 16,0.28000031 C24.461586,0.28000031 31.321057,6.96358711 31.321057,15.2082094 L31.321057,15.2082094 Z" id="Path" stroke="#1E2630"></path>
                                                  <circle id="Oval" stroke="#FCBC31" cx="16" cy="14.97" r="5.67"></circle>
                                                  <path d="M7.08,33.66 C3.3,34.87 0.83,36.84 0.83,39.06 C0.83,42.75 7.62,45.75 16,45.75 C24.38,45.75 31.17,42.75 31.17,39.06 C31.17,36.84 28.7,34.87 24.92,33.66" id="Path" stroke="#FCBC31"></path>
                                              </g>
                                          </g>
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </svg></div>
                      <div class="wes-your-fc-details__label">Is in your area</div>
                      <div class="wes-your-fc-details__title">B1</div>
                  </div>
                  <div class="wes-your-fc-details__telephone">
                      <div class="wes-your-fc-details__icon">
                      <!-- For sitecore using media link
                      <img src="icon.svg" alt="Kiwi standing on oval">
                      -->
                      <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g id="🎨-UI-Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="Your_FC_Page_320" transform="translate(-136.000000, -572.000000)">
                                  <g id="FC_Block" transform="translate(20.000000, 92.000000)">
                                      <g id="FC_Details" transform="translate(0.000000, 248.000000)">
                                          <g id="FC_Telephone" transform="translate(28.000000, 232.000000)">
                                              <g id="Icons/Pictogram/Map-Pin" transform="translate(88.000000, 0.000000)">
                                                  <circle id="Oval" stroke="#202020" cx="24" cy="24" r="23.5"></circle>
                                                  <path d="M34.7802997,30.0047901 C35.3398158,30.3245346 36.1391245,30.8840876 35.9792628,32.0031934 C35.2201549,34.3691419 33.0284856,35.9807694 30.5439632,36 C26.9470738,36 22.5508756,33.2022354 18.7141936,29.2853649 C14.8775115,25.3684944 12,21.0519433 12,17.4548174 C12.0192293,14.9701317 13.6307509,12.7783183 15.9965438,12.0191604 C17.1155761,11.8592881 17.5951613,12.7385856 17.9948157,13.2182024 L20.7124655,17.3748812 C21.2954747,18.2385154 21.0825561,19.4096448 20.2328802,20.0127736 C19.0339171,20.9720072 17.9148848,21.2917517 22.311083,25.688239 C26.7072812,30.0847262 27.0270047,28.9656204 27.9861752,27.7665784 C28.5892644,26.9168467 29.7603167,26.7039141 30.6238941,27.2869616 L34.7802997,30.0047901 Z" id="Path" stroke="#FEBD11" stroke-linecap="round" stroke-linejoin="round"></path>
                                              </g>
                                          </g>
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </svg>
                      </div>
                      <div class="wes-your-fc-details__label">Call <a href="tel:08002949174">0800 294 9174</a> to arrange an appointment.</div>

                  </div>
              </div>

              <div class="wes-your-fc-bio">

              </div>
          </div>
        </div>
        <div class="col-lg-7 offset-lg-1">
        <!-- FC Form -->
        </div>
      </div>
    </div>
  </div>
  </div>
    `,
});

export const fromNoImage = () => ({
  template: `
      <!-- Container wrapper -->
  <div class="wes-bg-solid-grey-50"></div>
  <div class="wes-your-fc-background pt-4 pt-md-7 pt-lg-8">
    <div class="container">

      <div class="row">
        <div class="col-lg-4">
          <div class="wes-your-fc">
              <div class="wes-your-fc-profile row">
                  <div class="col-md-7 offset-md-1 col-lg-12 offset-lg-0">
                      <p class="wes-your-fc-profile__intro">Your Wesleyan Financial Services Consultant is</p>
                      <h1 class="wes-your-fc-profile__name">David Llewelyn-Smith</h1>
                  </div>
                  <div class="col-md-3 col-lg-12">
                      <!--<div class="wes-your-fc-profile__image " style=" background-image: url('data:image/png;base64,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')">
                      </div>-->
                  </div>
              </div>

              <div class="wes-your-fc-details ">
                  <div class="wes-your-fc-details__profession">
                      <div class="wes-your-fc-details__icon">
                      <!-- For sitecore using media link
                      <img src="icon.svg" alt="Kiwi standing on oval">
                      -->
                      <svg width="46px" height="42px" viewBox="0 0 46 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g id="🎨-UI-Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="NC_Profession-Selector_1366" transform="translate(-396.000000, -447.000000)">
                                  <g id="Profession-cards" transform="translate(197.000000, 372.000000)">
                                      <g id="Btn" transform="translate(102.000000, 48.000000)">
                                          <g id="Group" transform="translate(96.000000, 24.000000)">
                                              <path d="M34.7608696,3.5 C29.9483722,3.5 25.8122443,6.48911734 24,10.7667949 C22.1877557,6.48911734 18.0516278,3.5 13.2391304,3.5 C6.75578772,3.5 1.5,8.92500213 1.5,15.6170814 C1.5,15.8071739 1.5,16.4743948 1.5,16.6268382 C1.5,24.761643 16.1722423,41.5761092 24,44.5 C31.8277577,41.5761092 46.5,24.761643 46.5,16.6268382 C46.5,14.5 46.5,15.8071739 46.5,15.6170814 C46.5,8.92500213 41.2442123,3.5 34.7608696,3.5 Z" id="heart" stroke="#1E2630" stroke-linecap="round" stroke-linejoin="round"></path>
                                              <path d="M11.3633752,9 L11.3633752,12.8638975 C11.3633752,13.1400399 11.1395176,13.3638975 10.8633752,13.3638975 L7,13.3638975 L7,15.6361025 L10.8633752,15.6361025 C11.1395176,15.6361025 11.3633752,15.8599601 11.3633752,16.1361025 L11.3633752,20 L13.6366248,20 L13.6366248,16.1361025 C13.6366248,15.8599601 13.8604824,15.6361025 14.1366248,15.6361025 L18,15.6361025 L18,13.3638975 L14.1366248,13.3638975 C13.8604824,13.3638975 13.6366248,13.1400399 13.6366248,12.8638975 L13.6366248,9 L11.3633752,9 Z M10.3633752,8.5 C10.3633752,8.22385763 10.5872328,8 10.8633752,8 L14.1366248,8 C14.4127672,8 14.6366248,8.22385763 14.6366248,8.5 L14.6366248,12.3638975 L18.5,12.3638975 C18.7761424,12.3638975 19,12.5877552 19,12.8638975 L19,16.1361025 C19,16.4122448 18.7761424,16.6361025 18.5,16.6361025 L14.6366248,16.6361025 L14.6366248,20.5 C14.6366248,20.7761424 14.4127672,21 14.1366248,21 L10.8633752,21 C10.5872328,21 10.3633752,20.7761424 10.3633752,20.5 L10.3633752,16.6361025 L6.5,16.6361025 C6.22385763,16.6361025 6,16.4122448 6,16.1361025 L6,12.8638975 C6,12.5877552 6.22385763,12.3638975 6.5,12.3638975 L10.3633752,12.3638975 L10.3633752,8.5 Z" id="plus" fill="#FEBD11" fill-rule="nonzero"></path>
                                          </g>
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </svg>
                      </div>
                      <div class="wes-your-fc-details__label">Dedicated field</div>
                      <div class="wes-your-fc-details__title">Hospital</div>
                  </div>
                  <div class="wes-your-fc-details__location">
                      <div class="wes-your-fc-details__icon"><svg width="32px" height="48px" viewBox="0 0 32 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="🎨-UI-Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                          <g id="Your_FC_Page_1366" transform="translate(-381.000000, -480.000000)">
                              <g id="FC_Block" transform="translate(97.000000, 204.000000)">
                                  <g id="FC_Details" transform="translate(0.000000, 244.000000)">
                                      <g id="FC_Location_Item" transform="translate(224.000000, 32.000000)">
                                          <g id="Group" transform="translate(52.000000, 0.000000)">
                                              <g id="location-pin" transform="translate(8.000000, 1.000000)">
                                                  <path d="M31.321057,15.2082094 C31.321057,23.4532054 18.3210569,38.2800003 16,38.2800003 C13.678943,38.2800003 0.678943028,23.4227811 0.678943028,15.2082094 C0.678943028,6.96358711 7.53841401,0.28000031 16,0.28000031 C24.461586,0.28000031 31.321057,6.96358711 31.321057,15.2082094 L31.321057,15.2082094 Z" id="Path" stroke="#1E2630"></path>
                                                  <circle id="Oval" stroke="#FCBC31" cx="16" cy="14.97" r="5.67"></circle>
                                                  <path d="M7.08,33.66 C3.3,34.87 0.83,36.84 0.83,39.06 C0.83,42.75 7.62,45.75 16,45.75 C24.38,45.75 31.17,42.75 31.17,39.06 C31.17,36.84 28.7,34.87 24.92,33.66" id="Path" stroke="#FCBC31"></path>
                                              </g>
                                          </g>
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </svg></div>
                      <div class="wes-your-fc-details__label">Is in your area</div>
                      <div class="wes-your-fc-details__title">B1</div>
                  </div>
                  <div class="wes-your-fc-details__telephone">
                      <div class="wes-your-fc-details__icon">
                      <!-- For sitecore using media link
                      <img src="icon.svg" alt="Kiwi standing on oval">
                      -->
                      <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g id="🎨-UI-Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="Your_FC_Page_320" transform="translate(-136.000000, -572.000000)">
                                  <g id="FC_Block" transform="translate(20.000000, 92.000000)">
                                      <g id="FC_Details" transform="translate(0.000000, 248.000000)">
                                          <g id="FC_Telephone" transform="translate(28.000000, 232.000000)">
                                              <g id="Icons/Pictogram/Map-Pin" transform="translate(88.000000, 0.000000)">
                                                  <circle id="Oval" stroke="#202020" cx="24" cy="24" r="23.5"></circle>
                                                  <path d="M34.7802997,30.0047901 C35.3398158,30.3245346 36.1391245,30.8840876 35.9792628,32.0031934 C35.2201549,34.3691419 33.0284856,35.9807694 30.5439632,36 C26.9470738,36 22.5508756,33.2022354 18.7141936,29.2853649 C14.8775115,25.3684944 12,21.0519433 12,17.4548174 C12.0192293,14.9701317 13.6307509,12.7783183 15.9965438,12.0191604 C17.1155761,11.8592881 17.5951613,12.7385856 17.9948157,13.2182024 L20.7124655,17.3748812 C21.2954747,18.2385154 21.0825561,19.4096448 20.2328802,20.0127736 C19.0339171,20.9720072 17.9148848,21.2917517 22.311083,25.688239 C26.7072812,30.0847262 27.0270047,28.9656204 27.9861752,27.7665784 C28.5892644,26.9168467 29.7603167,26.7039141 30.6238941,27.2869616 L34.7802997,30.0047901 Z" id="Path" stroke="#FEBD11" stroke-linecap="round" stroke-linejoin="round"></path>
                                              </g>
                                          </g>
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </svg>
                      </div>
                      <div class="wes-your-fc-details__label">Call <a href="tel:08002949174">0800 294 9174</a> to arrange an appointment.</div>

                  </div>
              </div>

              <div class="wes-your-fc-bio">

              </div>
          </div>
        </div>
        <div class="col-lg-7 offset-lg-1">
        <!-- FC Form -->
        </div>
      </div>
    </div>
  </div>
<script>
document.body.classList.add("wes-bg-solid-grey-50");
</script>
    `,
});
