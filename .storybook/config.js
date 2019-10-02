import { configure, addDecorator } from "@storybook/react";
import { setIntlConfig, withIntl } from "storybook-addon-intl";
import { addLocaleData } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
import ruLocaleData from "react-intl/locale-data/ru";
import { TRANSLATIONS } from "../i18n";

import injectGlobalStyles from "./injectGlobalStyles";
import styles from "./globalStyles";

addLocaleData(enLocaleData);
addLocaleData(ruLocaleData);

const messages = {
    ru: TRANSLATIONS["ru_ru"],
    en: TRANSLATIONS["en_us"]
};

const getMessages = locale => messages[locale];

setIntlConfig({
    locales: ["en", "ru"],
    defaultLocale: "ru",
    getMessages
});

addDecorator(withIntl);

addDecorator(story => {
    injectGlobalStyles(styles);
    return story();
});

function loadStories() {
    require("../story.js");
}

configure(loadStories, module);
