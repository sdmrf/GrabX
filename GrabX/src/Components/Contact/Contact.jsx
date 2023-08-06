import "./Contact.scss"

const Contact = () => {
  return (
    <div className="Contact">
    <div className="Wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="Email">
            <input type="text" placeholder="Enter Your's E-mail..." />
            <button>JOIN US</button>
        </div>
    </div>
    </div>
  )
}

export default Contact