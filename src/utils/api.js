const webUrl = process.env.BASE_API
const URLS= {
    GetBandwidth: webUrl + '/api/Usage/GetBandwidth',
    GenerateProxy:webUrl + '/api/ProxyGenerage/GenerateProxy',
    StripePay:webUrl+'/api/StripePay/Get',
    LoadAll:webUrl + '/api/OrderList/LoadAll',
    Load:webUrl +'/api/OrderList/Load',
    apply:webUrl +'/api/RainbowPay/Get'
}
export default URLS