import { createContext, useState } from "react";

export const BannerContext = createContext({
    banner: {
        quote: "",
        title: ""
    },
    setBanner: () => {}
});

export const BannerProvider = ({children}) => {
    const [banner, setBanner] = useState({
        quote: "Sua frase aqui",
        title: "Seu titúlo"
    });
    return (
       <BannerContext.Provider value={{banner, setBanner}}>
            {children}
       </BannerContext.Provider>
    )
}