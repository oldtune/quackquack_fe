import { List } from "antd";
import { BlogPost, BlogPostProps } from "../BlogPost/BlogPost";
import "./BlogList.css";

export type BlogListProps = {
  blogPosts: BlogPostProps[];
  source: string;
};

export const BlogList: React.FC<BlogListProps> = (props) => {
  const blogPosts = props.blogPosts.map((blogPost) => (
    <BlogPost {...blogPost} />
  ));

  const pagination = {
    onchange: (page: number) => {
      console.log(page);
    },
    pageSize: Number.MAX_VALUE,
  };

  const dataSource = [];

  const imageConstructor = (item: any) => {
    return <img alt="title" src="https://google.com/" />;
  };

  const title = (item: any) => item.title;
  const description = (item: any) => item.description;
  return (
    // <div>
    //   <div>{props.source}</div>
    //   <div>{blogPosts}</div>
    // </div>
    <div className="blog-list">
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => console.log(page),
          pageSize: Number.MAX_VALUE,
        }}
        dataSource={[{ key: 1 }, { key: 2 }]}
        renderItem={(item) => (
          <List.Item
            key={item.key}
            extra={
              <img width={272} alt="Cover image" src="https://google.com/" />
            }
          >
            <List.Item.Meta title="quack" description="Quack">
              See ya
            </List.Item.Meta>
          </List.Item>
        )}
      />
    </div>
  );
};
