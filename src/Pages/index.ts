import {Admin} from "./Admin/Index";
import {ComponentType} from "react";
import {Home} from "./Home";

export type Page = {
    name: string;
    route: string;
    Content: ComponentType;
};

export const Pages: Page[] = [
    Home,
    Admin,
];
