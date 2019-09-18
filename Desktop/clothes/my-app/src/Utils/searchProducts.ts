

const searchProducts = (sortedArray: any) => {
    const { filterParam, searchProducts } = sortedArray.products
    let newArray: any = [];
    if (filterParam) {


        newArray =
            searchProducts.filter(
                (product: any, ) => filterParam === product.name
            );
        return newArray
    }
    return newArray;
};

export default searchProducts;