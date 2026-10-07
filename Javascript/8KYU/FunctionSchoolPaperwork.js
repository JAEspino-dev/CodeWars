function paperwork(n, m) {
    let classmates = n
    let paperwork = m
    if (classmates < 0 || paperwork < 0) {
        return 0;
    }
    // blank pages = classmates × pages per paperwork
    return classmates * paperwork;

}