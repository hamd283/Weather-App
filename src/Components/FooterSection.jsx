const FooterSection = ({title, links = []}) => {
    return (
        <div className="col-3">
            <h3>{title}</h3>
            <ul className="list-unstyled">
                {links.map(link => <li><a href="#">{link}</a></li>)}
            </ul>
        </div>
    );
}

export default FooterSection;