import { color, number } from "@storybook/addon-knobs";

export default {
  title: 'Atoms|Icon',
};

export const spritesheet = () => ({
  template: `
    <svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-arrow-right" viewBox="0 0 32 32">
          <path d="M18.488 4c-0.017-0.001-0.037-0.001-0.057-0.001-0.553 0-1.053 0.224-1.415 0.587l-0 0c-0.362 0.362-0.586 0.862-0.586 1.414s0.224 1.052 0.586 1.414l6.584 6.586h-19.6c-1.105 0-2 0.895-2 2v0c0 1.105 0.895 2 2 2v0h19.6l-6.584 6.586c-0.362 0.362-0.586 0.862-0.586 1.414s0.224 1.052 0.586 1.414v0c0.362 0.362 0.862 0.586 1.414 0.586s1.052-0.224 1.414-0.586l10-10c0.362-0.362 0.586-0.862 0.586-1.414s-0.224-1.052-0.586-1.414l-10-10c-0.348-0.349-0.825-0.57-1.353-0.586l-0.003-0z"></path>
        </symbol>
        <symbol id="icon-arrow-left" viewBox="0 0 32 32">
          <path d="M13.512 28c0.017 0 0.037 0.001 0.057 0.001 0.553 0 1.053-0.224 1.415-0.587l0-0c0.362-0.362 0.586-0.862 0.586-1.414s-0.224-1.052-0.586-1.414l-6.584-6.586h19.6c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0h-19.6l6.584-6.586c0.362-0.362 0.586-0.862 0.586-1.414s-0.224-1.052-0.586-1.414v0c-0.362-0.362-0.862-0.586-1.414-0.586s-1.052 0.224-1.414 0.586l-10 10c-0.362 0.362-0.586 0.862-0.586 1.414s0.224 1.052 0.586 1.414l10 10c0.348 0.349 0.825 0.57 1.353 0.586l0.003 0z"></path>
        </symbol>
      </defs>
    </svg>

    <div style="padding:0 2rem;color:{{ color }};font-size:{{ fontSize }}px">
      <div>
        <svg class="wes-icon">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
        <span class="name"> icon-arrow-right</span>
      </div>
      <div>
        <svg class="wes-icon">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
        <span class="name"> icon-arrow-left</span>
      </div>
    </div>
  `,
  props: {
    color: color('Color', '#febd11'),
    fontSize: number('Font size', 20, {min:12,max:56,step:2}),
  },
});

export const customSVG = () => ({
  template: `
    <div style="padding:0 2rem;color:{{ color }};font-size:{{ fontSize }}px">
      <div>
        <svg class="wes-icon" viewBox="0 0 32 32">
          <path d="M20 14c-1.105 0-2-0.895-2-2 0-0.037 0.001-0.073 0.003-0.109 0.064-1.483 1.413-2.467 2.55-3.036 1.086-0.543 2.159-0.814 2.205-0.826 0.536-0.134 1.079 0.192 1.213 0.728s-0.192 1.079-0.728 1.213c-0.551 0.139-1.204 0.379-1.779 0.667 0.333 0.357 0.537 0.836 0.537 1.363 0 1.105-0.895 2-2 2zM8.758 9.97c-0.536-0.134-0.862-0.677-0.728-1.213s0.677-0.862 1.213-0.728c0.045 0.011 1.119 0.283 2.205 0.826 1.137 0.568 2.486 1.553 2.55 3.036 0.002 0.036 0.003 0.072 0.003 0.109 0 1.105-0.895 2-2 2s-2-0.895-2-2c0-0.527 0.204-1.005 0.537-1.363-0.575-0.288-1.229-0.528-1.779-0.667zM16 23c2.549 0 4.779-1.362 6.003-3.398l2.573 1.544c-1.749 2.908-4.935 4.855-8.576 4.855s-6.827-1.946-8.576-4.855l2.573-1.544c1.224 2.036 3.454 3.398 6.003 3.398zM32 2c0-1.422-0.298-2.775-0.833-4-1.049 2.401-3.014 4.31-5.453 5.287-2.694-2.061-6.061-3.287-9.714-3.287s-7.021 1.226-9.714 3.287c-2.439-0.976-4.404-2.886-5.453-5.287-0.535 1.225-0.833 2.578-0.833 4 0 2.299 0.777 4.417 2.081 6.106-1.324 2.329-2.081 5.023-2.081 7.894 0 8.837 7.163 16 16 16s16-7.163 16-16c0-2.871-0.757-5.565-2.081-7.894 1.304-1.689 2.081-3.806 2.081-6.106zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
        </svg>
        <span class="name"> custom SVG</span>
      </div>
      <div>
        <svg class="wes-icon" viewBox="0 0 32 32">
          <path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM6 16v2c0 4.4 3.6 8 8 8h4c4.4 0 8-3.6 8-8v-2h-20zM12 23.656c-0.829-0.296-1.591-0.776-2.236-1.42-1.138-1.138-1.764-2.642-1.764-4.236h4v5.656zM18 24h-4v-6h4v6zM22.236 22.236c-0.645 0.645-1.407 1.125-2.236 1.42v-5.656h4c0 1.594-0.627 3.098-1.764 4.236zM7.042 12c0 0 0 0 0 0 0.305 0 0.566-0.22 0.616-0.522 0.192-1.146 1.177-1.978 2.341-1.978s2.149 0.832 2.341 1.978c0.050 0.301 0.311 0.522 0.616 0.522s0.566-0.22 0.616-0.521c0.034-0.201 0.051-0.404 0.051-0.604 0-1.999-1.626-3.625-3.625-3.625s-3.625 1.626-3.625 3.625c0 0.199 0.017 0.402 0.051 0.604 0.051 0.301 0.311 0.521 0.616 0.521zM19.042 12c0 0 0 0 0 0 0.305 0 0.566-0.22 0.616-0.522 0.192-1.146 1.177-1.978 2.341-1.978s2.149 0.832 2.341 1.978c0.050 0.301 0.311 0.522 0.616 0.522s0.566-0.22 0.616-0.521c0.034-0.201 0.051-0.404 0.051-0.604 0-1.999-1.626-3.625-3.625-3.625s-3.625 1.626-3.625 3.625c0 0.199 0.017 0.402 0.051 0.604 0.051 0.301 0.311 0.521 0.617 0.521z"></path>
        </svg>
        <span class="name"> custom SVG</span>
      </div>
    </div>
  `,
  props: {
    color: color('Color', '#febd11'),
    fontSize: number('Font size', 20, {min:12,max:56,step:2}),
  },
});