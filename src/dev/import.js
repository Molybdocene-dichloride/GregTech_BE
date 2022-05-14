const Flags = WRAP_NATIVE("Flags");
const LocalizationSystem = WRAP_NATIVE("LocalizationSystem");

const Stones = WRAP_NATIVE("Stones");

IMPORT("ToolLib");
//IMPORT("SoundAPI");
IMPORT("Vector");

const setLoadingTip = ModAPI.requireGlobal("MCSystem.setLoadingTip");
const setLoadingText = WRAP_JAVA("com.zhekasmirnov.innercore.ui.LoadingUI");

Callback.addCallback("tick", function() {
  Logger.Flush();
});