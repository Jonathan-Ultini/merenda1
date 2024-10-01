function sommaInteri(N) {
    let somma = 0;
    let count = 0;
    if (N < 0 || typeof N !== 'number') {
        return 'Invalid input';
    }

    for (let i = 1; i <= N; i++) {
        if (somma + i > N) {
            return count;
        }
        somma += i;
        count++;
        console.log('somma: ' + somma + ' count: ' + count)
    }

    console.clear();
    return count;

}