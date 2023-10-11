export interface itemListProps {
    projectLeader: string,
    projectManager: string,
    technicalManager: string,
    email: string,
    justification: string,
    project: project,
    materialList: MaterialList[]
}

export interface MaterialList {
    id?: string,
    quantity: number,
    und: string,
    description: string,
    unitaryValue: number,
    purchaseLink?: string
}

export interface project {
    requester: string,
    projectName: string,
    CostCenter: string,
    subsidiary: string,
    priority: string,
}

export interface equipeProps {
    projectLeader: string,
    projectManager: string,
    technicalManager: string,
    email: string,
    justification: string,
}