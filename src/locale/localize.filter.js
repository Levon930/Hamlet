import am from './am.json'
import ru from './ru.json'
import en from './en.json'

const locales = {
    'am-AM': am,
    'ru-RU': ru,
    'en-US': en
}

export default function localizeFilter(lang, key) {
    return locales[lang][key];
};