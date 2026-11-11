interface HeaderProps {
  title: string;
  text?: string;
}

function Header({ title }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container">
        <h1>{title}</h1>
      </div>
    </header>
  );
}

export default Header;