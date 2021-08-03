GTValues = {
    /**
     * <p/>
     * This is worth exactly one normal Item.
     * This Constant can be divided by many commonly used Numbers such as
     * 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 24, ... 64 or 81
     * without loosing precision and is for that reason used as Unit of Amount.
     * But it is also small enough to be multiplied with larger Numbers.
     * <p/>
     * This is used to determine the amount of Material contained inside a prefixed Ore.
     * For example Nugget = M / 9 as it contains out of 1/9 of an Ingot.
     */
    M: 3628800,
    /**
     * Renamed from "FLUID_MATERIAL_UNIT" to just "L"
     * <p/>
     * Fluid per Material Unit (Prime Factors: 3 * 3 * 2 * 2 * 2 * 2)
     */
    L: 144,
    /**
     * The Item WildCard Tag. Even shorter than the "-1" of the past
     */
    //W = OreDictionary.WILDCARD_VALUE,
    /**
     * The Voltage Tiers. Use this Array instead of the old named Voltage Variables
     */
    V: [8, 32, 128, 512, 2048, 8192, 32768, 131072, 524288,  2147483647],
    ULV: 0,
    LV: 1,
    MV: 2,
    HV: 3,
    EV: 4,
    IV: 5,
    LuV: 6,
    ZPM: 7,
    UV: 8,
    MAX: 9,
    /**
     * The short names for the voltages
     */
    VN: ["ULV", "LV", "MV", "HV", "EV", "IV", "LuV", "ZPM", "UV", "MAX"],
    /**
     * Color values for the voltages
     */
    VC: [0xDCDCDC, 0xDCDCDC, 0xFF6400, 0xFFFF1E, 0x808080, 0xF0F0F5, 0xF0F0F5, 0xF0F0F5, 0xF0F0F5, 0xF0F0F5],
    /**
     * The long names for the voltages
     */
    VOLTAGE_NAMES: ["Ultra Low Voltage", "Low Voltage", "Medium Voltage", "High Voltage", "Extreme Voltage", "Insane Voltage", "Ludicrous Voltage", "ZPM Voltage", "Ultimate Voltage", "Maximum Voltage"],
    /**
     * ModID strings, since they are quite common parameters
     */
    /*public static final String MODID = "gregtech",
        MODID_FR = "forestry",
        MODID_FMP = "forgemultipartcbe",
        MODID_CT = "crafttweaker",
        MODID_TOP = "theoneprobe",
        MODID_CTM = "ctm";*/
    //because forge is too fucking retarded to cache results or at least do not create fucking
    //immutable collections every time you retrieve indexed mod list
}
const Scientific = WRAP_NATIVE("Scientific");
const Flags = WRAP_NATIVE("Flags");
const Stones = WRAP_NATIVE("Stones");