import React, { Component } from 'react'

const ProductContext = React.createContext()

class ProductProvider extends Component {
    constructor(){
        super()
        this.state = {
            testDatabase: [
                {title: 'Test Title1',
                subtitle: 'some subtitle1',
                price: '5',
                description: 'some text here'},
                {title: 'Test Title2',
                subtitle: 'some subtitle2',
                price: '50',
                description: 'some text here'},
                {title: 'Test Title 3',
                subtitle: 'some subtitle 3',
                price: '500',
                description: 'some text here'},
                {title: 'Test Title 4',
                subtitle: 'some subtitle 4',
                price: '73',
                description: 'some text here'},
                {title: 'Test Title 5',
                subtitle: 'some subtitle 5',
                price: '150',
                description: 'some text here'},
                {title: 'Hot Pockets',
                subtitle: 'Pepperoni',
                price: '3',
                description: 'YUM!'},
            ]
        }
    }

    render(){
        return (
            <ProductContext.Provider 
                value={{
                   testDatabase: this.state.testDatabase
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