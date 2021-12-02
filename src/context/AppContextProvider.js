import { createContext, useContext, useState } from "react";
import ReactModal from 'react-modal';
import { zIndex03 } from "../constants/zIndexs";
import TextLg from "../styled-components/TextLg";

export const AppContext = createContext({});

const AppContextProvider = ({children}) => {
    const [openError, setOpenError] = useState(false);
    return (
        <AppContext.Provider 
            value={{
                openError,
                setOpenError
            }}
        >
            {children}
            <ReactModal 
                isOpen={openError}
                contentLabel="Error"
                onRequestClose={() => setOpenError(false)}
                style={{
                    overlay: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: `${zIndex03}`,
                    },
                    content: {
                        position: 'relative',
                        width: "calc(100% - 120px)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "fit-content",
                        inset: 0,
                    }
                }}
            >
                <TextLg style={{margin:"10% 0 10%"}}>OopS.</TextLg>
                <TextLg>ERROR</TextLg>
                <TextLg style={{marginBottom:"10%"}}>404</TextLg>
                <TextLg style={{marginBottom:"10%", color:"#FF5656"}}>x _ X</TextLg>
            </ReactModal>
        </AppContext.Provider>
    )
}

export default AppContextProvider;