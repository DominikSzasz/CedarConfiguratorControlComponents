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
    divider?: boolean;
    tags?: string;
    tagsArray?: string[];
}
export interface Container {
    containerName?: string;
    containerId?: string;
    containerInstance?: string;
    search?: boolean;
    filter?: boolean;
    controls: Control[];
    divider?: boolean;
    titleInside?: boolean;
    tags?: string[];
}
export class Globals {
    static containers: Container[] = []
}
export function getContainers()
{
    parameterDatabase.database[0].ContainerDef.forEach((container, containerIndex) => {
        let containerName = ""
        controlContainerDatabase.database[0].Container.forEach((containerInfo) => {
            if (container.containerId == containerInfo.containerId)
            {
                containerName = containerInfo.containerName
            }
        })
        let containerDivider = false
        if (container.containerDivider_TF == "true" || container.containerDivider_TF == "T")
        {
            containerDivider = true
        } else
        {
            containerDivider = false
        }
        let titleInside = false
        if (container.containerTitleInner_TF == "true" || container.containerTitleInner_TF == "T")
        {
            titleInside = true
        } else
        {
            titleInside = false
        }
        Globals.containers[containerIndex] = {containerId: container.containerId, controls: [], divider: containerDivider, titleInside: titleInside, containerName: containerName, tags: []}
        controlContainerDatabase.database[0].Control.forEach((control, controlIndex) => {

            if (control.containerRef === container.containerId) {
                let dividerTF = false

                parameterDatabase.database[0].ControlDef.forEach((controlParams, controlParamsIndex) => {
                    if (control.controlSet == controlParams.controlSet)
                    {
                        if (controlParams.controlBoxDivider_TF == "true" || controlParams.controlBoxDivider_TF == "T")
                        {
                            dividerTF = true
                        } else
                        {
                            dividerTF = false
                        }
                    }
                }); 
                Globals.containers[containerIndex].controls?.push({
                    controlId: control.controlId,
                    controlSet: control.controlSet,
                    controlInstance: control.controlInstance,
                    containerRef: control.containerRef,
                    title: control.title,
                    imageRef: control.imageRef,
                    description: control.description,
                    filterTags: control.filterTags,
                    divider: dividerTF,
                    tags: control.filterTags,
                    tagsArray: control.filterTags?.split(", ")
                });

            }
        });
        Globals.containers[containerIndex].controls.forEach((control => {
            let tags = control.tags?.split(", ")
            tags?.forEach((tag => {
                if (!Globals.containers[containerIndex].tags?.includes(tag) && tag != "" && tag != undefined)
                {
                    Globals.containers[containerIndex].tags?.push(tag)
                }
            }))
            
        }))
    }); 
    console.log(Globals.containers)

}
