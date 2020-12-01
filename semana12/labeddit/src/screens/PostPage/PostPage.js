import React from "react"
import { useProtectPage } from "../../hooks/useProtectPage"

const PostPage = () => {
    useProtectPage()

    return (
        <div>
            PostPage
        </div>
    )
}
export default PostPage;