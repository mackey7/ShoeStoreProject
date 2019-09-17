

const filterSortedArray = (sortedArray: any) => {

    const { filterParam, sorted, category } = sortedArray.products
    console.log("filterParam w fn")
    console.log(filterParam)
    console.log("category w fn")
    console.log(category)
    if (filterParam && category) {
        return sorted.filter(
            (product: any, ) =>


                filterParam === product.brands
        );
    }

    return sorted;
};

export default filterSortedArray;