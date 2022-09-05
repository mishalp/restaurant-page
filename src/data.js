let home = {
    title:"Restaurant Sweet Restaurant",
    txt: "We believe in the commitment to our community and in fostering long term relationships with local farmers and fishermen. Our menus reflect these connections, featuring local, seasonal produce and sustainably sourced seafood and meats",
    time: {
        title: 'Hours',
        times: ['Sunday: 8am - 8pm','Monday: 6am - 6pm','Tuesday: 6am - 6pm','Wednesday: 6am - 6pm','Thursday: 6am - 10pm','Friday: 6am - 10pm','Saturday: 8am - 10pm'],
    },
    add:{
        title: "Location",
        txt: "123 Forest Drive, Forestville, Maine"
    },

}

let menu = {
    title: 'Menu Items',
    items:[
        {
        name: "Burger",
        discription: "This is a nice Burger to eat",
        price: "$2",
        path: './img/burger.jpg'
        },
        {
            name: "Pizza",
            discription: "This is a nice Pizza to eat",
            price: "$3",
            path: './img/pizza.jpg'
        },
        {
            name: "Sandwich",
            discription: "This is a nice Sandwich to eat",
            price: "$2",
            path: './img/sandwich.jpg'
        },
        {
            name: "French Fries",
            discription: "This is a nice French Fries to eat",
            price: "$2",
            path: './img/french.jpg'
        },
        {
            name: "Spaghetti",
            discription: "This is a nice Spaghetti to eat",
            price: "$3",
            path: './img/spaghetti.jpg'
        }
    ]
}

let contact = {
    title: 'Contact Us'
}

export { home, menu, contact }
