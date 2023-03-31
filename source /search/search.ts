import { Wiki } from "../wiki"


class WikiPath implements Wiki.IPathSearch {
    private table: Number[][]
    private size: Number
    private pages: Wiki.Page[]
    private state: Wiki.APIState
    private connection: WebSocket
    
    public State() {
        return this.state
    }
    public ResponseTimeForLength(length: Number) {
        return 0;
    }

    public constructor(pages: Array<Wiki.Page>) {
        this.pages = pages
        this.size = pages.length
    }

    private CreateSearchTable() {
        
    }

    private UpdateSearchTable() {
        
    }
    
    public SearchPages: Wiki.GetPagesBySearchQueryFunction = (query: String) => {
        return null as unknown as Wiki.SearchResult;
    }

    public SearchPathForTwoPages: Wiki.GetAnswerForTwoPages = (pageA: Wiki.Page, pageB: Wiki.Page) => {
        return null as unknown as Wiki.Answer;
    }

    public PathLengthForTwoPages: Wiki.GetPathLengthForTwoPages = (pageA: Wiki.Page, pageB: Wiki.Page) => {
        return 0;
    }
}