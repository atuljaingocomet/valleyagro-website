import PropTypes from "prop-types";
import { ThankYouWrapper } from "./styles";

const Thankyou = () => {
  return (
    <ThankYouWrapper>
      <div className="sub-head">
        <div class="success-animation">
          <svg
            class="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              class="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              class="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>
      </div>
    </ThankYouWrapper>
  );
};

Thankyou.propTypes = {
  isDownloadForm: PropTypes.bool,
  isForContactUsPage: PropTypes.bool,
  showMessage: PropTypes.bool,
  email: PropTypes.string,
  phone: PropTypes.string,
  response: PropTypes.objectOf(PropTypes.string),
  getMessageOnFormSubmit: PropTypes.func,
};

Thankyou.defaultProps = {
  isDownloadForm: false,
  isForContactUsPage: false,
  showMessage: true,
  email: "",
  phone: "",
  response: {},
  getMessageOnFormSubmit: () => {},
};

export default Thankyou;
