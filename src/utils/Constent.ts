const token = " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMyIiwic3ViIjoibWV0YUB0ZXN0LmNvbSIsImV4cCI6MTY1NTcxMTc4MiwiaXNzIjoiTUVUQSIsImF1ZCI6Ik1FVEEifQ.OwTS4EHScPoCoqzfASmZT1dx4_njqWt3cbk59HWr48g"
const headers = {
  'MerchantId': 'test',
  'Authorization': token
}

const url = "https://foliov2testbknd.meta-itech.com/api/V3/web/Wishlist";

const Constant = {
  headers,
  url
}

export default Constant;