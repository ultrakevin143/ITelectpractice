type BlogPost = {
    id: string;
    slug: string;
    title: string;
    overview: string;
    content: string;
    category: string[];
    date: string;
    author: string;
}

const BLOG_POST: BlogPost[]= [
    {
        id:"1",
        slug: "test",
        title: " test",
        overview:"Test",
        content: "test",
        category: ["tech","Cook"],
        date:"February 7, 2005",
        author: "Justin Nabunturan"
    },
    {
     id:"2",
        slug: "test",
        title: " test",
        overview:"Test",
        content: "test",
        category: ["tech","Cook"],
        date:"February 7, 2005",
        author: "Justin Nabunturan"
    },
    {
         id:"1",
        slug: "test",
        title: " test",
        overview:"Test",
        content: "test",
        category: ["tech","Cook"],
        date:"February 7, 2005",
        author: "Justin Nabunturan"
    },
]