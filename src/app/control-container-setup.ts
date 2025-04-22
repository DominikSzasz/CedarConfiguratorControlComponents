import parameterDatabase from '../../content/parameter_control_container.json'

export const controlParamLookupTable: Record<string, string> = {
    "controlBoxWidth": "--control-width",
    "controlBoxHeight": "--control-height",
    "controlBoxMargin_bottom": "--bottom-margin",
    "controlBoxMargin_top": "--top-margin",
    "controlBoxMargin_side": "--side-margin",
    "controlBoxPicture_TF": "",
    "controlBoxPicturePlaceholderWidth": "--control-img-width",
    "controlBoxPicturePlaceholderHeight": "--control-img-height",
    "controlBoxDivider_TF": "divider-tf",
    "controlBoxGap_picture_title": "--img-dvider-gap",
    "controlBoxGap_title_text": "--title-text-gap",
    "controlBoxGap_picture_divider": "--img-dvider-gap",
    "controlBoxGap_divider_title": "--divider-title-gap",
    "controlBoxDivider_thickness": "--divider-height",
    "controlBoxTitle_font": "title-font",
    "controlBoxTitle_size": "title-size",
    "controlBoxTitle_weight": "title-font-weight",
    "controlBoxTitle_fontStyle": "title-font-style",
    "controlBoxText_font": "text-font",
    "controlBoxText_size": "text-size",
    "controlBoxText_weight": "text-font-weight",
    "controlBoxBorderThickness_default": "--default-border-width",
    "controlBoxBorderThickness_selected": "--clicked-border-width",
    "controlBoxBorderColor_default": "--unselected-border-color",
    "controlBoxBorderColor_selected": "--selected-border-color",
    "controlBoxBorderColor_disabled": "--disabled--border-color",
    "controlBoxBorderColor_clicked": "--clicked-border-color",
    "controlBoxBorderColor_defaultSelected": "--default-selected-border-color",
    "controlBoxBorderColor_hover": "--hover-border-color",
    "controlBoxBackgroundColor_default": "--unselected-color",
    "controlBoxBackgroundColor_selected": "--selected-color",
    "controlBoxBackgroundColor_disabled": "--disabled-color",
    "controlBoxBackgroundColor_clicked": "--clicked-color",
    "controlBoxBackgroundColor_defaultSelected": "--default-selected-color",
    "controlBoxBackgroundColor_hover": "--hover-color",
    "controlBoxTitleColor_default": "--unselected-title-color",
    "controlBoxTitleColor_selected": "--selected-title-color",
    "controlBoxTitleColor_disabled": "--disabled-title-color",
    "controlBoxTitleColor_clicked": "--clicked-title-color",
    "controlBoxTitleColor_defaultSelected": "--default-selected-title-color",
    "controlBoxTitleColor_hover": "--hover-title-color",
    "controlBoxDescriptionColor_default": "--unselected-text-color",
    "controlBoxDescriptionColor_selected": "--selected-text-color",
    "controlBoxDescriptionColor_disabled": "--disabled-text-color",
    "controlBoxDescriptionColor_clicked": "--clicked-text-color",
    "controlBoxDescriptionColor_defaultSelected": "--default-selected-text-color",
    "controlBoxDescriptionColor_hover": "--hover-text-color",
    "controlBoxDividerColor_default": "--unselected-divider-color",
    "controlBoxDividerColor_selected": "--selected-divider-color",
    "controlBoxDividerColor_disabled": "--disabled-divider-color",
    "controlBoxDividerColor_clicked": "--clicked-divider-color",
    "controlBoxDividerColor_defaultSelected": "--default-disabled-divider-color",
    "controlBoxDividerColor_hover": "--hover-divider-color",
    "controlBoxFilterTags": ""
};

export const containerParamLookupTable: Record<string, string> = {
        "containerWidth_default": "",
        "containerWidth_min": "--container-min-width",
        "containerWidth_max": "--container-max-width",
        "containerHeight_default": "",
        "containerHeight_min": "--container-min-height",
        "containerHeight_max": "--container-max-height",
        "containerMargin_top": "--container-top-margin",
        "containerMargin_bottom": "--container-bottom-margin",
        "containerMargin_left": "--container-left-margin",
        "containerMargin_right": "--container-right-margin",
        "containerControlGap_horizontal": "--control-gap-horizontal",
        "containerControlGap_vertical": "--control-gap-vertical",
        "containerBackground_color": "--container-background-color",
        "containerBorder_color": "--container-border-color",
        "containerBorder_thickness": "--container-border-width",
        "containerGap_title": "--title-container-gap",
        "containerDivider_TF": "",
        "containerDivider_thickness": "--inner-title-divider-height",
        "containerDivider_color": "--inner-title-divider-color",
        "containerGap_title_divider": "",
        "containerControlOrientation": "--display-orientation",
        "containerTitle_fontStyle": "--title-font-style",
        "containerTitle_font": "--title-font",
        "containerTitle_size": "--title-size",
        "containerTitle_weight": "--title-font-weight",
        "containerTitle_color": "--title-font-color",
        "containerScrollable_TF": "",
        "containerSearch_TF": "",
        "containerFilter_TF": "",
        "ContainerControllType": "",   
}

