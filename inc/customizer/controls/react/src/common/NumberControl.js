import PropTypes from 'prop-types';
import SizingControl from '../common/Sizing.js';

const { __ } = wp.i18n;
const {
	ButtonGroup,
	Button
} = wp.components;
const { Component } = wp.element;

class NumberControl extends Component {

	constructor(props) {
		super( props );
	}

	render() {
		let { label, units, value } = this.props;
		return (
				<div className="neve-number-control-wrap">
					<div className="header">
						{label && <span className="customize-control-title">{label}</span>}
						{
							units && <div className="neve-units inline">
									{this.getButtons()}
							</div>
						}
					</div>
					<SizingControl
							noLinking
							noRange
							options={[{ 'value': value }]}
							onChange={( type, value ) => { this.props.onChange( value ); }}
							max={this.props.max || 100}
							min={this.props.min || 0}
							step={this.props.step || 1}
							defaults={this.props.default}
							onReset={() => {
								this.props.onReset();
							}}
					/>
				</div>
		);
	}

	getButtons() {
		let { units } = this.props;
		if ( !units ) return '';
		if( units.length === 1 ) {
			return <Button isDefault className="is-active is-single" disabled={true}>{units[0]}</Button>
		}
		let buttons = [],
				self = this;
		units.map( function(type) {
			buttons.push(
					<Button
							isDefault
							className={self.props.activeUnit === type ? 'is-active' : ''}
							onClick={() => {
								self.props.onUnitChange( type );
							}}
					>
						{type}
					</Button> );
		} );
		return <ButtonGroup className="units"> {buttons} </ButtonGroup>;
	}
}

NumberControl.propTypes = {
	label: PropTypes.string,
	value: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired,
	units: PropTypes.array || PropTypes.bool,
	onUnitChange: PropTypes.func,
	activeUnit: PropTypes.string,
	default: PropTypes.number,
	max: PropTypes.number,
	min: PropTypes.number,
	step: PropTypes.number,
};

export default NumberControl;