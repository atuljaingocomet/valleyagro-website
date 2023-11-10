/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import { Component } from "react";
import PropTypes from "prop-types";
import { HeaderHolder, FormHolder, H3, Label, Input } from "./styles";
import Thankyou from "./Thankyou";

export default class FormSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      designation: "",
      emailError: "",
      currentScreen: "form",
      phoneError: false,
      nameError: false,
      response: null,
      showMessage: false,
      showMessageForSlot: false,
      isPricingPage: false,
      egaPlan: "",
      egaPlanType: "",
      isForContactUsPage: false,
      isEgaInfluenced: false,
      isFromPortCongestion: false,
      isFromContainerTracking: false,
      carrierName: "",
      openCalendly: false,
      calendlyEventScheduled: false,
      countryCode: "91",
      isLoading: false,
      shouldHighlightButton: true,
    };
  }

  formHeading = () => {
    const { currentScreen } = this.state;
    if (currentScreen === "thankyou")
      return <H3>Thanks for submitting your information.</H3>;
    return <H3>Please fill the details</H3>;
  };

  handleChange = async (event) => {
    const isCheckbox = event.target.type === "checkbox";
    const errors = {};

    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    if (["name", "phone"].includes(fieldName)) {
      errors[`${fieldName}Error`] = !fieldValue;
    } else if (fieldName === "email") {
      errors.emailError = "";
    }

    await this.setState({
      [event.target.name]: isCheckbox ? event.target.checked : fieldValue,
      ...errors,
    });
  };

  handleFocus = (event) => {
    event.preventDefault();
    event.persist();
  };

  hideMessage = () => {
    this.setState({
      showMessage: false,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    if (email) {
      this.setState({
        currentScreen: "thankyou",
      });
    } else {
      this.setState({
        emailError: "Please enter email",
      });
    }
  };

  render() {
    const {
      name,
      email,
      emailError,
      phoneError,
      nameError,
      phone,
      currentScreen,
    } = this.state;

    return (
      <FormHolder>
        <HeaderHolder>{this.formHeading()}</HeaderHolder>
        {currentScreen === "form" && (
          <form className="contact-us-form" onSubmit={this.handleSubmit}>
            <div>
              <Label>
                Name <span>*</span>
              </Label>
              <Input
                data-hj-allow
                type="text"
                name="name"
                placeholder="John Doe"
                value={name}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                valid={!nameError}
              />
              {nameError && (
                <div className="error">Please let us know your name</div>
              )}
            </div>
            <div>
              <Label>
                Contact No. <span>*</span>
              </Label>
              <div className="input-container">
                <Input
                  data-hj-allow
                  type="number"
                  name="phone"
                  className="phone"
                  placeholder="Mobile/Phone number"
                  pattern="[0-9]*"
                  value={phone}
                  valid={!phoneError}
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                />
              </div>
              {phoneError && (
                <div className="error">Please include your contact number</div>
              )}
            </div>
            <div>
              <Label>
                Email <span>*</span>
              </Label>
              <Input
                data-hj-allow
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                valid={!emailError}
                placeholder="john@company.com"
              />
              {!!emailError && <div className="error">{emailError}</div>}
            </div>
            <div />
            <div className="submit-button-container">
              <button type="submit" id="contact-form-submit">
                Submit
              </button>
            </div>
          </form>
        )}

        {currentScreen === "thankyou" && <Thankyou />}
      </FormHolder>
    );
  }
}

FormSection.propTypes = {
  isDownloadForm: PropTypes.bool,
  isCaseStudyForm: PropTypes.bool,
  context: PropTypes.string,
  product: PropTypes.string,
};

FormSection.defaultProps = {
  isDownloadForm: false,
  isCaseStudyForm: false,
  context: "",
  product: null,
};
