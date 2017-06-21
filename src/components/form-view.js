import { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import InputValue from './input-value';
import {
  PRODUCT_ID,
  PRODUCT_NAME,
  PRODUCT_PRICE,
  PRODUCT_QUANTITY,
} from '../utils/constants';

const initialState = {
	[PRODUCT_ID]: '',
  [PRODUCT_NAME]: '',
  [PRODUCT_PRICE]: '',
  [PRODUCT_QUANTITY]: '',
};


class FormView extends Component {
	constructor (props) {
		super(props);
		this.state = initialState;
		
		this.clickHandler = this.clickHandler.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	
	clickHandler () {
		this.props.addItem({...this.state, uuid: uuid.v4()});
		this.setState(initialState);
	}
	
	onChange (productProperty, {value}) {
		this.setState({[productProperty]: value});
	}
	
	render() {
		return (
			<div className='input-form-container'>
				<InputValue 
					className={PRODUCT_ID}
					value={this.state[PRODUCT_ID]}
					propertyKey={PRODUCT_ID}
					onChange={this.onChange}/>
				<InputValue 
					className={PRODUCT_NAME}
					value={this.state[PRODUCT_NAME]}
					propertyKey={PRODUCT_NAME}
					onChange={this.onChange}/>
				<InputValue 
					className={PRODUCT_PRICE}
					value={this.state[PRODUCT_PRICE]}
					propertyKey={PRODUCT_PRICE}
					onChange={this.onChange}/>
				<InputValue 
					className={PRODUCT_QUANTITY}
					value={this.state[PRODUCT_QUANTITY]}
					propertyKey={PRODUCT_QUANTITY}
					onChange={this.onChange}/>
				<button
					className="add-button"
					onClick={this.clickHandler}
				>ADD</button>
			</div>
		);
	}
}

FormView.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default FormView;
