import { createContext } from "react"

export type todo = {
    checked: boolean
    goalId?: string
}


export type habit = {
    activationDays: string
    checked: Array<object> //day: value
}

export type row = {
    date?: Date
    columns: {
        field: {
            value: string | number | null
        }
    }
}

export type form = {
    fields: Array<String> 
    data: Array<row>
}

export type goal = {
    // tags?: Array<string>
    dueDate?: Date,
    relatedEvent?: string,
    relatedFormField?: string
    comparator?: string,
    value?: number
}

export type event = goal | form | habit | todo & {
    name: string,
    _id: string,
    areaId: string,
    userId: string,
    hoursSpent?: number,
    points?: number,
}

export type area = {
    name: string
    _id: string
    userId: string
    description?: string
    hoursSpent?: number
    events: Array<string> //ids of events
}


export const defaultContext = {
    user: {
        isAuthed: false,
        name: "",
        email : "",
        img : "",
        accountType: "free",
        lastLogin: ""
    },
    data: {
        groupAreas: [] as area[],
        events: [] as event[]
    }
}

export const appContext = createContext(defaultContext)