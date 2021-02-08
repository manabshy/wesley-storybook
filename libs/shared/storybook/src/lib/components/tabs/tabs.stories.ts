import { addParameters, storiesOf } from '@storybook/angular';
import { array, select, object, text, withKnobs } from '@storybook/addon-knobs';
import addons from '@storybook/addons';
import jquery from 'jquery';
import util from 'bootstrap/js/dist/util';
import tab from 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/dropdown';

global = { ...global, ...{ $: jquery, jQuery: jquery, Util: util, Tab: tab } };

console.log('global:', global);

addParameters({ docs: { iframeHeight: 500 } });

// storiesOf('Tabs', module).addDecorator(story => {
//     addons.getChannel().emit(CoreEvents.REGISTER_SUBSCRIPTION, subscribe));
//     return story();
//   });

export default {
  title: 'Components/Tabs',
  decorators: [withKnobs],
};

const styleVariants = {
  'white background': 'white-background',
  'grey background': 'grey-background',
};

const tabScript = () => {
  var triggerTabList = [].slice.call(
    document.querySelectorAll('a[data-bs-toggle]')
  );
  triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new tab(triggerEl);

    triggerEl.addEventListener('click', function (event) {
      event.preventDefault();
      tabTrigger.show();
    });
  });
};

// export const tabs = () => ({
//   template: `
//     <div class="component tabs initialized">
//   <div class="component-content">
//     <div class="tabs-inner">
//       <ul class="tabs-heading">
//         <li tabindex="0" class="active">
//           <div>
//             <div class="component content">
//               <div class="component-content">
//                 <div class="field-heading">Tab Item 1</div>
//               </div>
//             </div>
//           </div>
//         </li>
//         <li tabindex="-1">
//           <div>
//             <div class="component content">
//               <div class="component-content">
//                 <div class="field-heading">Tab Item 2</div>
//               </div>
//             </div>
//           </div>
//         </li>
//       </ul>
//       <div class="tabs-container">
//         <div class="tab active">
//           <div class="component content">
//             <div class="component-content">
//               <div class="field-content"><p>TEXT 1</p></div>
//             </div>
//           </div>
//         </div>
//         <div class="tab">
//           <div class="component content">
//             <div class="component-content">
//               <div class="field-content"><p>TEXT 2</p></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//     `,
// });

export const tabs1 = () => ({
  template: `
    <!-- Nav tabs -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="messages-tab" data-bs-toggle="tab" href="#messages" role="tab" aria-controls="messages" aria-selected="false">Messages</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="settings-tab" data-bs-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings</a>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">home tabs content</div>
  <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">profile tabs content</div>
  <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">messages tabs content</div>
  <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">setttings tabs content</div>
</div>
    `,
});
