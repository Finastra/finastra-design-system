import { Placement } from "@popperjs/core";

export enum NextStepTrigger {
    nextClick = 'Trigger next step on next button click',
    elementClick = 'Trigger next step on element click'
}
export interface TourStep {
    selector: string;
    title: string;
    description?: string;
    nextStepTrigger: NextStepTrigger;
    nextChangeUrl: boolean;
    hidePreviousBtn?: boolean;
    placement?: Placement | "center";
}
export interface Tour {
    id: string;
    name: string;
    description?: string;
    startingUrl: string;
    steps: TourStep[];
}
