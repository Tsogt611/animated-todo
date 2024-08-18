import { extendTheme } from "native-base";

const config = {
    useSystemColorMode: false,
    initialColorMode: 'light'
}

const colors= {
    primary:{
        100: '#EEF2F6'
    }
}

export default extendTheme({config,colors})