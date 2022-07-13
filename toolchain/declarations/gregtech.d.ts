declare const LocalizationSystem: {
	_createNativeTranslatorObj(ppt: {pre: string | String, post: string | String});
	_translateToCurrent(trc: {_pointer: number, key: string | String});
    _translate(tr: {_pointer: number, lang: string | String, key: string | String});
    
    translate(tr: {lang: string | String, key: string | String});
	loadTranslationDir(ltd: {path: string | String});
}
