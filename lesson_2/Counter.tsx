
class Counter extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.start | 0,
			max: this.props.max | 0
		}
	}

	inc = () => this.setState(
		{ value: Math.min(this.state.value++, this.state.max) }
		);

	dec = () => this.setState(
		{ value: Math.max(this.state.value--, 0) }
		);

	render() {
		const { start, max } = this.props;
		const { value } = this.state;
		return (
			<>
				<input value={ value } />
				<button onClick={ this.inc }/>
				<button onClick={ this.dec }/>
			</>
			);
	}
}

interface Props {
	start?: number,
	max?: number
}
interface State {
	value: number
}