import PropTypes from 'prop-types';
import {
  PRODUCT_ID,
  PRODUCT_NAME,
  PRODUCT_PRICE,
  PRODUCT_QUANTITY,
} from '../utils/constants';

const MainView = ({items, removeItem, editItem}) => {
	const renderItems = () =>
		items.map((item, position) => {
			return (
				<div
					className="product-view-container"
					onClick={(e) => {editItem(item, e)}}
					key={position}>
					<span className="product-id">{item[PRODUCT_ID]}</span>
					<span className="product-name">{item[PRODUCT_NAME]}</span>
					<span className="product-price">{item[PRODUCT_PRICE]}</span>
					<span className="product-quantity">{item[PRODUCT_QUANTITY]}</span>
					<button
						className="remove-button"
						onClick={(e) => {removeItem(item.uuid, e)}}
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
  editItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default MainView;
