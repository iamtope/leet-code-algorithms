/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    let result = new Array()
    let map = new Map()
    // validates amount
    for (let i = 0; i < transactions.length; i++) {
        let temp = transactions[i].split(',')
        // ["alice", "20", "800", "mtv"]
        if (Number(temp[2]) > 1000) {
            result.push(transactions[i])
        } else {
            // {"alice" : "20,mtv"}
            map.set(temp[0], temp[1] + "," + temp[3] + "," + i) 
        }

    }
    // diff in time = 60 min and diff city
    // ["alice,0,800,mtv","alice,40,800,chicago","alice,61,800,newyork"]
    for (const [key, value] of map.entries()) {
        // key - iterate through value
        // keys: ["john" : ["20,mtv,2", "60,chicago,3", "80,newyork,7"], "alice" : []]
        for (let i = 1; i < value.length; i++) {
            // ["20", "mtv", "2"]
            let comp1 =  value[i].split(",")
            let comp0 = value[i-1].split(",")
            if (comp1[1] != comp0[1] && Number(comp1[0]) - Number(comp0[0]) > 60) {
                result.push(transactions[Number(comp0[2])])
                result.push(transactions[Number(comp1[2])])
            }
        }
    } 
    console.log('res',result)
    return result
};
