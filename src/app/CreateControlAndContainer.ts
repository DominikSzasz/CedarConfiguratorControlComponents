import parameterDatabase from '../../content/parameter_control_container.json'
import controlContainerDatabase from '../../content/control_developement.json'


export interface Control {
    controlId?: string;
    controlSet?: string;
    controlInstance?: string;
    containerRef?: string;
    title?: string;
    description?: string;
    imageRef?: string;
    filterTags?: string;
}
export interface Container {
    containerId?: string;
    containerInstance?: string;
    search?: boolean;
    filter?: boolean;
    controls: Control[]
}
export class Globals {
    static containers: Container[] = []
}
export function getContainers()
{
    parameterDatabase.database[0].ContainerDef.forEach((container, containerIndex) => {
        Globals.containers[containerIndex] = {containerId: container.containerId, controls: []}
        controlContainerDatabase.database[0].Control.forEach((control, controlIndex) => {
            if (control.containerRef === container.containerId) {
                Globals.containers[containerIndex].controls?.push({
                    controlId: control.controlId,
                    controlSet: control.controlSet,
                    controlInstance: control.controlInstance,
                    containerRef: control.containerRef,
                    title: control.title,
                    imageRef: control.imageRef,
                    description: control.description,
                    filterTags: control.filterTags
                    
                });
            }
        });
    }); 
}
