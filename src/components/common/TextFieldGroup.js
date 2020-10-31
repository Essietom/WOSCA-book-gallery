import React from 'react'
import PropTypes from 'prop-types'

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled,
  tabindex,
  required,
}) => (
  <div>
    <div className="form-group">
      {label && <label htmlFor={label}>{label}</label>}
      {type === 'number' ? (
        <input
          type={type}
          // className={classnames('form-control', { 'is-invalid': error })}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          tabIndex={tabindex}
          required={required}
          onKeyDown={(evt) =>
            ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()
          }
        />
      ) : (
        <input
          type={type}
          // className={classnames('form-control', { 'is-invalid': error })}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          tabIndex={tabindex}
          required={required}
        />
      )}
      {info && <small className="form-text text-warning">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  </div>
)

TextFieldGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.string,
  tabindex: PropTypes.string,
}

TextFieldGroup.defaultProps = {
  type: 'text',
}

export default TextFieldGroup
