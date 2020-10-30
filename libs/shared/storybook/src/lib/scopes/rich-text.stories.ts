export default {
  title: 'Scopes|Rich Text',
};

export const base = () => ({
  template: `
    <div class="bg-solid-white" style="padding:2rem;">

      <!-- Add Rich Text scope class --> 
      <div class="wes-random-component__message wes-rich-text-scope">

        <!-- Output from Sitecore RTE -->
        <p>abc <strong>def </strong>ghi</p>
        <p><em>jkl </em>mno <span style="text-decoration: underline;">pqr</span></p>
        <ol class="numbered">
          <li>abc</li>
          <li>def</li>
          <li>ghi</li>
        </ol>
        <ul class="bulleted">
          <li>abc</li>
          <li>def</li>
          <li>ghi</li>
        </ul>
        <ul class="ticked">
          <li>abc</li>
          <li>def</li>
          <li>ghi</li>
        </ul>
      
      </div>

    </div>
  `,
});