const useFormatDate = (date) => {
    let rawDate = new Date(date)

    let month = rawDate.getMonth() + 1
    let day = rawDate.getDate()
    let year = rawDate.getFullYear()

    return `${month}/${day}/${year}`
}

export default useFormatDate