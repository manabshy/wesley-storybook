import { select, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Campaigns|Who Do We Help (Full Width)',
  decorators: [withKnobs],
};

const variants = {
  'On White': '',
  'On Grey': 'wes-who-do-we-help--grey',
};

export const whoDoWeHelp = () => ({
  template: `
    <!-- Who Do We Help component root -->
    <div class="wes-who-do-we-help {{variant}}">
      <div class="wes-who-do-we-help__wrapper">
        <div class="wes-who-do-we-help__body">
          <div class="wes-who-do-we-help__body-content">
            <h2 class="wes-who-do-we-help__title">Who do we help?</h2>
            <ul class="wes-who-do-we-help__list">
              <li class="wes-who-do-we-help__item">
                <span class="wes-who-do-we-help__item-svg">
                  <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"><g transform="translate(5.333)" fill="none" fill-rule="evenodd"><path d="M4.594 2.286L0 3.234c1.42 9.527 4.468 14.29 9.143 14.29M13.692 2.286l4.594.948c-1.42 9.527-4.468 14.29-9.143 14.29" stroke="#1E2630" stroke-linejoin="round"/><path d="M9.143 17.524v9.905c.013 2.063.778 3.095 2.295 3.095 1.518 0 2.276-.61 2.276-1.83v-7.208c.119-1.14.91-1.709 2.375-1.709 1.464 0 2.197.57 2.197 1.709v4.463" stroke="#1E2630"/><rect stroke="#1E2630" fill="#D8D8D8" x="4.31" y=".5" width="1" height="3.571" rx=".5"/><rect stroke="#1E2630" fill="#D8D8D8" x="13.452" y=".5" width="1" height="3.571" rx=".5"/><circle stroke="#FEBD11" cx="18.286" cy="27.429" r="1.786"/></g></svg>
                </span>
                <p class="wes-who-do-we-help__item-text">GPs</p>
              </li>
              <li class="wes-who-do-we-help__item">
                <span class="wes-who-do-we-help__item-svg">
                  <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                      <path d="M22.655 4.667h5.527c.636 0 1.151.597 1.151 1.333v24c0 .736-.515 1.333-1.151 1.333H5.152C4.516 31.333 4 30.736 4 30V6c0-.736.516-1.333 1.152-1.333h5.46" stroke="#1E2630"/>
                      <path d="M18.333.5l.502 2.666h3.498l.5 3.834L11 7.5l-.5-3.833 4-.502V1l3.833-.5z" stroke="#1E2630"/>
                      <path stroke="#FEBD11" stroke-linecap="round" stroke-linejoin="round" d="M16.667 12.667v12M10.667 18.667h12"/>
                    </g>
                  </svg>
                </span>
                <p class="wes-who-do-we-help__item-text">Hospital doctors</p>
              </li>
              <li class="wes-who-do-we-help__item">
                <span class="wes-who-do-we-help__item-svg">
                  <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                      <path d="M8.322 2.238c3.395-1.57 6.29-1.097 8.687 1.416h0c2.157-2.513 4.932-2.985 8.327-1.416 3.394 1.57 3.897 5.798 1.51 12.687.558 3.798.558 6.652 0 8.561-.557 1.91-1.475 3.807-2.752 5.694-1.149 1.63-2.108 1.63-2.878 0-1.142-2.416-1.827-9.749-4.386-9.916-2.56.167-3.246 7.5-4.388 9.916-.77 1.63-1.73 1.63-2.878 0-1.277-1.887-2.194-3.785-2.752-5.694-.557-1.91-.557-4.763 0-8.561C4.425 8.036 4.928 3.807 8.322 2.238z" stroke="#1E2630"/>
                      <path d="M12.83 3.644c-3.135-.01-4.913 1.324-5.333 4" stroke="#FEBD11" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </svg>
                </span>
                <p class="wes-who-do-we-help__item-text">Dentists</p>
              </li>
              <li class="wes-who-do-we-help__item">
                <span class="wes-who-do-we-help__item-svg">
                  <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                      <circle fill="#FEBD11" cx="10.333" cy="19.667" r="1"/>
                      <circle fill="#FEBD11" cx="6.333" cy="19.667" r="1"/>
                      <circle fill="#FEBD11" cx="14.333" cy="19.667" r="1"/>
                      <path d="M16.667 12.833c.69 0 1.315.28 1.767.733.453.452.733 1.077.733 1.767h0v8.711c0 .69-.28 1.316-.733 1.768a2.492 2.492 0 01-1.767.732h0H5.419L.833 32.048V15.333c0-.69.28-1.315.733-1.767a2.492 2.492 0 011.767-.733h0z" stroke="#1E2630" stroke-linejoin="round"/>
                      <path d="M28.667.833c.69 0 1.315.28 1.767.733.453.452.733 1.077.733 1.767h0v8.711c0 .69-.28 1.316-.733 1.768a2.492 2.492 0 01-1.767.732h0-11.248l-4.586 5.504V3.333c0-.69.28-1.315.733-1.767a2.492 2.492 0 011.767-.733h0z" stroke="#1E2630" fill="#FFF" stroke-linejoin="round"/>
                      <path stroke="#FEBD11" stroke-linecap="round" stroke-linejoin="round" d="M16.667 6h10.666M16.667 8.667h8"/>
                    </g>
                  </svg>
                </span>
                <p class="wes-who-do-we-help__item-text">Consultants</p>
              </li>
              <li class="wes-who-do-we-help__item">
                <span class="wes-who-do-we-help__item-svg">
                  <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(2.513)" fill="none" fill-rule="evenodd">
                      <path stroke="#1E2630" stroke-linecap="round" stroke-linejoin="round" d="M.153 30.667H26.82M5.487 28h16"/>
                      <circle stroke="#1E2630" cx="13.487" cy="6.667" r="1"/>
                      <path stroke="#1E2630" stroke-linecap="round" stroke-linejoin="round" d="M4.153 6.667H22.82M18.82 12.713l4-3.971 3.956 3.97M.153 12.713l4-3.971 3.956 3.97"/>
                      <path d="M.153 12.713H8.11c.664 2.667-.654 4-3.956 4-3.3 0-4.634-1.333-4-4zM18.82 12.713h7.956c.664 2.667-.655 4-3.956 4s-4.634-1.333-4-4z" stroke="#FEBD11" stroke-linecap="round" stroke-linejoin="round"/>
                      <path stroke="#1E2630" stroke-linecap="round" stroke-linejoin="round" d="M13.487 28V.769"/>
                    </g>
                  </svg>
                </span>
                <p class="wes-who-do-we-help__item-text">Partners</p>
              </li>
              <li class="wes-who-do-we-help__item">
                <span class="wes-who-do-we-help__item-svg">
                  <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd" stroke-linejoin="round">
                      <path stroke="#1E2630" d="M1.333 12h29.333v13.333H1.333z"/>
                      <path d="M4 5.44c5.473.624 9.473 3.116 12 7.478h0v13.855c-1.875-1.838-3.51-3.124-4.904-3.86-1.395-.734-3.74-1.546-7.035-2.433h0zm24.058 0l-.06 15.04c-3.296.887-5.64 1.699-7.035 2.434-1.395.735-3.03 2.021-4.905 3.859V12.918c2.528-4.362 6.528-6.854 12-7.479z" stroke="#1E2630" fill="#FFF"/>
                      <path stroke="#FEBD11" stroke-linecap="round" d="M6.667 12H12M6.667 14.667H12M6.667 17.333H12M20 12h5.333M20 14.667h5.333M20 17.333h5.333"/>
                    </g>
                  </svg>
                </span>
                <p class="wes-who-do-we-help__item-text">Medical students</p>
              </li>
            </ul>

            <div class="wes-who-do-we-help__message">
              <!-- Rich Text -->
              <p>90% of GP customers rated their Wesleyan Financial Services Consultant as very good or excellent in 2019*</p>
            </div>

            <div class="wes-who-do-we-help__footnote">
              <!-- Rich Text -->
              <p>*Wesleyan Sales Survey 2019 – based on scoring 8, 9 or 10 out of 10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  props: {
    variant: select('Variant', variants, ''),
  },
});
