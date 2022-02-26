function isEven(n) {
    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else {
        for (n; n !== 0 || n !== 1;) {
            if (n > 0) {
                n -= 2
            } else {
                n += 2
            }
            if (n == 0) {
                return true;
            } else if (n == 1) {
                return false;
            }

        }

    }
}

console.log(isEven(-4));