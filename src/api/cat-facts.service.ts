/*=============================================== Cat facts example ===============================================*/

import axios from "axios"

const http = axios.create({
    baseURL: "https://meowfacts.herokuapp.com/",
    headers: { "Content-type": "application/json" },
})

class CatFacts {
    getFacts = async (count = 5) =>
        await http.get(`/${count && `?count=${count}`}`)
    getSingleFact = async (id: number) => await http.get(`/?id=${id}`)
    getLangFact = async (id = 0, lang?: Lang) =>
        await http.get(`/?id=${id}&lang=${lang}`)
}

export const catFacts = new CatFacts()

type Lang =
    | "eng-us"
    | "ces-cz"
    | "cze-cz"
    | "ger-de"
    | "ben-in"
    | "esp-es"
    | "esp-mx"
    | "rus-ru"
    | "por-br"
    | "tl-fil"
    | "ukr-ua"
    | "urd-ur"
    | "ita-it"
    | "zho-tw"
    | "kor-ko"
