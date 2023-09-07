import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Cart } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';


const CartScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const cartItems = cart;

  return (
    <div>CartScreen</div>
  )
}

export default CartScreen