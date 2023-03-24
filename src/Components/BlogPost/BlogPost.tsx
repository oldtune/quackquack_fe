export type BlogPostProps = {
  url: string;
  title: string;
  description: string;
  date: string;
  coverImageUrl?: string;
};

export const BlogPost: React.FC<BlogPostProps> = (props) => {
  return (
    <div>
      <p>{props.date}</p>
      <p>{props.title}</p>
      <p>{props.description}</p>
    </div>
  );
};
