const data = [
    {
        id: 'elgato-keylight',
        position: {x: 136.5, y: 113.5},
        name: 'Elgato Key Lights',
        image: 'elgato-key-light.png',
        text: [
            'These lights are great if you shoot video at your desk.',
            'My desk is pushed up against the wall, so I didn`t have room for a large soft box. These lights still deliver on the look that I wanted. Plus, it comes with a desktop app where you can adjust the brightness and temperature.'
        ],
        buyLink: 'http://amazon.com',
        price: 169.99
    }
];

const getItems = () => data.map(({id, position, name}) => ({id, position, name}))

const getItem = (id) => data.find(({id: itemId}) => id === itemId)

export {
    getItems,
    getItem,
}