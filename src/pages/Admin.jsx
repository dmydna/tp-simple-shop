import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Admin(){
    return (
        <Container fluid="xl" className="mt-4 px-4 px-sm-4 px-md-4 px-lg-5">
            <h2>Panel de Administracion</h2>
            <p>Acceso exclusivo para usuarios autentificados.</p>
        
            <br />
            <div >
                <Button variant="outline-primary" as={Link} to='manager' >Administrar Productos</Button>
            </div>
        </Container>
    )
}