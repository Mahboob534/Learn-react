
function max(bNumList) {
    if (arguments.length == 0) {
        return null
    }
    let findMax = 0n;
    try {
        for (let i = 0; i < arguments.length; i++) {
            let item = arguments[i]
            if (typeof (item) !== "bigint") {
                item = BigInt(item)
            }
            if (item > Number.MAX_SAFE_INTEGER || arguments[0] === "") {
                throw error
            }
            if (item > findMax) {
                findMax = item
            }
        }
    } catch (e) {
        return "Big Error"
    }
    return (findMax)
}


console.log(max())
console.log(max(1n, 2n, 20, '10'))
console.log(max('1', '15', '2', '10'))
console.log(max(20 - 12, 15 - 10, 10 - 11))
console.log(max(2 ** 53 - 1))
console.log(max("10" / 3))
console.log(max("salam"))
console.log(max(0n))
console.log(max(""))

