import paySomthing from '@/views/paymentMethods/store'
const vuexSetting = {
    state:{
        // 地址
        globalUrl:{
            staticUrl:process.env.STATIC_URl,
            returnUrl:process.env.RETURN_URL,
            aliImgUrl:process.env.INAGE_URL,
            apiUrl:process.env.BASE_API,
            uploadUrl:process.env.BASE_API2,
        },
        // 用户信息
        userInfo:{
            __MEMBERCODE__:'',
            __NEWTOKEN__:'',
            __TICKET__:'',
            accountNo: "",
            applySellerIds: "",
            avatar: "",
            boxSellerIds: '',
            // 用户等级
            buyerGrade: 0,
            // 所在城市cityCode
            cityCode: "",
            countyCode: "",
            curBelongErpCode: "",
            curBelongSellerId: '',
            curBelongSellerName: "",
            detailAddress: "",
            isBuyer: '',
            isPhoneAuthenticated: '',
            isSeller: '',
            memberCode: "",
            memberGroupId: "",
            memberId: "",
            phone: "",
            provinceCode: "",
            realNameStatus: "",
            searchBelongSellerId: "",
            sellerType: "",
            ticket: '',
            townCode: "",
            userId: "",
            userName: "",
            // 用户信息加载状态（默认未加载完成）
            userInfoLoaded:false,
        },
        //服务器时间
        localTime: new Date().getTime(),
        exchangesetCode:null,
    },
    mutations:{
        // 存储用户信息
        setUserInfo(state,key){
            for (var prop in key){
                state.userInfo[prop] = key[prop]
            }
        },
        //更新服务器时间
        upTime(state,value){
            state.localTime = value
        },
        //更新header信息
        upHeader(state,key){
            for (var prop in key){
                state.header[prop] = key[prop]
            }
        },
    },
    getters:{
        // 用户等级
        isVip: (state) => {
            return  state.userInfo.buyerGrade == 6 ? true : false;
        }
    },
    modules:{
        paySomthing
    }
   
}

export default vuexSetting