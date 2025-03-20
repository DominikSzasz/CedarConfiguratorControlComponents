import {Globals} from '../../../app/control-container-setup'


export function getContainerVars(controlType: string) {    
    // const elements = document.getElementsByClassName(controlType);
    
    // const styles = Globals.controlTypes[controlType];
    // if (styles) {
    //   Array.from(elements).forEach(element => {
    //     Object.entries(styles).forEach(([cssVar, value]) => {
    //       if (typeof cssVar === 'string' && typeof value === 'string') {
    //         Object.entries(Globals.projGlob).forEach(([globKey, globValue]) => {
    //             if (value == globKey)
    //             {
    //                 value = globValue
    //             }
    //         });
            
    //         (element as HTMLElement).style.setProperty(cssVar, value, 'important');
    //       }
    //     });
    //   });
    // }
    console.log("test")
    console.log(Globals.containerTypes)
  }