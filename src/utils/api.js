const testUrl = 'http://172.16.1.40:8999';
// const testUrl = 'http://dataportal-api.htd.cn';

export default {
    dataIndex:{
        leftMenu: testUrl + '/indexDetail/fieldTree',
        indexSummaryAll:testUrl+'/indexDetail/indexSummaryAll',
        fieldList:testUrl + '/indexDetail/listHomePageFieldIndexDetails',
        oneField:testUrl + '/indexDetail/summaryByField',
        indexInfo:testUrl + '/indexDetail/pageIndexDetail',
        notice:testUrl + '/indexDetail/notice',
        oneIndexInfo:testUrl + '/indexDetail/detail',
        indexChangeRecord: testUrl + '/indexDetail/changeLog',
        searchBlock:testUrl+'/indexDetail/search',
        getTimeData:testUrl+'/indexDetail/lastTime'
    }
}