// src/i18n/direction.ts
import { I18nManager, Platform, DevSettings } from 'react-native';
import * as RNLocalize from 'react-native-localize';

import RNRestart from 'react-native-restart';

export function detectLocaleRTL(): boolean {
  return RNLocalize.getLocales()?.[0]?.isRTL ?? false;
}

/** Apply RTL/LTR to the native layer.
 *  NOTE: Changing direction usually requires an app reload to fully apply.
 */
export function applyDirection(isRTL: boolean, reload = true) {
  if (I18nManager.isRTL !== isRTL) {
    I18nManager.allowRTL(isRTL);
    I18nManager.forceRTL(isRTL);

    if (reload) {
      // Production-safe reload if available, otherwise dev reload.
      if (RNRestart) RNRestart.restart();
      else DevSettings.reload();
    }
  }
}
