import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

export default function Login(){

    const navigate = useNavigate()

    const handleLogin = () => {
        localStorage.setItem('auth', 'true');
        navigate('/perfil/usuario123')
        // navega hasta perfil y manda el param 'usuario123'
    }

    return (
        <Container className="mt-5" style={{maxWidth: 400, minWidth:300}}>
            <h2>Iniciar sesion</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <Button variant="primary" onClick={handleLogin}>Entrar</Button>
            </Form>
        </Container>
    )


}

