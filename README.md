# InputAdvanced Lightning Flow Component

This component is a general input component, that allows you more customizations - especially in the layouts section - than the Salesforce standard components.

## Input / Output variables

- masterLabel: The name of your component. Should be unique.
- type: The type e.g. text, checkbox, Password. See here: https://developer.salesforce.com/docs/component-library/bundle/lightning-input/example
- required: If it must be filled out
- placeholder: Placeholder Text for text fields
- readonly: If true, then displayed as readOnly
- disabled: If true, then disabled
- pattern: An input pattern
- help: Helptext to display
- value: the value inserted or the default value.
- focused: If set to true, then the focus is set to this component onload.
- width: The width of your component
- patternMismatch: Error message if the pattern is not valid
- valueMissing: Message that is displayed, if the value is missing before Next transition of Flow
- requiredMessage: Message that is displayed, if you click on Next and no value has been set
