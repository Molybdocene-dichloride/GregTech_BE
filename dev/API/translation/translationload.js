function loadUsingBuildConfig() {
    for (var i = 0; i < __mod__.buildConfig.resourceDirs.size(); i++) {
        Logger.Log(__mod__.buildConfig.resourceDirs.get(i).resourceType, "ссяв");
        if (__mod__.buildConfig.resourceDirs.get(i).resourceType == "resource") {
            Logger.Log(__mod__.dir + __mod__.buildConfig.resourceDirs.get(i).path, "pound");
            if (FileTools.isExists(__mod__.dir + __mod__.buildConfig.resourceDirs.get(i).path)) {
                Logger.Log(__mod__.dir + __mod__.buildConfig.resourceDirs.get(i).path + "lang/", "pAZ");
                if (FileTools.isExists(__mod__.dir + __mod__.buildConfig.resourceDirs.get(i).path + "lang/"))
                    LocalizationSystem.loadTranslationDir({ path: __mod__.dir + __mod__.buildConfig.resourceDirs.get(i).path + "lang/" });
            }
        }
    }
}
;
function addInnerCoreTranslation(key) {
    Translation.addTranslation(key, { en: LocalizationSystem.translate({ lang: "en_US", key: "tile.wire_coil.tooltip_ebf" }) });
    //Translation.addTranslation(key, {en: LocalizationSystem.translate({lang: "en_US", key: "tile.wire_coil.tooltip_ebf"})});
}
