import { Component } from 'react';
import FormView from './form-view';
import MainView from './main-view';

const initialState = {
	items: [],
};

class App extends Component {
	constructor (props) {
		super(props);
		this.state = initialState;
		
		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}
	
	addItem (item) {
		this.setState({items: [...this.state.items, item]});
	}
	
	removeItem (removedUuid) {
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
						removeItem={this.removeItem}/>
				</div>
			</div>
		);
	}
}

export default App;
