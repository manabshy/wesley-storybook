import { addParameters, storiesOf } from '@storybook/angular';
import { array, select, object, text, withKnobs } from '@storybook/addon-knobs';
import addons from '@storybook/addons';
import jquery from 'jquery';
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap/js/dist/dropdown';

global = { ...global, ...{ $: jquery, jQuery: jquery, bootstrap: bootstrap } };

addParameters({ docs: { iframeHeight: 500 } });

export default {
  title: 'Components/Tabs',
  decorators: [withKnobs],
};

const styleVariants = {
  'white background': 'white-background',
  'grey background': 'grey-background',
};

const tabScript = () => {
  // get data attribute for media match

  // check state and execute tabs or accordion accordingly
  var triggerTabList = [].slice.call(
    document.querySelectorAll('a[data-toggle]')
  );
  triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl);

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
  <div class="container wes-tabs">
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="messages-tab" data-toggle="tab" href="#messages" role="tab" aria-controls="messages" aria-selected="false">Messages</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings</a>
      </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a data-toggle="collapse" data-parent=".tab-pane" href="#collapse1">
              Home
            </a>
          </h4>
        </div>
        <div id="collapse1" class="tab-panel-body collapse">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis vehicula arcu id maximus. Nam finibus eget arcu sit amet interdum. Sed at tellus sem. Suspendisse maximus mollis hendrerit. Quisque venenatis quam at tellus pretium ornare. Morbi aliquam, turpis vel cursus iaculis, purus lectus dictum velit, in placerat purus neque non est. Phasellus dui risus, consequat et gravida eget, pharetra ac nunc. Sed in augue sodales odio laoreet tincidunt id eget lacus. In id nulla eget lectus euismod fermentum vulputate fermentum metus. Aenean ac lectus erat. Quisque at orci orci.
        </div>
      </div>
      <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a data-toggle="collapse" data-parent=".tab-pane" href="#collapse2">
              Profile
            </a>
          </h4>
        </div>
        <div id="collapse2" class="tab-panel-body collapse">
          Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.
        </div>
      </div>
      <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a data-toggle="collapse" data-parent=".tab-pane" href="#collapse3">
              Messages
            </a>
          </h4>
        </div>
        <div id="collapse3" class="tab-panel-body collapse">
          Morbi in pellentesque tortor. Mauris metus ipsum, luctus sed purus vel, faucibus sollicitudin nibh. Donec suscipit lacinia libero, a condimentum dolor tincidunt ac. Phasellus gravida, risus sit amet semper venenatis, tellus purus fermentum enim, vel ullamcorper dui nisl non ligula. Phasellus dignissim vehicula magna, sed ultrices arcu. Suspendisse tortor nulla, dictum et odio at, tincidunt laoreet felis. Quisque quis dui dui. Donec in velit mollis, feugiat augue id, efficitur neque.
        </div>
      </div>
      <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a data-toggle="collapse" data-parent=".tab-pane" href="#collapse4">
              Settings
            </a>
          </h4>
        </div>
        <div id="collapse4" class="tab-panel-body collapse">
        Vestibulum scelerisque eleifend augue, in faucibus massa tempus et. Sed id neque nulla. In a massa maximus, tempus lectus non, porttitor purus. Quisque vestibulum suscipit vehicula. Suspendisse iaculis, nisl in congue hendrerit, purus ipsum blandit ligula, eu cursus quam neque ut sapien. Phasellus hendrerit lorem velit, eu semper sapien volutpat auctor. Proin enim metus, pellentesque in euismod vel, hendrerit a lorem. Ut viverra magna ut diam rhoncus, vel pretium arcu porta. Donec sodales feugiat augue, quis blandit sem finibus ac. Ut ac nisi vel urna euismod scelerisque. Ut vehicula tempor justo. Aenean posuere, mi sed molestie tempor, purus nisi rutrum eros, in tempus ex ligula nec sem. In rutrum lorem in eros gravida, id convallis orci tincidunt. Pellentesque feugiat blandit nulla nec vehicula.
        </div>
      </div>
    </div>
  </div>
    `,
});

// tabs1.decorators = [
//   (storyFunc) => {
//     const story = storyFunc();
//     // setTimeout(() => {
//     //   tabScript();
//     // });

//     return {
//       ...story,
//       template: `${story.template}`,
//     };
//   },
// ];
