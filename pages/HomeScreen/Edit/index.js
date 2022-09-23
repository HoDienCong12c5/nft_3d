import React, { Component } from 'react'

const slider = React.createRef()
const container = React.createRef()
const isTouchDevice = typeof window !== 'undefined' ? 'ontouchstart' in document?.documentElement : null

export default class CustomButton extends Component {
  state = {};
    
  componentDidMount () {
    if (isTouchDevice) {
      document.addEventListener('touchmove', this.onDrag)
      document.addEventListener('touchend', this.stopDrag)
    } else {
      document.addEventListener('mousemove', this.onDrag)
      document.addEventListener('mouseup', this.stopDrag)
    }
    this.containerWidth = container.current.clientWidth - 50
  }
  componentWillUnmount () {
    this.unmounted = true
  }

  onDrag = (e) => {
    if (this.unmounted || this.state.unlocked) return
    if (this.isDragging) {
      if (isTouchDevice) {
        this.sliderLeft = Math.min(
          Math.max(0, e.touches[0].clientX - this.startX),
          this.containerWidth
        )
      } else {
        const slider = window.document.getElementsByClassName('rsbcSliderCircle')
        this.sliderLeft = Math.min(
          Math.max(0, e.clientX - this.startX),
          this.containerWidth
        )
      }
      this.updateSliderStyle()
    }
  };

  updateSliderStyle = () => {
    if (this.unmounted || this.state.unlocked) return
    slider.current.style.left = this.sliderLeft + 50 + 'px'
  };

  stopDrag = () => {
    if (this.unmounted || this.state.unlocked) return
    if (this.isDragging) {
      this.isDragging = false
      if (this.sliderLeft > this.containerWidth * 0.9) {
        // this.sliderLeft = this.containerWidth
        if (this.props.onSuccess) {
          this.props.onSuccess()
          // this.onSuccess()
        }
      } else {
        // this.sliderLeft = 0
        if (this.props.onFailure) {
        //   this.props.onFailure()
        }
      }
      this.updateSliderStyle()
    }
  };

  startDrag = (e) => {
    if (this.unmounted || this.state.unlocked || this.props.disabled) return
    this.isDragging = true
    if (isTouchDevice) {
    //   this.startX = e.touches[0].clientX
    } else {
      this.startX = e.clientX
    }
  };

  onSuccess = () => {
    // container.current.style.width = container.current.clientWidth + 'px'
    this.setState({
      unlocked: true
    })
  };

  getText = () => {
    return this.state.unlocked
      ? this.props.text_unlocked
      : this.props.text || ''
  };

//   reset = () => {
//     if (this.unmounted) return
//     this.setState({ unlocked: false }, () => {
//       this.sliderLeft = 0
//       this.updateSliderStyle()
//     })
//   };
    finished=()=>{
        
    }
  render () {
    const { txtName = '', disabled = false } = this.props
    return (
      <div className='ReactSwipeButton'>
        <div
          className={
            'rsbContainer ' +
            (this.state.unlocked ? 'rsbContainerUnlocked' : '')
          }
          style={{ opacity: disabled ? 0.5 : 1 }}
          ref={container}
        >
          <div
            className='rsbcSlider'
            ref={slider}
            onMouseDown={this.startDrag}
            style={{ background: this.props.color }}
            onTouchStart={this.startDrag}
          >

            <span
              className='rsbcSliderCircle'
            />
          </div>
          <span className={`rsbcSliderText ${txtName}`}>{this.getText()}</span>
        </div>
      </div>
    )
  }
}
