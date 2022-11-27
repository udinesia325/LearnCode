import { Col,Card } from "react-bootstrap"
import { useRouter } from "next/router";
export default function MateriesItem({ head, title,href }) {
 const router = useRouter()  
  const handleClick = () => {
    router.push(href)
  }
  return (
    <Col xs={12} md={6}>
      <Card className="border-start border-top-0 border-bottom-0 border-end-0 border-info border-3 shadow-sm" onClick={handleClick}>
        <Card.Body>
          <Card.Title><h3>{head}</h3></Card.Title>
          <Card.Text>{title}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )   
}

