import React from "react";
import {List, ListItem, ListItemText } from "@material-ui/core";
import SimpleMenu from '../components/driver-list';


const TodoList = (props) => {
		console.log('SimpleMenu', SimpleMenu());
		return (
			<List>
				{props.items.map((todo, i) => {
					// let SimpleMenu;
					// if(props.showButton) {
					// 	SimpleMenu = props.buttonRender(i);
					// }
					// return (
					// 	<div>
					// 		{<ListItem key={i}>
					// 		<ListItemText>{todo.title} --- $ {todo.price} </ListItemText>
					// 		{SimpleMenu} </ListItem>}
					// 	</div>
						
					// );

					return (
						<div>
							<ListItem>
								<ListItemText>
									{todo.title} --- $ {todo.price}
								</ListItemText>
								<SimpleMenu selectItem={item => console.log('selectItem', item)} />
							</ListItem>
						</div>
					)
				})}
			</List>
		);
}

export default TodoList