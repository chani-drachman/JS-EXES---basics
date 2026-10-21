function countType(arr) {
    let countString = 0, countNumber = 0, countNull = 0, countObject = 0, countBoolean = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === null) {
    countNull++;
    continue;
}
        let type = typeof (arr[i])

        switch (type) {
                 case "string":
                countString++;
                break;

            case "number":
                countNumber++;
                break;

            case "boolean":
                countBoolean++;
                break;

            case "object":
                countObject++;
                break;
            


        }

    }
}