export namespace Wiki {
    type GetPagesBySearchQueryFunction = (query: String) => SearchResult;
    type GetAnswerForTwoPages = (pageA: Page, pageB: Page) => Answer;    
    type GetPathLengthForTwoPages = (pageA: Page, pageB: Page) => Number;
    type GetCurrentSearchTimesForPathLength = (pathLength: Number) => Number;
    type APIState = 'Online' | 'Offline' | 'Loading';
    type GetPageByName = (input: String) => Page;
    type GetCurrentAPIState=() => APIState;
    
    interface IPageSource {
        ByName: GetPageByName
    }

    interface IPathSearch {
        State: GetCurrentAPIState,
        ResponseTimeForLength: GetCurrentSearchTimesForPathLength,
        SearchPages: GetPagesBySearchQueryFunction,
        SearchPathForTwoPages: GetAnswerForTwoPages,
        PathLengthForTwoPages: GetPathLengthForTwoPages
    }
    type Page = {
        UUID: String;
        Title: String;
        Description: String;
        PreviewURL: String;
        Links: Map<String, Page>;
    }
    type SearchResult = {
        Results: Array<Page>;
    }
    type Path = {
        PathLength: Number;
        Pages: Array<Page>;
    }
    type Answer = {
        PathsCount: Number;
        Paths: Set<Path>;
    }
}

