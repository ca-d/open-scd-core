import { html, LitElement } from 'lit';
import { state } from 'lit/decorators.js';

import '@material/mwc-dialog';

import { isEditRequest, WizardRequest } from './foundation.js';

class XMLEditWizard extends LitElement {
  @state()
  request!: WizardRequest;

  render() {
    return html`<mwc-dialog>
      <pre>
${isEditRequest(this.request)
          ? this.request.element.outerHTML
          : `<${this.request.tagName}></${this.request.tagName}>`}
</pre
      >
    </mwc-dialog>`;
  }
}

export default {
  canHandle(_request: WizardRequest): boolean {
    return true;
  },

  customElement: XMLEditWizard,
};
