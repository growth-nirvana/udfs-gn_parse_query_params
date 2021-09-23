import urlQueryStringToObject from './main.js';

describe ('urlQueryStringToObject', () => {
  // takes a url and returns an object of the query string
  it("takes a url and returns object of the query string", () => {
    const beforeState = "https://getakko.com/phone-protection-plans/?ref=googleadwords11&utm_medium=cpc&utm_source=google&utm_campaign=LS_Search_RLSA&utm_term=&utm_content=533533315638";
    const afterState = { 
      utm_medium: 'cpc', 
      utm_source: 'google', 
      utm_campaign: 'LS_Search_RLSA', 
      utm_term: '', 
      utm_content: '533533315638', 
      ref: 'googleadwords11' 
    };
    expect(urlQueryStringToObject(beforeState)).toEqual(afterState);
  });

  it("handles URL encoding", () => {
    const beforeState = "https://getakko.com";
    const afterState = {}
    expect(urlQueryStringToObject(beforeState)).toEqual(afterState);
  });

  it("handles url encoding", () => {
    const beforeState = "https://getakko.com/?utm_medium=cpc&utm_source=google&utm_campaign=%7Bcampaign%7D&utm_term=&utm_content=528289833099"
    const afterState = {
      utm_medium: 'cpc',
      utm_source: 'google',
      utm_campaign: '{campaign}',
      utm_term: '',
      utm_content: '528289833099'
    };
    expect(urlQueryStringToObject(beforeState)).toEqual(afterState);
  }); 

  it("hanldes null values in the URL", () => {
    const beforeState = null;
    const afterState = {};
    expect(urlQueryStringToObject(beforeState)).toEqual(afterState);
  });

  it("handles empty values in the URL", () => {
    const beforeState = "";
    const afterState = {};
    expect(urlQueryStringToObject(beforeState)).toEqual(afterState);
  });

  it("handles undefined values in the URL", () => {
    const beforeState = undefined;
    const afterState = {};
    expect(urlQueryStringToObject(beforeState)).toEqual(afterState);
  });

  it("handles a url string as a parameter value", () => {
    const stateBefore = "https://getakko.com/?utm_medium=https%3A%2F%2Fgetakko.com%3Fresult%3Dbreaking-change%26copy%3Dawesome";
    const stateAfter = {
      utm_medium: 'https://getakko.com?result=breaking-change&copy=awesome'
    }
    expect(urlQueryStringToObject(stateBefore)).toEqual(stateAfter);
  });
  it("handles an empty param", () => {
    const stateBefore = "https://getakko.com/?utm_medium=";
    const stateAfter = {
      utm_medium: ''
    };
    expect(urlQueryStringToObject(stateBefore)).toEqual(stateAfter);
  })
})
