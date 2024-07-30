import FooterSection from "./FooterSection";
import Row from "./Row";

const Footer = () => {
    return (
        <div className="footer">
            <Row>
                <FooterSection title={"Company"} links={["About Us", "Terms", "Services"]} />
                <FooterSection title={"Company"} links={["About Us", "Terms", "Services"]} />
                <FooterSection title={"Company"} links={["About Us", "Terms", "Services"]} />
                <FooterSection title={"Company"} links={["About Us", "Terms", "Services"]} />
            </Row>
        </div>
    );




}
export default Footer;