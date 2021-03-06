export default {
  title: 'Components/Download Card',
};

export const downloadCard = () => ({
  template: `
    <a class="wes-download-card" href="#" target="">
      <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="wes-icon" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd" stroke="none" stroke-linejoin="round" stroke-width="1">
          <g id="1_ISA-Product-Page_v2_1366" transform="translate(-113.000000, -8916.000000)">
            <g id="Important-Information" transform="translate(0.000000, 6932.000000)">
              <g id="Contents" transform="translate(95.000000, 228.000000)">
                <g id="Key-Documents" transform="translate(0.000000, 1604.000000)">
                  <g id="Doc-Card" transform="translate(0.000000, 120.000000)">
                    <g id="Icon" transform="translate(18.000000, 32.000000)">
                      <path d="M5.5,0.5 L21.75,0.5 L21.75,0.5 L27.5,7.28125 L27.5,30.5 C27.5,31.0522847 27.0522847,31.5 26.5,31.5 L16,31.5 L5.5,31.5 C4.94771525,31.5 4.5,31.0522847 4.5,30.5 L4.5,1.5 C4.5,0.94771525 4.94771525,0.5 5.5,0.5 Z" id="Rectangle" stroke="#1E2630"></path>
                      <path d="M22.5,20.5 L22.5,23.5 C22.5,24.0522847 22.0522847,24.5 21.5,24.5 L10.5,24.5 C9.94771525,24.5 9.5,24.0522847 9.5,23.5 L9.5,20.5" id="Path" stroke="#1E2630" stroke-linecap="round"></path>
                      <path d="M17.5,7.5 L17.5,15.5 L20.5,15.5 L16,20.5 L11.5,15.5 L14.5,15.5 L14.5,7.5 L17.5,7.5 Z" id="docCardArrow" stroke="#FEBD11"></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <span class="wes-download-card-text-container">
        <span class="wes-download-card-label">Key Features Document</span>
        <span class="wes-download-card-sub wes-text-xs">PDF (205KB)</span>
      </span>
    </a>
  `,
});