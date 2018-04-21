import { VscElement, ThemeConfiguration, VscColor, ThemeJsonOptions } from '../../models/index';
//import { iconFolderPath, lightVersion, highContrastVersion } from './constants';
import * as merge from 'lodash.merge';

/**
 * Get all file icons that can be used in this theme.
 */
export const getVscColorDefinitions = (fileIcons: VscElement, config: ThemeConfiguration, options: ThemeJsonOptions): ThemeConfiguration => {
    config = merge({}, config);
    const enabledIcons = disableIconsByPack(fileIcons, options.activeIconPack);
    const customIcons = getCustomIcons(options.files.associations);
    const allFileIcons = [...enabledIcons, ...customIcons];

    allFileIcons.forEach(icon => {
        if (icon.disabled) return;
        config = merge({}, config, setIconDefinition(icon.name));

        if (icon.light) {
            config = merge({}, config, setIconDefinition(icon.name, lightVersion));
        }
        if (icon.highContrast) {
            config = merge({}, config, setIconDefinition(icon.name, highContrastVersion));
        }

        if (icon.fileExtensions) {
            config = merge({}, config, mapSpecificFileIcons(icon, FileMappingType.FileExtensions));
        }
        if (icon.fileNames) {
            config = merge({}, config, mapSpecificFileIcons(icon, FileMappingType.FileNames));
        }
    });

    return config;
};

/**
 * Map the file extensions and the filenames to the related icons.
 */
const mapSpecificFileIcons = (icon: FileIcon, mappingType: FileMappingType) => {
    const config = new IconConfiguration();
    icon[mappingType].forEach(ext => {
        config[mappingType][ext] = icon.name;
        if (icon.light) {
            config.light[mappingType][ext] = `${icon.name}${lightVersion}`;
        }
        if (icon.highContrast) {
            config.highContrast[mappingType][ext] = `${icon.name}${highContrastVersion}`;
        }
    });
    return config;
};

/**
 * Disable all file icons that are in a pack which is disabled.
 */
const disableIconsByPack = (fileIcons: FileIcons, activatedIconPack: string): FileIcon[] => {
    return fileIcons.icons.filter(icon => {
        return !icon.enabledFor ? true : icon.enabledFor.some(p => p === activatedIconPack);
    });
};

const setIconDefinition = (iconName: string, appendix: string = '') => {
    const obj = { iconDefinitions: {} };
    obj.iconDefinitions[`${iconName}${appendix}`] = {
        iconPath: `${iconFolderPath}${iconName}${appendix}.svg`
    };
    return obj;
};

const getCustomIcons = (fileAssociations: IconAssociations) => {
    if (!fileAssociations) return [];

    const icons: FileIcon[] = Object.keys(fileAssociations).map(fa => {
        const icon: FileIcon = { name: fileAssociations[fa].toLowerCase() };
        if (fa.charAt(0) === '*') {
            icon.fileExtensions = [fa.toLowerCase().replace('*.', '')];
        } else {
            icon.fileNames = [fa.toLowerCase()];
        }
        return icon;
    });
    return icons;
};

const enum FileMappingType {
    FileExtensions = 'fileExtensions',
    FileNames = 'fileNames'
}
