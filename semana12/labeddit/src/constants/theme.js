import { blue } from "@material-ui/core/colors"
import {createMuiTheme} from "@material-ui/core/styles"
import {primaryColor} from "./colors"

const theme = createMuiTheme({
    pallete: {
        primary:{
            main: primaryColor,
            contratText: blue
        }
    }
})

export default theme