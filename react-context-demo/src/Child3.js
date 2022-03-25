import { LocaleContext } from "./LocaleContext";
import React,{useContext} from 'react';

function Child3(){
    const locale = useContext(LocaleContext);
    return <h3>Locale Context is {locale}</h3>;
}
export default Child3;