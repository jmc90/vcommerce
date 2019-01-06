// testing best buy api 
// when complete, replace ProductProvider (with test database)

// https://api.bestbuy.com/v1/products((search=gpu))?apiKey=nsAkGCaJrNdxZwqGredJIoLI&sort=bestSellingRank.asc&pageSize=20&format=json


import React, { Component } from 'react'
import axios from 'axios'

const ProductContext = React.createContext()

class ProductProvider extends Component {
    constructor() {
        super()
        this.state = []
    }

    getProducts = () => {
        axios.get('/inventory').then(response => {
            console.log(response)
            this.setState({
                currentProducts: response.data.products
            })
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    addProduct = newProduct => {
        console.log(newProduct)
        axios.post('/inventory', newProduct).then(response => {
            this.setState(prevState => ({
                currentProducts: [...prevState.currentProducts, response.data]
            }))
        })
        .catch(err => console.log(err))
    }

    handleDeleteRouter = (id) => {
        console.log(id)
        axios.delete(`/inventory/${id}`).then(res =>
            this.setState({
                currentProducts: this.state.currentProducts.filter(each => each._id !== id)
            })
        )
    }

    // handleEditRouter = (id) => {
    //     axios.put(`/inventory/${id}`).then(res => 
    //         this.setState({
    //             currentProducts: this.state.currentProducts.map(each => each._id)
    //         })
    //     )
    // }

    render(){
        return(
            <ProductContext.Provider
                value={{
                    currentProducts: this.state.currentProducts,
                    getProducts: this.getProducts,
                    addProduct: this.addProduct,
                    handleDeleteRouter: this.handleDeleteRouter,
                    handleEditRouter: this.handleEditRouter
                }}>
                { this.props.children }
            </ProductContext.Provider>
        )
    }
}

export default ProductProvider

export const withProducts = C => props => (
    <ProductContext.Consumer>
        {value => <C {...props} {...value} />}
    </ProductContext.Consumer>
)


