function Card(props) {
    

    return (
        <>
        <div id="card-div">
            <div id="icon-div" className="feature bg-primary bg-gradient text-white rounded-3 mb-4 d-inline-flex align-items-center justify-content-center"
             style={{ width: "4rem", height: "4rem" }}>
            <i className={`${props.iconClassName} fs-2`}></i>
            </div>
            <div><h5 className="card-h5">{props.cardHeader}</h5></div>
            <div><p className="card-p">{props.cardParagraph}</p></div>
        </div>
        </>
    )
}

export default Card;