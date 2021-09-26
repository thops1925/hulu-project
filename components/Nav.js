import request from '../utils/request';

function Nav() {
  return (
    <nav>
      <div>
        {Object.entries(request).map(([key, { title, url }]) => {
          <h2
            key={key}
            className="cursor-pointer transition duration-100
             transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>;
        })}
      </div>
    </nav>
  );
}

export default Nav;
