


const filterSortedArray = (sortedArray: any) => {
    const { filterParam, sorted, category } = sortedArray.products
    if (filterParam) {
        if (category == "brands") {
            return sorted.filter(
                (product: any, ) => filterParam === product.brands
            );
        } if (category == "gender") {
            return sorted.filter(
                (product: any, ) => filterParam === product.gender
            );
        }
    }
    return sorted;
};

export default filterSortedArray;