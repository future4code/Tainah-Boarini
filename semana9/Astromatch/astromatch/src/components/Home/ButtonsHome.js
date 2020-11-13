import React, { useState } from "react";
import {Button} from "../styled";
import buttonLike from "../../img/like.png"
import clickLike from "../../img/clickLike.png";

import buttonDislike from "../../img/discard.png"
import clickDeslike from "../../img/clickDiscard.png";


function Buttons(props){
    
    const likeButton = props.yes ? (clickLike) : (buttonLike)
    const deslikeButton = props.no ? (clickDeslike) : (buttonDislike)

    return (
        <Footer>
            <Button no = {() => mouseOverIcon()} onClick={() => likeMatch(false) }/>
            <Button yes = {() => mouseOverIcon()} onClick={() => likeMatch(true)}/>
        </Footer>
        
    )

    
}

export default Buttons;