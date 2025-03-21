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
    "controlBoxDivider_TF": "",
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
    "containerMargin_left": "--container-side-margin",
    "containerMargin_right": "--container-side-margin",
    "containerControlGap_horizontal": "--control-gap-horizontal",
    "containerControlGap_vertical": "--control-gap-vertical",
    "containerBackground_color": "--container-background-color",
    "containerBorder_color": "--container-border-color",
    "containerBorder_thickness": "--container-border-width",
    "containerGap_title": "",
    "containerDivider_TF": "",
    "containerDivider_thickness": "",
    "containerDivider_color": "",
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
    "containerGapSide_filter": "",
    "containerGapSide_search": "",
    "containerGap_search_filter": "",
    "containerGapTop_searchFilter": "",
    "containerSelectedFilter_color": "",
    "containerNotSelectedFilter_color": "",
    "containerSearchFilterBackground_color": "",
    "containerSearchText1_color": "",
    "containerSearchText2_color": "",
    "containerSearchText1_font": "",
    "containerSearchText2_font": "",
    "containerSearchText1_size": "",
    "containerSearchText2_size": "",
    "containerSearchText1_weight": "",
    "containerSearchText2_weight": ""
}

  type ControlContainerTypes = Record<string, Record<string, string>>;
  type ProjGlob = Record<string, string>;

  export class GlobalValues {
    static controlTypes: Partial<ControlContainerTypes> = {};
    static containerTypes: Partial<ControlContainerTypes> = {};
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
// export function getContainerTypes() {
//     parameterDatabase.database[0].ContainerDef.forEach((container) => {
//         let controlSet:string = container["id.container"]
//         GlobalValues.containerTypes[controlSet] = {}
//         Object.entries(container).forEach(([key, value]) => {
//             if (value !== "" && paramLookupTable[key] !== undefined) {
//                 let cssName:string = paramLookupTable[key]
//                 GlobalValues.containerTypes[controlSet]![cssName]! = value
//             }
//         });
//     });  
//     console.log(Globals.containerTypes)  
// }
export function getProjGlobals()
{
        let projectGlobals = parameterDatabase.database[0].ProjectGlobals[0]
        GlobalValues.projGlob = {}
        Object.entries(projectGlobals).forEach(([key, value]) => {
            GlobalValues.projGlob[key]! = value!
            // console.log(key, value)
        });
}
