


const filterSortedArray = (sortedArray: any) => {

    const { filterParam, sorted, category } = sortedArray.products
    console.log("filterParam w fn")
    console.log(filterParam)
    console.log("category w fn")
    console.log(category)


    if (filterParam) {
        if (category == "brands") {
            console.log(" wybranie br")
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