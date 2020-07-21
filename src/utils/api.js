console.log(process.env)
const webUrl = process.env.BASE_API
const URLS= {
        basicInfo: webUrl + '/membership/basic',
        memberInfo:webUrl+'/membership/info',
        tradeList:webUrl + '/trade/list',
        adminInfo:webUrl + '/admin/memberInfo',
        adminList:webUrl + '/admin/memberList',
        admintrade:webUrl + '/admin/trade',
        formTrade:webUrl + 'trade/result',
        predata:webUrl + 'trade/predata',
        logIn:webUrl +'/login',
        logOut:webUrl +'/logout'
}
export default URLS