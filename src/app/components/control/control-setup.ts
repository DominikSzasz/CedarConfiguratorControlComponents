import {Globals} from '../../../app/control-container-setup'


export function getControlVars(controlType: string) {
    console.log(Globals.controlTypes);
    
    // Get all elements with this control type class
    const elements = document.getElementsByClassName(controlType);
    
    // Apply styles to each matching element
    const styles = Globals.controlTypes[controlType];
    if (styles) {
      Array.from(elements).forEach(element => {
        Object.entries(styles).forEach(([cssVar, value]) => {
          if (typeof cssVar === 'string' && typeof value === 'string') {
            (element as HTMLElement).style.setProperty(cssVar, value);
          }
        });
      });
    }
  }
  
