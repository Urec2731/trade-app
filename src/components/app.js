import { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import FormView from './form-view';
import MainView from './main-view';
import EditView from './edit-view';

const initialState = {
	items: [],
	editItem: null,
	showModal: false,
};

class App extends Component {
	constructor (props) {
		super(props);
		this.state = initialState;
		
		this.onEdit = this.onEdit.bind(this);
		this.addItem = this.addItem.bind(this);
		this.editItem = this.editItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.saveChanges = this.saveChanges.bind(this);
	}
	
	closeModal() {
    this.setState({showModal: false, editItem: null});
  }
	
	addItem (item) {
		this.setState({items: [...this.state.items, item]});
	}
	
	editItem (item, e) {
		e.stopPropagation();
		this.setState({editItem: item, showModal: true});
	}
	
	saveChanges () {
		const {editItem, items} = this.state;
		
		this.setState({items: items.map(
			item => {
				if (item.uuid === editItem.uuid) {
					return editItem;
				}
				return item;
			})
		});
		this.closeModal();
	}
	
	onEdit (productProperty, value) {
		const {editItem} = this.state;
		
		this.setState({editItem: {...editItem, [productProperty]: value}});
	}
	
	removeItem (removedUuid, e) {
		e.stopPropagation();
		this.setState({
			items: this.state.items.filter(({uuid}) => uuid !== removedUuid)
		});
	}

	render() {
		return (
			<div className='app-container'>
				<div className='main-area'>				
					<FormView addItem={this.addItem}/>
					<MainView
						items={this.state.items}
						editItem={this.editItem}
						removeItem={this.removeItem}/>
				</div>
				
				<Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit product information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditView onEdit={this.onEdit} editItem={this.state.editItem}/>
					</Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal} bsSize="large">Close</Button>
						<Button
							bsStyle="primary"
							bsSize="large"
							onClick={this.saveChanges}
						>
							Save changes
						</Button>
          </Modal.Footer>
        </Modal>
			</div>
		);
	}
}

export default App;
