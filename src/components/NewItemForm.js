import react from "react"

function NewItemForm({ buttonText }){
  return(
    <div className="item-card">
      <img></img>
      <span></span>
      <h3>Sell New Item</h3>
      <p></p>
      <button>{buttonText}</button>
    </div>
  )
}

export default NewItemForm;