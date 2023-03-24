import { BlogList, BlogListProps } from "../BlogList/BlogList";
import "./BlogListContainer.css";

export type BlogListContainerProps = {
  items: BlogListProps[];
};

export const BlogListContainer: React.FC<BlogListContainerProps> = (props) => {
  let blogList = props.items.map((item) => <BlogList {...item} />);
  return (
    <div className="blog-list-container" key={1}>
      {blogList}
    </div>
  );
};
