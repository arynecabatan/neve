/* global wp */
/* jshint esversion: 6 */
import PropTypes from 'prop-types'
import classnames from 'classnames'

const {
  Component,
  Fragment
} = wp.element

const {
  Tooltip,
  IconButton,
  Button
} = wp.components

class RadioIcons extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 'none'
    }

    this.getButtons = this.getButtons.bind(this)
  }

  render() {
    return (
      <div className='neve-radio-icons'>
        {this.getButtons()}
      </div>
    )
  }

  getButtons() {
    const {options} = this.props

    const buttons = Object.keys(options).map((type, index) => {
      return (
        <Fragment>
          {
            options[type].icon === 'text'
              ? <Button
                key={index}
                className={classnames(
                  {active: this.props.value === type})}
                onClick={() => {
                  this.props.onChange(type)
                }}>
                {options[type].tooltip}
              </Button>
              :
              <Tooltip text={options[type].tooltip} key={index}>
                <IconButton
                  aria-label={options[type].tooltip}
                  className={classnames(
                    {active: this.props.value === type})}
                  icon={options[type].icon}
                  onClick={() => {
                    this.props.onChange(type)
                  }}
                />
              </Tooltip>
          }
        </Fragment>
      )
    })

    return buttons
  }
}

RadioIcons.propTypes = {
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default RadioIcons
