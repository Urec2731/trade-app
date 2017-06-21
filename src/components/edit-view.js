import { Component } from 'react';
import PropTypes from 'prop-types';
import { isNull } from 'lodash';
import InputValue from './input-value';
import {
  PRODUCT_ID,
  PRODUCT_NAME,
  PRODUCT_PRICE,
  PRODUCT_QUANTITY,
} from '../utils/constants';

class EditView extends Component {
	constructor (props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	}
	
	onChange (productProperty, {value}) {
		this.props.onEdit(productProperty, value);
	}
	
	render() {
		if (isNull(this.props.editItem)) {
			return <div/>;
		}
		return (
			<div className='edit-form-container'>
				<InputValue 
					className={PRODUCT_ID}
					role="edit"
					value={this.props.editItem[PRODUCT_ID]}
					propertyKey={PRODUCT_ID}
					onChange={this.onChange}/>
				<InputValue 
					className={PRODUCT_NAME}
					role="edit"
					value={this.props.editItem[PRODUCT_NAME]}
					propertyKey={PRODUCT_NAME}
					onChange={this.onChange}/>
				<InputValue 
					className={PRODUCT_PRICE}
					role="edit"
					value={this.props.editItem[PRODUCT_PRICE]}
					propertyKey={PRODUCT_PRICE}
					onChange={this.onChange}/>
				<InputValue 
					className={PRODUCT_QUANTITY}
					role="edit"
					value={this.props.editItem[PRODUCT_QUANTITY]}
					propertyKey={PRODUCT_QUANTITY}
					onChange={this.onChange}/>
			</div>
		);
	}
}

EditView.propTypes = {
  onEdit: PropTypes.func.isRequired,
  editItem: PropTypes.object,
};

export default EditView;
