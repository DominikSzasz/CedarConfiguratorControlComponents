import {GlobalValues} from '../../../app/control-container-setup'


export function getControlVars(controlType: string) {    
    const elements = document.getElementsByClassName(controlType);
    const styles = GlobalValues.controlTypes[controlType];

    if (styles) {
        
      Array.from(elements).forEach(element => {

        Object.entries(styles).forEach(([cssVar, value]) => {
          if (cssVar == "divider-tf")
          {
            let className = "control-hr " + controlType
            // if (value == "true" || value == "T")
            // {
            //   const hr = document.querySelectorAll(className);
            //   Array.from(hr).forEach(hr => {
            //     const hrElement = hr as HTMLElement; 
            //     hrElement.style.setProperty("display", "block");
            //   });
            // } else
            // {
            //   const hr = document.querySelectorAll(className);
            //   Array.from(hr).forEach(hr => {
            //     const hrElement = hr as HTMLElement; 
            //     hrElement.style.setProperty("display", "none");
            //   });
            // }
          }
          if (typeof cssVar === 'string' && typeof value === 'string') {
            Object.entries(GlobalValues.projGlob).forEach(([globKey, globValue]) => {
                if (value == globKey)
                {
                    value = globValue
                }
            });
            
            (element as HTMLElement).style.setProperty(cssVar, value, 'important');
        }
        });
      });
    }
  }
  
