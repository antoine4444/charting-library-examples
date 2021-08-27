/* tslint:disable */
import * as React from 'react';
import './App.css';
import { TVChartContainer } from './components/TVChartContainer/index';
import { IJsonModel, Layout, Model, TabNode } from 'flexlayout-react';

export const json = {
	global: {
	  tabEnableClose: true,
	  tabEnableFloat: true,
	  tabEnableRename: true,
	  tabSetEnableMaximize: true
	},
	layout: {
	  type: "row",
	  children: [
		{
			type: "tabset",
			weight: 70,
			children: [{
				type: "tab",
				component: <TVChartContainer />,
				name: 'TV',
				id:'TV'
			  }]
		  },
		  {
			type: "tabset",
			weight: 30,
			children: [{
				type: "tab",
				component: "Another div",
				name: "Another div"
			  }]
		  }
	  ]
	}
  } as IJsonModel;

  const factory = (node: TabNode) => node.getComponent()
 class App extends React.Component {
	render() {
		return (
			<div className={ 'App' }>
				<Layout 
					model={Model.fromJson(json)} 
					factory={factory}
					icons={{
						close: "(close)",
						maximize: "(maximize)",
						restore: "(restore)",
						popout: "(popout)",
						more: "(more)"
					}}
				/>
			</div>
		);
	}
}

export default App;
