import parameterDatabase from '../../content/parameter_control_container.json'
export const paramLookupTable: Record<string, string> = {					"control_width": "",
    "control width": "--control-width",
    "control height": "--control-height",
    "margót lent": "--bottom-margin",
    "margót fent": "--top-margin",
    "margót oldalt": "--side-margin",
    "van-e kép": "",
    "ha van placeholder szélesség": "",
    "ha van placeholder magasság": "",
    "van-e Title": "",
    "van-e description": "",
    "Kép-szöveg távolságot (ha van Title akkor kép-title ha nincs akkor kép-desc)": "--img-divider-gap",
    "title-description közötti távolságot": "--title-text-gap",
    "van-e elválasztó vonal a kép és a title között": "",
    "ha van akkor a kép és vonal távolságot": "--img-divider-gap",
    "ha van akkor a vonal és a szöveg közti távolságot": "",
    "vonal vastagságát": "--divider-height",
    "title betűtípusát": "--title-font",
    "title méretét": "--title-size",
    "title stílusát (bold italic stb)": "--title-font-style",
    "desc betűtípusát": "--text-font",
    "desc méretét": "--text-size",
    "desc stílusát (bold italic stb)": "--text-font-stye",
    "kijelölt Kontrollbox keretének a vastagságát": "--default-border-width",
    "nem kijelölt Kontrollbox keretének a vastagságát": "--clicked-border-width",
    "inaktív Kontrollbox keretének a színét": "--disabled-border-color",
    "Kontrollbox színét": "--unselected-color",
    "Title színét": "--unselected-title-color",
    "Description színét": "--unselected-title-color",
    "Filter tag-ek": ""
  };
  type ControlTypes = Record<string, Record<string, string>>;
  type ProjGlob = Record<string, string>;
  export class Globals {
    static controlTypes: Partial<ControlTypes> = {};
    static projGlob: ProjGlob = {};
  }

  export function setupControlContainer() {
    
    parameterDatabase.database[0].ControlDef.forEach((control) => {
        let controlSet:string = control["controlSet"]
        Globals.controlTypes[controlSet] = {}
        Object.entries(control).forEach(([key, value]) => {
            if (value !== "" && paramLookupTable[key] !== undefined) {
                let cssName:string = paramLookupTable[key]
                Globals.controlTypes[controlSet]![cssName]! = value
            }
        });
    });    
}
export function getProjGlobals()
{
        let projectGlobals = parameterDatabase.database[0].ProjectGlobals[0]
        Globals.projGlob = {}
        Object.entries(projectGlobals).forEach(([key, value]) => {
            Globals.projGlob[key]! = value!
        });
}
