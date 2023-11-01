export default function useMoneyFormatter(price) {
    let UZS = new Intl.NumberFormat()
    return UZS.format(price) + ' so`m'
}