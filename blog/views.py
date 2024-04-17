from django.shortcuts import render
from blog.models import Post

def blog_index(request):
    posts = Post.objects.all()
    context = {
        "posts": posts,
    }
    return render(request, "blog/index.html", context)

def blog_tag(request, tag):
    posts = Post.objects.filter(
        tags__name__contains=tag
    )
    context = {
        "tag": tag,
        "posts": posts,
    }
    return render(request, "blog/tag.html", context)

def blog_detail(request, pk):
    post = Post.objects.get(pk=pk)
    context = {
        "post": post,
    }

    return render(request, "blog/detail.html", context)