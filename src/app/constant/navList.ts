interface NavList{
    id: number
    name: string
}

export const navigationList: NavList[] = [
    {
        id: Math.round(Math.random() * 1000),
        name: "Home"
    },
    {
        id: Math.round(Math.random() * 1000),
        name: "About"
    },
    {
        id: Math.round(Math.random() * 1000),
        name: "Tech Stack"
    },
    {
        id: Math.round(Math.random() * 1000),
        name: "Projects"
    },
    {
        id: Math.round(Math.random() * 1000),
        name: "Contacts"
    },
]