export default {
  title: 'Components/List',
};

export const tickedList = () => ({
  template: `
    <div class="container">
      <div class="col-md-6 offset-md-3" style="padding:20px 0">

        <ul class="wes-list wes-list-ticks">
          <li>Save up to £20,000 in the 2020/2021 tax year</li>
          <li>Pay no income tax or capital gains tax on your investment returns</li>
          <li>Share in Wesleyan's profits through the With Profits ISA Fund</li>
          <li>Smooth the ups and downs of market returns</li>
        </ul>

      </div>
    </div>
  `,
});

export const bulletedList = () => ({
  template: `
    <div class="container">
      <div class="col-md-6 offset-md-3" style="padding:20px 0">

        <ul class="wes-list wes-list-bullets">
          <li>Save up to £20,000 in the 2020/2021 tax year</li>
          <li>Pay no income tax or capital gains tax on your investment returns</li>
          <li>Share in Wesleyan's profits through the With Profits ISA Fund</li>
          <li>Smooth the ups and downs of market returns</li>
        </ul>

      </div>
    </div>
  `,
});

export const numberedList = () => ({
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8 offset-md-1">

          <ol class="wes-list wes-list-numbered">
            <li>Home emergency support – We have a network of registered tradespeople available 24/7, ready to help fix your domestic crises like a burst pipe or heating breakdown.</li>
            <li>Pest removal cover – Covers the cost of calling an expert out to remove a pest infestation at home.</li>
            <li>Family legal expenses – Protects you and your family from the costs of legal disputes, whether with a neighbour or your employer.</li>
            <li>Keycare cover – Covers all your keys and locks, saving you from paying an excess and losing your no-claims bonus.</li>
            <li>ID theft support – Provides you with a personal action plan in the event of your identity being stolen.</li>
          </ol>

        </div>
      </div>
    </div>
  `,
});

export const chevronList = () => ({
  template: `
    <div class="container">
      <div class="col-md-6 offset-md-3" style="padding:20px 0">

        <ul class="wes-list wes-list-chevron">
          <li>Save up to £20,000 in the 2020/2021 tax year</li>
          <li>Pay no income tax or capital gains tax on your investment returns</li>
          <li>Share in Wesleyan's profits through the With Profits ISA Fund</li>
          <li>Smooth the ups and downs of market returns</li>
        </ul>

      </div>
    </div>
  `,
});

export const chevronListGrey = () => ({
  template: `
    <div class="container">
      <div class="col-md-6 offset-md-3" style="padding:20px 0">

        <ul class="wes-list wes-list-chevron list-icon-grey">
          <li>Save up to £20,000 in the 2020/2021 tax year</li>
          <li>Pay no income tax or capital gains tax on your investment returns</li>
          <li>Share in Wesleyan's profits through the With Profits ISA Fund</li>
          <li>Smooth the ups and downs of market returns</li>
        </ul>

      </div>
    </div>
  `,
});
