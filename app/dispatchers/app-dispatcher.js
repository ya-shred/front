import { Dispatcher } from 'flux';
import  assign  from 'react/lib/Object.assign';

var AppDispatcher = assign(new Dispatcher(), {

	handleViewAction: function (action) {
		console.log('action: ', action);
		this.dispatch({
			source: "VIEW_ACTION",
			action: action
		})
	}
});


export default AppDispatcher;
