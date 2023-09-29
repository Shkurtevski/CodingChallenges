interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="container">
      <div className="content">{children}</div>
    </div>
  );
};

export default Container;
