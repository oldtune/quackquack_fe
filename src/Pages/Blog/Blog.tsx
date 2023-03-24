import { useEffect, useState } from "react";
import { BlogListProps } from "../../Components/BlogList/BlogList";
import { BlogListContainer } from "../../Components/BlogListContainer/BlogListContainer";
import "./Blog.css";

export type BlogPostGroupBySource = {};
export const Blog: React.FC = () => {
  const [blogLists, setBlogLists] = useState<BlogListProps[]>([]);

  useEffect(() => {
    const blogListsData: BlogListProps[] = [
      {
        blogPosts: [
          {
            date: "1/2/2023",
            description: "Test blog post",
            title: "Test blog post on medium",
            url: "https://medium.com/",
            coverImageUrl: "https://google.com/saxsuke",
          },
        ],
        source: "Medium",
      },
    ];
    setBlogLists(blogListsData);
  }, []);
  return (
    <div className="blog-page">
      <BlogListContainer items={blogLists} />
    </div>
  );
};
