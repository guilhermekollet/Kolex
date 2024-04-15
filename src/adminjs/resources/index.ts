import { Category } from "../../models";
import { categoryResourceOptions } from "./category";
import { ResourceWithOptions } from "adminjs";

export const adminJsResources: ResourceWithOptions[] = [
    {
        resource: Category,
        options: categoryResourceOptions
    }
]