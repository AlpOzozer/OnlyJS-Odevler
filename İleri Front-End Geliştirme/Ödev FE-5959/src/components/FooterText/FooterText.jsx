function FooterText() {
    const d = new Date();
    let year = d.getFullYear();
    return (

        <div className="footer-text">
            <p>React Tanıtım Websitesi Alp Özözer {year}</p>
        </div>
    )
}

export default FooterText;