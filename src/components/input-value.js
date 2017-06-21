import PropTypes from 'prop-types';
import {LABELS} from '../utils/constants';

const InputValue = ({value, onChange, propertyKey, className, role}) => {

	return (
		<span className={`${className.toLowerCase()}_${role}_container`}>
			<label>{LABELS[propertyKey] + ':'}</label>
			<input
				type="text"
				value={value}
				onChange={e => onChange(propertyKey, e.target)}/>
		</span>
	);
};

InputValue.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  propertyKey: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default InputValue;
