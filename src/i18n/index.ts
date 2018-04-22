import * as vscode from 'vscode';
import * as fs from 'fs';
import { getObjectPropertyValue } from '../helpers/objects';

// Get current language of the vs code workspace
export const getCurrentLanguage = (): string =>
    vscode.env.language;

let currentTranslation;
let fallbackTranslation; // default: en
const PLACEHOLDER = '%';

/** Initialize the translations */
export const initTranslations = async () => {
    try {
        currentTranslation = await loadTranslation(getCurrentLanguage());
        fallbackTranslation = await loadTranslation('en');
    }
    catch (error) {
        console.log(error);
    }
};

/** Load the required translation */
const loadTranslation = (language: string): Promise<any> => {
    return getTranslationObject(language)
        .catch(() => getTranslationObject('en'));
};

/** Get the translation object of the separated translation files */
const getTranslationObject = async (language: string): Promise<any> => {
    try {
        // tslint:disable-next-line:semicolon
        const lang = await import('./lang-' + language);
        return lang.translation;
    }
    catch (error) {
        console.log(error);
    }
};

/**
 * We look up the matching translation in the translation files.
 * If we cannot find a matching key in the file we use the fallback.
 * With optional parameters you can configure both the translations
 * and the fallback (required for testing purposes).
 * */
export const getTranslationValue = (key: string, translations = currentTranslation, fallback = fallbackTranslation) => {
    return getObjectPropertyValue(translations, key) ?
        getObjectPropertyValue(translations, key) :
        getObjectPropertyValue(fallback, key) ?
            getObjectPropertyValue(fallback, key) : undefined;
};

/**
 * The instant method is required for the translate pipe.
 * It helps to translate a word instantly.
 */
export const translate = (key: string, words?: string | string[]) => {
    const translation = <string>getTranslationValue(key);

    if (!words) return translation;
    return replace(translation, words);
};

/**
 * The replace function will replace the current placeholder with the
 * data parameter from the translation. You can give it one or more optional
 * parameters ('words').
 */
export const replace = (value: string = '', words: string | string[]) => {
    let translation: string = value;

    const values: string[] = [].concat(words);
    values.forEach((e, i) => {
        translation = translation.replace(PLACEHOLDER.concat(<any>i), e);
    });

    return translation;
};
