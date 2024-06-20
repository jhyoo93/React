import { createContext, useContext, useState } from "react";

const LocalContext = createContext(); //createContext라는 함수로 context를 만든다.

export function LocaleProvider({ defaultValue = 'ko', chidren }) {
    const [locale, setLocale] = useState(defaultValue);
    return (
        <LocalContext.Provider value={{ locale, setLocale}}>
            {chidren}
        </LocalContext.Provider>
    );
}

export function useLocale() {
    const context = useContext(LocalContext);

    if (!context) {
        throw new Error('반드시 LocaleProvider 안에서 사용해야 합니다');
    }

    return context.locale;
}

export function useSetLocale() {
    const context = useContext(LocalContext);

    if (!context) {
        throw new Error('반드시 LocaleProvider 안에서 사용해야 합니다');
    }

    return context.setLocale;
}
