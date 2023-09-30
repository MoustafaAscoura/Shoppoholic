import { Button } from "react-bootstrap";

export default function AddCartButton (props) {
    const {className:classes} = props
    return <Button className={classes + " primary w-100"}
     onClick={e => e.target.innerText = e.target.classList.toggle('primary')? "Add to Cart":"Remove from Cart"}
     variant="secondary">Add to Cart</Button>
}
