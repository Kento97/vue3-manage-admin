import request from '@/utils/request';

type IQuery = Record<string, string | number>
export const fetchData = (query: IQuery) => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};
