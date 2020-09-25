import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./donateToKongtsey.css";
import qr_code from "./QR-code.jpg";
class DonateToKongtsey extends React.Component {
  render() {
    return (
      <Container className={"donate_to_kongtsey_parent_container"}>
        <Row className={"donate_to_kongtsey_conten_div"}>
          <Col md={6} lg={5} xs={12} className={"donate_to_kongtsey_desc"}>
            <h3>Donate to Kongtsey</h3>
            <hr />
            <p style={{ textAlign: "justify" }}>
              The team at Kongtsey consists of just two brothers working to give you guys the best experience possible. But we need your help! Server costs, hosting costs and other costs incurred
              while bringing this product to you is limiting us to produce more features. Your donation, whatever the amount, would not only help to keep the website running but also allow us to bring
              you newer and better features.
            </p>
            <br />
            <Row style={{ padding: "0px 20px" }}>
              <Col md={12} lg={12} xs={12}>
                <u>
                  <h5 style={{ textAlign: "center" }}>Bank Details</h5>
                </u>
              </Col>
              <Col md={6}>
                <img src={qr_code} alt='qr code' className={"qr_code_donate"} />
              </Col>
              <Col md={6}>
                <br />
                <span style={{ color: "#0d72af" }}>Account Number</span> <br /> <b className={"account_number_info"}>202-530-563</b>
                <br />
                <br />
                <span style={{ color: "#0d72af" }}> Account Name </span> <br />
                <b className={"account_number_info"}>Phuntsho Norbu</b>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DonateToKongtsey;
