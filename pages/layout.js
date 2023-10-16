

const layout = ({children}) => {
    return (
      <html>
        <nav>
            <h1>logo</h1>
            <ul>
                <li>
                    <a href="about">ABout</a>
                </li>
            </ul>
        </nav>
          <body>
            {children}
        </body>
      </html>
    );
};

export default layout;