import PropTypes from 'prop-types';
import {
  PRODUCT_ID,
  PRODUCT_NAME,
  PRODUCT_PRICE,
  PRODUCT_QUANTITY,
} from '../utils/constants';

const MainView = ({items, removeItem}) => {
	const renderItems = () =>
		items.map((item, position) => {
			return (
				<div
					className="product-view-container"
					key={position}>
					<span className="product-id">{item[PRODUCT_ID]}</span>
					<span className="product-name">{item[PRODUCT_NAME]}</span>
					<span className="product-price">{item[PRODUCT_PRICE]}</span>
					<span className="product-quantity">{item[PRODUCT_QUANTITY]}</span>
					<button
						className="remove-button"
						onClick={() => {removeItem(item.uuid)}}
					>Remove</button>
				</div>
			);
		});
		
	return (
		<div className="main-view-area">{renderItems()}</div>
	);
};

MainView.propTypes = {
  items: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default MainView;
