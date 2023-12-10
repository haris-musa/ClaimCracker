from django.shortcuts import render
import arxiv
from django.http import JsonResponse

def fetch_deep_learning_papers(request):
    # Define your search query
    search = arxiv.Search(
      query = "ti:'fact check NLP' AND cat:cs.CL",
      max_results = 6,
      sort_by = arxiv.SortCriterion.SubmittedDate
    )

    papers = []
    for result in search.results():
        papers.append({
            'title': result.title,
            'summary': result.summary,
            'authors': [author.name for author in result.authors],
            'link': result.entry_id
        })

    return JsonResponse(papers, safe=False)
