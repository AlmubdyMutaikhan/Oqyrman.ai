import './Slider.scss';

const Slider = ({style, title, list}) => {
    return (
        <div style={style}  className="slider-container">
            <div className="silder__headline">
                {title}
            </div>
            <div className="slider__carousel">
                {list}
            </div>
        </div>
    )
}

export default Slider;