import { createThemeFile, getDefaultThemeOptions } from '../themes/index';
import { getObjectPropertyValue, setObjectPropertyValue } from './objects';
import { getExtensionConfiguration, promptToReload, getColorThemeJson, getThemeConfig } from '.';

/** Compare the workspace and the user configurations with the current setup of the icons. */
export const detectConfigChanges = () => {
    const configs = Object.keys(getExtensionConfiguration())
        .map(c => c.split('.').slice(1).join('.'));

    return compareConfigs(configs).then(updatedOptions => {
        
        console.log('did we even make it here?' + updatedOptions);

        // if there's nothing to update
        if (!updatedOptions) { 
            console.log('is this broken? :/');
            return; }

		/* update theme json file with new options
		*  TODO: Update for Nebula
		*/
        return createThemeFile(updatedOptions).then(() => {
            console.log('should be prompted to update here :/');
            promptToReload();
        }).catch(err => {
            console.log('hi goodbye?!');
            console.error(err);
        });
    });
};

/**
 * Compares a specific configuration in the settings with a current configuration state.
 * The current configuration state is read from the icons json file.
 * @param configs List of configuration names
 * @returns List of configurations that needs to be updated.
 */
const compareConfigs = (configs: string[]): Promise<{ [name: string]: any }> => {
    let updateRequired = false;

	/* 
	 * TODO: Update for Nebula
	*/
    return getColorThemeJson().then(json => {
        const defaults = getDefaultThemeOptions();

        configs.forEach(configName => {


            const configValue = getThemeConfig(configName).globalValue;
            const currentState = getObjectPropertyValue(json.options, configName);
            const configDefault = getObjectPropertyValue(defaults, configName);

            console.log('name' + configName + '  configValue: ' + configValue + '  currentState: ' + currentState + '  default: ' + configDefault);

            // If property is deleted, and it wasn't the default value, set it to the default value
            if (configValue === undefined && currentState !== configDefault) {
                setObjectPropertyValue(json.options, configName, configDefault);
                console.log('condition 1');
                updateRequired = true;
            }

            else if (configValue !== undefined && currentState !== configValue) {
                setObjectPropertyValue(json.options, configName, configValue);
                console.log('condition 2');
                updateRequired = true;
            }

            // no further actions (e.g. reload) required
            //if (/show(Welcome|Update|Reload)Message/g.test(configName)) { return; }
        });

        return updateRequired ? json.options : undefined;
    });
};
