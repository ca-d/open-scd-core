export interface WizardRequestBase {
  subWizard?: boolean;
}

export interface CreateRequest extends WizardRequestBase {
  parent: Element;
  tagName: string;
}

export interface EditRequest extends WizardRequestBase {
  element: Element;
}

export type WizardRequest = CreateRequest | EditRequest;

export function isCreateRequest(
  wizard: WizardRequest
): wizard is CreateRequest {
  return 'parent' in wizard;
}

export function isEditRequest(wizard: WizardRequest): wizard is EditRequest {
  return 'element' in wizard;
}

export type WizardRequestEvent = CustomEvent<WizardRequest>;

export function newWizardRequestEvent(
  wizard: WizardRequest
): WizardRequestEvent {
  return new CustomEvent<WizardRequest>('oscd-wizard-request', {
    composed: true,
    bubbles: true,
    detail: wizard,
  });
}

declare global {
  interface ElementEventMap {
    ['oscd-wizard-request']: WizardRequestEvent;
  }
}