export const searchFilterParamLookupTable: Record<string, string> = {
    "containerGapSide_filter": "--filter-gap-side",
    "containerGapSide_search": "--search-gap-side",
    "containerGap_search_filter": "--search-filter-gap",
    "containerGapTop_searchFilter": "--search-gap-top",
    "containerSelectedFilterTag_color": "--selected-tag-color",
    "containerNotSelectedFilterTag_color": "--unselected-tag-color",
    "containerSelectedFilterTagText_color": "--selected-tag-text-color",
    "containerNotSelectedFilterTagText_color": "--unselected-tag-text-color",
    "containerSelectedFilterTagText_font": "--selected-tag-text-font",
    "containerNotSelectedFilterTagText_font": "--unselected-tag-text-font",
    "containerSelectedFilterTagText_size": "--selected-tag-text-size",
    "containerNotSelectedFilterTagText_size": "--unselected-tag-text-size",
    "containerSelectedFilterTagText_style": "--selected-tag-text-style",
    "containerNotSelectedFilterTagText_style": "--unselected-tag-text-style",
    "containerSelectedFilterTagText_weight": "--selected-tag-text-weight",
    "containerNotSelectedFilterTagText_weight": "--unselected-tag-text-weight",
    "containerFilterTag_height": "--tag-hegiht",
    "containerFilterTag_length": "--tag-width",
    "containerFilterButton_height2": "--filter-button-height",
    "containerFilterButton_length3": "--filter-button-width",
    "containerSearchFilterButton_color": "--filter-button-color",
    "containerSearchFilterClickedButton_color": "--filter-button-clicked-color",
    "containerSearchFilterDisabledButton_color": "--filter-button-disabled-color",
    "containerSearchFilterButtonText_color": "--filter-button-text-color",
    "containerSearchFilterBackground_color22": "--filter-background-color",
    "containerSearchText1_color": "--container-search-text-color-1",
    "containerSearchText2_color": "--container-search-text-color-2",
    "containerSearchText1_font": "--container-search-text-font-1",
    "containerSearchText2_font": "--container-search-text-font-2",
    "containerSearchText1_size": "--container-search-text-size-1",
    "containerSearchText2_size": "--container-search-text-size-2",
    "containerSearchText1_weight": "--container-search-text-weight-1",
    "containerSearchText2_weight": "--container-search-text-weight-2",
    "containerSearchText1_style": "--container-search-text-style-1",
    "containerSearchText2_style": "--container-search-text-style-2",
    "containerSearchButton_length": "--search-button-width",
    "containerSearchButton_height": "--search-button-height"  
}
  type ControlContainerTypes = Record<string, Record<string, string>>;
  type ProjGlob = Record<string, string>;

  export class GlobalValues {
    static controlTypes: Partial<ControlContainerTypes> = {};
    static containerTypes: Partial<ControlContainerTypes> = {};
    static searchFilterTypes: Partial<ControlContainerTypes> = {};
    static projGlob: ProjGlob = {};
  }

export function getControlTypes() {
    parameterDatabase.database[0].ControlDef.forEach((control) => {
        let controlSet:string = control["controlSet"]
        GlobalValues.controlTypes[controlSet] = {}
        Object.entries(control).forEach(([key, value]) => {
            if (value !== "" && controlParamLookupTable[key] !== undefined) {
                let cssName:string = controlParamLookupTable[key]
                GlobalValues.controlTypes[controlSet]![cssName]! = value
            }
        });
    });    
}
export function getContainerTypes() {
    parameterDatabase.database[0].ContainerDef.forEach((container) => {
        let controlSet:string = container["containerId"]
        GlobalValues.containerTypes[controlSet] = {}
        Object.entries(container).forEach(([key, value]) => {
            if (value !== "" && containerParamLookupTable[key] !== undefined) {
                let cssName:string = containerParamLookupTable[key]
                GlobalValues.containerTypes[controlSet]![cssName]! = value
            }
        });
    });  
}
export function getSearchFilterTypes() {
    parameterDatabase.database[0].SearchFilterDef.forEach((searchFilter) => {
        let controlSet:string = searchFilter["ID"]
        GlobalValues.searchFilterTypes[controlSet] = {} as Record<string, string>;
        Object.entries(searchFilter).forEach(([key, value]) => {
            if (value !== "" && searchFilterParamLookupTable[key] !== undefined) {
                let cssName:string = searchFilterParamLookupTable[key]
                GlobalValues.searchFilterTypes[controlSet]![cssName]! = value

            }

        });
    });  
}
export function getProjGlobals()
{
        let projectGlobals = parameterDatabase.database[0].ProjectGlobals[0]
        GlobalValues.projGlob = {}
        Object.entries(projectGlobals).forEach(([key, value]) => {
            GlobalValues.projGlob[key]! = value!
        });
}
