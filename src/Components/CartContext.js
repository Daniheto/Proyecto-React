import {createContext} from React

export const contexto = createContext()
const {Provider} = contexto

const MiProvider = ({children})=> {

    const valorDelContexto = []

    return(
    <Provider value={valorDelContexto}>
        {children}
    </Provider>
    
    )
}
