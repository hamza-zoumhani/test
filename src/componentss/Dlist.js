import React from "react";
import {List, ListItem, ListItemText } from "@material-ui/core";
import SimpleMenu from '../components/driver-list';


const Dlist = (props) => {
		console.log('SimpleMenu', SimpleMenu());
		return (
			<List>
				{props.items.map((del, i) => {

					return (
						<div>
							<ListItem>
								<ListItemText>
									{del.address} --- $ {del.price}
								</ListItemText>
								<SimpleMenu selectItem={item => console.log('selectItem', item)} />
							</ListItem>
						</div>
					)
				})}
			</List>
		);
}

export default Dlist