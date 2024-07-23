const PageLayout = ({ header, footer, children }) => {
  return (
    <div>
      <h1>{header}</h1>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  );
};
export default PageLayout;
