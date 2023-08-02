function Box(props) {
    return (
        <div className="privilige-box">
            <img alt="" loading="lazy" width="80" height="80" src={props.image} />
            <h1>{props.title}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. </p>
        </div>
    )
}

export default Box;