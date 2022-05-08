let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function search(array, x) {
    let leftBorder = 0
    let rightBorder = array.length - 1
    let middle

    while (leftBorder <= rightBorder) {
        middle = Math.trunc((rightBorder - leftBorder) / 2) + leftBorder
        if (x > array[middle]) {
            leftBorder = middle + 1
        }
        else if (x < array[middle]) {
            rightBorder = middle - 1
        }
        else {
            return middle
        }



    }

}
alert(search(array, 10))


