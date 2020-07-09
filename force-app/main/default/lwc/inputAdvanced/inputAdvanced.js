import { LightningElement, api, track } from 'lwc';
import { FlowAttributeChangeEvent } from "lightning/flowSupport";

/* eslint-disable no-alert */
/* eslint-disable no-console */

export default class InputAdvanced extends LightningElement {
    @api masterLabel;
    @api type;
    @api required;
    @api placeholder;
    @api readonly;
    @api disabled;
    @api pattern;
    @api help;
    @api value;
    @api focused;

    // Stylings
    @api width;

    // Messages
    @api patternMismatch;
    @api valueMissing;
    @api requiredMessage;

	@api
	validate() {
		//If the component is invalid, return the isValid parameter as false and return an error message.
        let errorMessage = "Please enter some valid input. Input is not optional.";
        
        if (this.requiredMessage) {
            errorMessage = this.requiredMessage;
        }

		if (this.required === true && !this.value) {
			return {
				isValid: false,
				errorMessage: errorMessage
			};
		}

		return { isValid: true };
    }

    renderedCallback() {
        if (this.template.querySelector('[data-id="' + this.masterLabel + '"]') != null && this.focused) {
            this.template.querySelector('[data-id="' + this.masterLabel + '"]').focus();
        }
    }

    handleChange(event) {
        this.value = event.detail.value;
        const attributeChangeEvent = new FlowAttributeChangeEvent(
			"value",
			this.value
		);
		this.dispatchEvent(attributeChangeEvent);
    }
    
    get inputStyle() {
		if (this.width) {
			return 'width: ' + this.width + '%';
		} 
		return '';	
	}

}