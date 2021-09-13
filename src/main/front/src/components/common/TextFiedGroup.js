import PropTypes from "prop-types";

const TextFieldGroup = ({
    type
}) => {
    return (
        <div className="col-md-6">
            <label for="validationCustom03" className="form-label">City</label>
            <input type={type} className="form-control" id="validationCustom03" required />
            <div className="invalid-feedback">
                Please provide a valid city.
            </div>
        </div>
    );
};

TextFieldGroup.propTypes = {
    type: PropTypes.string.isRequired
  };

TextFieldGroup.defaultProps = {
    type: "text"
  };

export default TextFieldGroup;