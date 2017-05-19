import React from 'react';

const BlockHr = ({ id, blockOptions, onPropChange }) => {
	return (
		<table
			width="550"
			cellPadding="0"
			cellSpacing="0"
			role="presentation"
		>
			<tbody>
				<tr>
					<td
					style={blockOptions.elements[0]}
					>
					<hr />
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BlockHr;
