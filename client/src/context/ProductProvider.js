import React, { Component } from 'react'

const ProductContext = React.createContext()

class ProductProvider extends Component {
    constructor(){
        super()
        this.state = {
            testDatabase: [
                {title: 'Cute Cat',
                subtitle: 'some subtitle1',
                price: 0,
                description: 'some text here',
                imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                _id: 12345,
                sku: 234
                },
                {title: 'Legos',
                subtitle: 'some subtitle2',
                price: '50',
                description: 'some text here',
                imageUrl: 'https://media.wired.com/photos/5954a0cb8e8cc150fa8ec6e7/master/w_1800,c_limit/HighRes_LEGO_DUPLO_bricks-story.jpg',
                _id: 123456,
                sku: 2345
                },
                {title: 'Computer',
                subtitle: 'some subtitle 3',
                price: '500',
                description: 'some text here',
                imageUrl: 'https://i5.walmartimages.com/asr/3826f75b-efeb-4a76-bd3a-735641a4a1c9_1.b84fd4ece51b32016a10c20ef07199cf.jpeg',
                _id: 1234567,
                sku: 23456
                },
                {title: 'Penguin',
                subtitle: 'some subtitle 4',
                price: '73',
                description: 'some text here',
                imageUrl: 'https://www.thespruce.com/thmb/_ZfVlpf2Y-jCWeDI_K77qwyMv-w=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/emperor-toboggan-58a6cb933df78c345b45970c.jpg',
                _id: 12345678,
                sku: 234567
                },
                {title: 'xbox',
                subtitle: 'some subtitle 5',
                price: '150',
                description: 'some text here',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Microsoft-Xbox-One-S-Console-wController-L.jpg/370px-Microsoft-Xbox-One-S-Console-wController-L.jpg',
                _id: 123456789,
                sku: 2345678
                },
                {title: 'Hot Pockets',
                subtitle: 'Pepperoni',
                price: '3',
                description: 'YUM!',
                imageUrl: 'https://nestle.promo.eprize.com/hotpockets18/public/COMPILED/images/hero.214d902f519f6eecfa538c5b826013f6.jpg',
                _id: 1234567890,
                sku: 23456789
                },
            ],
            selectedItemSku: 0,
            selectedItemDetails: {}
        }
    }

    setSelectedItemSku = (selectedItemSku) => {
        this.setState({
            selectedItemSku: selectedItemSku
        }, this.setSelectedItemDetails(selectedItemSku) )
    }

    setSelectedItemDetails = (selectedItemSku) => {
        const itemsArray = this.state.testDatabase
        const sku2 = parseInt(selectedItemSku)
        const correctItem = itemsArray.filter(item => item.sku === sku2);
        this.setState({
            selectedItemDetails: correctItem
        }, 
        // () => console.log(this.state.selectedItemDetails) 
        )
    }

    render(){
        return (
            <ProductContext.Provider 
                value={{
                   testDatabase: this.state.testDatabase,
                   setSelectedItemSku: this.setSelectedItemSku,
                   selectedItemSku: this.state.selectedItemSku,
                   selectedItemDetails: this.state.selectedItemDetails,
                }}>
                { this.props.children }
            </ProductContext.Provider>
        )
    }
}

export default ProductProvider


export const withProducts = C => props => (
    <ProductContext.Consumer>
        {value => <C {...props} {...value}/>}
    </ProductContext.Consumer>
)