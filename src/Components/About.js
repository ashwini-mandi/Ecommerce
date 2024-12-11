import { Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <Col xs={6} md={4}>
      <Image
        src="https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg"
        roundedCircle
      />
    </Col>
  );
};

export default About;
