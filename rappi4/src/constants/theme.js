import {createTheme}  from '@material-ui/core/styles'
import { primaryColor, secundaryColor, tertiaryColor, textColorRestarauntName} from './colors'

const theme = createTheme ({
    typography: {
        button: {
          textTransform: 'none'
        }
    },
    palette: {
        primary: {
            main: primaryColor,
            contrastText: '#000000',
        },
        secundary: {
            main: "b8b8b8",
            contrastText: secundaryColor
        },
        tertiary: {
            main: tertiaryColor,
            contrastText: '#000000'
        },
        text: {
            primary: '#000000'
        },
        quartenary: {
            main: textColorRestarauntName,
            contrastText: '#e97562'
        }
    }
})

export default theme