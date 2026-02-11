function Card(props) {
    return (
        <>
        <div>{props.iconClassName}</div>
        <div><h5>{props.cardHeader}</h5></div>
        <div><p>{props.cardParagraph}</p></div>
        </>
    )
}

export default Card;