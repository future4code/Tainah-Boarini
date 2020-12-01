import React from "react"
import { useProtectPage } from "../../hooks/useProtectPage"

const FeedPage = () => {
    useProtectPage()

    return (
        <div>
            FeedPage
        </div>
    )
}
export default FeedPage;