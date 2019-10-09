import fr from './fr.json';
import en from './en.json';
import * as Localization from 'expo-localization';

const data  =  {fr,en};

export const setAppLang = () =>{
    let trad = Localization.local.split("-")[0];
    if(!data.hasOwnProperty(trad)){
        trad = "en";
    }
    return trad;
}

export const translate = (keyWord  = "NOT DEFINE")=>{
    let lang = setAppLang();
    return data[lang].hasOwnProperty(keyWord)
    ? data [lang][keyWord] : data [lang]["NOT DEFINE"]
}