function getNum() {
	return  Math.floor(Math.random() * 10) + 1; 
}

class NumPicker extends React.Component {
	render() {
		const num = getNum()
		let msg;

		if(num === 7) {
			msg = <div>
				<h2>You win!</h2>
				<img src="https://giphy.com/gifs/ufc-290-ufc-ufc290-vozWNU9Gcs49G7UVV1"/>
			</div>
		} else {
			msg = <p>You lose!</p>
		}
		return (
			<div>
				<h1>Your number is {num}</h1>
				{msg}
			</div>
		
		)
	}
}

ReactDOM.render(<NumPicker />, document.getElementById('root'))