import react from "react"
import ItemsContainer from "./ItemsContainer";
import { Link } from "react-router-dom";


function SellPage({ displayedItems, handleSearchSubmit, selectUser, handleSubmitEdit }){

  const buttonText= "Edit";

  const userSellItems = displayedItems.filter(item => item.itemCreator === selectUser)

  console.log(userSellItems);

  return(
    <div>
      <h1>SellPage
      </h1>
      <ItemsContainer 
        displayedItems={userSellItems} 
        buttonText={buttonText}
        handleClick={handleSubmitEdit}
        selectUser={selectUser}
      />
    </div>
  )
}

export default SellPage;